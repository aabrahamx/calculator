import React from "react";
import "./Button.css";

export class Button extends React.Component {
  render() {
    return (
      <input
        type="button"
        value={this.props.btnValue}
        onClick={this.props.onClick}
        className={this.props.className + " input"}
      />
    );
  }
}
