import React from "react";

class InputElements extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.props.bgColor);
  }
  render() {
    const bgColor = this.props.props.bgColor;
    const handleBgChange = this.props.handleBgChange;
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
            value={this.props.value}
            onChange={this.props.handleValueChange}
          />

          <output>{this.props.value}</output>
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
            onChange={handleBgChange}
          />
        </div>
      </div>
    );
  }
}
export default InputElements;
