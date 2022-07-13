import React from "react";
import { Component } from "react";

class InputElements extends Component {
  constructor(props) {
    super(props);
    this.handleValue = this.handleValue.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
    this.state = {
      bgColor: "#FFFFFF",
      value: 3,
    };
  }

  handleValue(e) {
    console.log(this);
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.value);
  }
  handleBackground(e) {
    this.setState({
      bgColor: e.target.value,
    });
    console.log(this.state.bgColor);
  }

  render() {
    const value = this.state.value;
    const bgColor = this.state.bgColor;
    return (
      <div
        className="
			input-container
			flex
			justify-end
			md:gap-10
			grow
			flex-col
			md:flex-row
			items-center
		"
      >
        <div
          className="
				mix-blend-difference
				text-gray-100
				flex
				items-center
				basis-1/2
				md:py-3
				py-5
			"
        >
          <label>Number of cards:</label>
          <input
            type="range"
            min="0"
            max="42"
            step="1"
            name="cards-range"
            id="cards-range"
            className="mx-3"
            value={value}
            onInput={this.handleValue}
          />

          <output>{this.state.value}</output>
        </div>

        <div className="flex items-center basis-1/2 md:py-3">
          <label className="pr-4 mix-blend-difference text-gray-100">
            Background color:
          </label>
          <input
            type="color"
            name="color-picker"
            id="color-picker"
            value={bgColor}
            onInput={this.handleBackground}
          />
        </div>
      </div>
    );
  }
}

export default InputElements;
