import React, { Component } from "react";
import {Select, MenuItem } from "@material-ui/core";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./NavBar.css"

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {format: "hex"}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({format: e.target.value});
    this.props.handleChange(e.target.value)
  }
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
        <div className="select-container">
          <Select value={this.state.format} onChange={this.handleChange}>
              <MenuItem value="hex">HEX - #fffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255, 255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 255, 0.1)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
