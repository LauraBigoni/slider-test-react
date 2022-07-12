import React from "react";
import styles from "./SliderPage.css";
import SliderCard from "../SliderCard/SliderCard";
import InputElements from "../InputElements/InputElements";
import NavigationElements from "../NavigationElements/NavigationElements";

const SliderPage = () => (
  <div className={styles.SliderPage}>
    <div className="slider flex flex-col justify-center">
      <div
        className="
            flex
            md:flex-row
            flex-col
            justify-between
            items-center
            basis-basis-1/5
          "
      >
        <h1
          className="
              mix-blend-difference
              text-gray-100 text-4xl
              font-bold
              grow
              text-center
              pt-2
            "
        >
          Section Cards
        </h1>
        <InputElements />
      </div>
      <div className="flex justify-center basis-3/5">
        <div className="slider-cards flex flex-row items-center justify-start">
          <SliderCard className="w-60 h-80 ease-in duration-300 card shrink-0" />
        </div>
      </div>
      <NavigationElements />
    </div>
  </div>
);

SliderPage.propTypes = {};

SliderPage.defaultProps = {};

export default SliderPage;
