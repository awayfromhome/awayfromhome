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
  entireContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  background: {
    height: "60vh",
    width: "100vw"
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    width: "70vw"
  },
  textField: {
    width: 470,
    marginLeft: "5vw"
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
    height: 40,
    width: 40,
    borderRadius: 8,
    background: theme.palette.accent.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  },
  selectors: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 50
  },
  rightSearchContainer: {
    width: "35vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  counter: {
    display: "flex",
    alignItems: "center",
    width: "12vw"
  },
  leftSearchContainer: {
    width: "32vw"
  }
});

const HomePage = props => {
  const { classes } = props;
  return (
    <div className={classes.entireContainer}>
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
                className={classes.datepicker}
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
                className={classes.datepicker}
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
            <button> Search </button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
