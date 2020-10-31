import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/footeStyles"

function PaletteFooter(props) {
    const {paletteName, emoji} = props
  return (
    <footer className={props.classes.PaletteFooter}>
      {paletteName}
  <span className={props.classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter)