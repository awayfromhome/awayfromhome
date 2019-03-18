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
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";

const styles = theme => ({
  background: {
    height: "50vh",
    width: "70vw",
    margin: "auto"
  },
  searchContainer: {
    display: "flex",
    alignItems: "center"
  },
  textField: {
    width: 470
  },
  paper: {
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    borderBottom: "5px solid #656D79"
  },
  buttonLabels: {
    width: 100
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 8,
    background: theme.palette.accent.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  selectors: {
    display: "flex",
    alignItems: "center"
  },
  rightSearchContainer: {
    width: "35vw"
  },
  counter: {
    display: "flex",
    alignItems: "center"
  },
  leftSearchContainer: {
    width: "35vw",
    marginLeft: 200
  }
});

const HomePage = props => {
  const { classes } = props;
  return (
    <div className={classes.background}>
      <img
        className={classes.background}
        src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
        alt="main"
      />
      <Paper className={classes.paper}>
        <div className={classes.searchContainer}>
          <div className={classes.leftSearchContainer}>
            <TextField
              label="Destination"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.textField}
              autoFocus={true}
            />
            <div className={classes.selectors}>
              <div className={classNames(classes.occupantDiv, classes.counter)}>
                <div className={classes.button}>
                  <Remove />
                </div>
                <TextField
                  variant="outlined"
                  label="Occupants"
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.buttonLabels}
                />
                <div className={classes.button}>
                  <Add />
                </div>
              </div>
              <div className={classNames(classes.RoomDiv, classes.counter)}>
                <div className={classes.button}>
                  <Remove />
                </div>
                <TextField
                  variant="outlined"
                  label="Rooms"
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.buttonLabels}
                />
                <div className={classes.button}>
                  <Add />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rightSearchContainer}>
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
          </div>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
