import React from "react";
import { createElement } from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.initialValue,
    };
  }

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    const buttonDecrement = createElement(
      "button",
      {
        onClick: this.handleDecrement,
      },
      "-"
    );

    const buttonIncrement = createElement(
      "button",
      {
        onClick: this.handleIncrement,
      },
      "+"
    );

    return createElement(
      "div",
      { className: "counterDiv" },
      buttonDecrement,
      this.state.number,
      buttonIncrement
    );
  }
}
