import React from "react";
import styles from "./InputElements.css";

function InputElements() {
  const handleValue = (e) => {
    console.log("Value", e.target.value);
  };
  const bgChange = () => {
    console.log("BgChange");
  };
  return (
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
            onInput={(e) => {
              handleValue(e);
            }}
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
            onInput={bgChange}
          />
        </div>
      </div>
    </div>
  );
}

export default InputElements;
