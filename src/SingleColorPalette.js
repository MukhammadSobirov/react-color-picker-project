import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./Footer";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(evt) {
    this.setState({ format: evt });
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    //return all shades of given color
    return shades.slice(1);
  }
  render() {
      const {paletteName, emoji} = this.props.palette
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        showLink={false}
        key={color.id}
        name={color.name}
        background={color[this.state.format]}
      />
    ));
    return (
      <div className="Palette">
        <NavBar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
