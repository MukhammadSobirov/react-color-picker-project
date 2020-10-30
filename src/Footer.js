import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  PaletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "1rem",
  }
}

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