import React, { useState } from "react";
import "date-fns";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateRange from "@material-ui/icons/DateRange";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  background: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden "
  },
  paper: {
    width: 1000,
    margin: "auto",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, 50%)"
  }
});

const HomePage = props => {
  const { classes } = props;
  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>
        <TextField
          label="Destination"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          className={classes.textField}
          // autoFocus={true}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            margin="normal"
            label="Check-In"
            // value={selectedDate}
            // onChange={this.handleDateChange}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <DateRange />
                </InputAdornment>
              )
            }}
          />
          <DatePicker
            margin="normal"
            label="Check-Out"
            // value={selectedDate}
            // onChange={this.handleDateChange}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <DateRange />
                </InputAdornment>
              )
            }}
          />
        </MuiPickersUtilsProvider>
      </Paper>
      <img
        className={classes.background}
        src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
        alt="main"
      />
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(HomePage));

// https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80
// use as background image
