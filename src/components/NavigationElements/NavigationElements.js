import React from "react";
import styles from "./NavigationElements.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

function NavigationElements() {
  return (
    <div className={styles.NavigationElements}>
      <div className="navigation-slider basis-basis-1/5">
        <BsArrowLeft
          className="
              invisible
              lg:visible
              prev
              ease-in
              duration-300
              mix-blend-difference
              text-gray-100 absolute top-50 top-1/2 left-16 text-4xl hover:scale-125
            "
        />
        <BsArrowRight
          className="
              invisible
              lg:visible
              next
              ease-in
              duration-300
              mix-blend-difference
              text-gray-100 absolute top-50 top-1/2 right-16 text-4xl hover:scale-125
            "
        />
        <div
          className="
              dots
              flex
              justify-center
              flex-wrap
              pb-2
              md:pb-0
              mix-blend-difference
              text-gray-100
            "
        >
          <GoPrimitiveDot />
          <GoPrimitiveDot />
          <GoPrimitiveDot />
        </div>
      </div>
    </div>
  );
}

export default NavigationElements;
