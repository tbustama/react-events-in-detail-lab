// Code CoordinatesButton Component Here
import React from "react";
export default class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    this.fun([e.clientX, e.clientY]);
  };
  fun = (arr) => this.props.onReceiveCoordinates(arr);
  render() {
    return <button onClick={this.handleClick}>Button</button>;
  }
}
