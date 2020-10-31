import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Select, MenuItem, Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import styles from "./styles/NavBarStyles";
import { withStyles } from "@material-ui/styles";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  handleChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.NavBar}>
        <div className={classes.Logo}>
          <Link to="/">ReactColorPicker</Link>
        </div>
        {this.props.showingAllColors && (
          <div>
            <span>Level: {this.props.level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={this.props.level}
                step={100}
                min={100}
                max={900}
                onAfterChange={this.props.changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255, 255)</MenuItem>
            <MenuItem value="rgba">
              RGBA - rgba(255, 255, 255, 255, 0.1)
            </MenuItem>
          </Select>
        </div>
        <Snackbar
          // onClose={this.closeSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="msg-id">Format Changed</span>}
          ContentProps={{
            "aria-describedby": "msg-id",
          }}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(NavBar);
