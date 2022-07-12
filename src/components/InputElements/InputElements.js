import React from "react";
import styles from "./InputElements.css";

const InputElements = () => (
  <div className={styles.InputElements}>
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
          onInput={this.handleValue}
        />

        <output>3</output>
      </div>

      <div className="flex items-center basis-1/2 md:py-3">
        <label className="pr-4 mix-blend-difference text-gray-100">
          Background color:
        </label>
        <input
          type="color"
          name="color-picker"
          id="color-picker"
          value="#F4EAE1"
        />
      </div>
    </div>
  </div>
);

InputElements.propTypes = {
  handleValue(event) {
    this.setState({ value: event.target.value });
  },
};

InputElements.defaultProps = {};

export default InputElements;
