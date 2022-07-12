import React from "react";
import styles from "./SliderCard.css";

function SliderCard() {
  return (
    <div className={styles.SliderCard}>
      <div
        className="
			p-6 mx-10
			rounded-3xl
			shadow-lg
			bg-white
			flex flex-col
			justify-center
			items-center
			text-center
		"
      >
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src="https://api.lorem.space/image/fashion?w=150&h=150"
          alt="alt logo"
        />
        <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          A very long long card title to test
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="
				py-2
				px-4
				text-sm
				font-medium
				rounded-lg
				bg-red-500
				hover:bg-red-400
				focus:bg-red-600
				active:bg-red-700
				text-white
				ease-in
				duration-300
			"
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default SliderCard;
