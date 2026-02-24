import { Component } from "react";
import "../index.css";

export default class Container extends Component {
  render() {
    const { children, className, dataAnimate } = this.props;
    return (
      <div
        className={className ? `container ${className}` : `container`}
        data-animate={dataAnimate}
      >
        {children}
      </div>
    );
  }
}
