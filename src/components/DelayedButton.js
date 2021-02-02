// Code DelayedButton Component Here
import React from "react";

export default class DelayedButton extends React.Component {
  handleClick = (e) => {
    e.persist();
    setTimeout(() => {
      this.passedFun(e);
    }, this.delay());
  };
  passedFun = (e) => this.props.onDelayedClick(e);
  delay = () => this.props.delay;
  render() {
    return <button onClick={this.handleClick}>Delay</button>;
  }
}
