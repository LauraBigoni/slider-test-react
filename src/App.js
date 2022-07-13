import React from "react";
import "./App.css";
import SliderPage from "./components/SliderPage/SliderPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#F4EAE1",
    };
    this.handleBgChange = this.handleBgChange.bind(this);
  }
  handleBgChange(e) {
    this.setState({ bgColor: e.target.value });
    console.log(e.target.value);
  }
  render() {
    const bgColor = this.state.bgColor;
    return (
      <div className="App" style={{ backgroundColor: bgColor }}>
        <SliderPage
          bgColor={this.state.bgColor}
          handleBgChange={this.handleBgChange}
        />
      </div>
    );
  }
}
export default App;
