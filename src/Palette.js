import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar"


class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(evt){
    this.setState({format: evt})
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
        <div className="Palette-colors">
          {/*color boxes*/}
          {colorBoxes}
        </div>
        {/*footer */}
      </div>
    );
  }
}

export default Palette;
