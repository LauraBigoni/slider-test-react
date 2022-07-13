import React from "react";
import styles from "./SliderPage.css";
import SliderCard from "../SliderCard/SliderCard";
import InputElements from "../InputElements/InputElements";
import NavigationElements from "../NavigationElements/NavigationElements";

class SliderPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleBgChange = this.handleBgChange.bind(this);
    this.state = {
      bgColor: "#F4EAE1",
      value: 3,
    };
  }
  handleValueChange(e) {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  }
  handleBgChange(e) {
    this.setState({ bgColor: e.target.value });
  }
  render() {
    return (
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
            <InputElements
              value={this.state.value}
              handleValueChange={this.handleValueChange}
              bgColor={this.state.bgColor}
              handleBgChange={this.handleBgChange}
            />
          </div>
          <div className="flex justify-center basis-3/5">
            <div className="slider-cards flex flex-row items-center justify-start">
              {(() => {
                let cards = [];
                for (let i in this.state.value) {
                  cards.push(
                    <SliderCard
                      className="w-60 h-80 ease-in duration-300 card shrink-0"
                      key={i}
                    />
                  );
                }
                console.log(cards);
                return cards;
              })()}
            </div>
          </div>
          <NavigationElements />
        </div>
      </div>
    );
  }
}
export default SliderPage;
