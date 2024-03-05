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
        "data-cy": "decrementBtn",
      },
      "-"
    );

    const buttonIncrement = createElement(
      "button",
      {
        onClick: this.handleIncrement,
        "data-cy": "incrementBtn",
      },
      "+"
    );

    return createElement(
      "div",
      { className: "counterDiv" },
      buttonDecrement,
      createElement("span", { "data-cy": "valueSpan" }, this.state.number),
      buttonIncrement
    );
  }
}
