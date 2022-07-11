import React from "react";
import styles from "./SliderPage.css";
import SliderCard from "../SliderCard/SliderCard";
import InputElements from "../InputElements/InputElements";

const SliderPage = () => (
  <div className={SliderPage}>
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
          <SliderCard />
        </div>
      </div>
      <div className="navigation-slider basis-basis-1/5">
        <i
          className="
              invisible
              lg:visible
              fa-solid fa-arrow-left
              prev
              ease-in
              duration-300
              mix-blend-difference
              text-gray-100
            "
        ></i>

        <i
          className="
              invisible
              lg:visible
              fa-solid fa-arrow-right
              next
              ease-in
              duration-300
              mix-blend-difference
              text-gray-100
            "
        ></i>
        <div
          className="
              dots
              flex
              justify-center
              flex-wrap
              gap-2
              px-5
              pb-2
              md:pb-0
              mix-blend-difference
              text-gray-100
            "
        >
          <i className="fa-solid fa-circle"></i>
        </div>
      </div>
    </div>
  </div>
);

SliderPage.propTypes = {};

SliderPage.defaultProps = {};

export default SliderPage;
