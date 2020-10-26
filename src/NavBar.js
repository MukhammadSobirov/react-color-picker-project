import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./NavBar.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="Logo">
          <a href="/">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {this.props.level}</span>
          <div className="slider">
            <Slider
              defaultValue={this.props.level}
              step={100}
              min={100}
              max={900}
              onAfterChange={this.props.changeLevel}
            />
          </div>
        </div>
      </nav>
    );
  }
}
