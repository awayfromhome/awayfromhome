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
  searchContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "2%"
  },
  textField: {
    width: "75%",
    marginLeft: "13%"
  },
  paper: {
    marginLeft: "1%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    borderBottom: "5px solid #656D79",
    paddingBottom: 20,
    paddingTop: 20
  },
  buttonLabels: {
    width: "65%"
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 8,
    background: theme.palette.accent.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "3%"
  },
  selectors: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    justifyContent: "center",
    marginTop: "4%",
    width: "100%"
  },
  rightSearchContainer: {
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  counter: {
    display: "flex",
    alignItems: "center",
    width: "39%"
  },
  leftSearchContainer: {
    width: "60%"
  },
  datepicker: {
    margin: "1%"
  },
  calendars: {
    display: "flex"
  },
  [theme.breakpoints.down("749")]: {
    searchContainer: {
      flexDirection: "column"
    },
    textField: {
      width: "80%",
      marginLeft: "10%"
    },
    leftSearchContainer: {
      width: "auto"
    },
    counter: {
      width: "100%"
    },
    counter: {
      margin: "1%",
      width: "100%"
    },
    button: {
      margin: 10
    },
    rightSearchContainer: {
      marginTop: "5%",
      width: "100%",
      flexDirection: "column"
    },
    calendars: {
      width: "90%"
    },
    selectors: {
      width: "80%",
      marginTop: "5%"
    },
    searchButton: {
      marginTop: "5%"
    }
  },
  ["@media (min-width: 1203px) and (max-width: 1610px)"]: {}
});

const SearchBar = props => {
  const { classes } = props;
  return (
    <div>
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
            <div className={classes.calendars}>
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
            </div>
            <button className={classes.searchButton}> Search </button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(SearchBar));

// added new div around calendars and a classname
