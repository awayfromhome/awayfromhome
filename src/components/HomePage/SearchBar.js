import React, { useState } from "react";
import axios from "axios";
import { useInput } from "../../hooks/input-hook";
import "date-fns";
import { addDays } from "date-fns";
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
    width: "100%"
  },
  textField: {
    width: "75%",
    marginLeft: "13%"
  },
  paper: {
    width: "93%",
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
    marginTop: "2%",
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
  ["@media (min-width: 1203px) and (max-width: 1610px)"]: {}
});

const SearchBar = props => {
  const { classes } = props;
  const {
    value: destination,
    setValue: setDestination,
    bind: bindDestination,
    reset: resetDestination
  } = useInput("");
  const {
    value: occupants,
    setValue: setOccupants,
    bind: bindOccupants,
    reset: resetOccupants
  } = useInput(0);
  const {
    value: rooms,
    setValue: setRooms,
    bind: bindRooms,
    reset: resetRooms
  } = useInput(0);
  const {
    value: checkIn,
    set: setCheckIn,
    bind: bindCheckIn,
    reset: resetCheckIn
  } = useInput(new Date());
  const {
    value: checkOut,
    set: setCheckOut,
    bind: bindCheckOut,
    reset: resetCheckOut
  } = useInput(addDays(new Date(), 1));

  const handleSubtractOccupants = () => {
    if (occupants <= 0) {
      setOccupants(0);
    } else {
      setOccupants(+occupants - 1);
    }
  };

  const handleSubtractRooms = () => {
    if (rooms <= 0) {
      setRooms(0);
    } else {
      setRooms(+rooms - 1);
    }
  };

  const handleAddOccupants = () => {
    setOccupants(+occupants + 1);
  };

  const handleAddRooms = () => {
    setRooms(+rooms + 1);
  };

  const handleSubmit = () => {
    axios.get("/api/hotel");
  };

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
              {...bindDestination}
            />

            <div className={classes.selectors}>
              <div className={classNames(classes.occupantDiv, classes.counter)}>
                <div
                  className={classes.button}
                  onClick={() => handleSubtractOccupants()}
                >
                  <Remove />
                </div>
                <TextField
                  variant="outlined"
                  label="Occupants"
                  InputLabelProps={{
                    shrink: true
                  }}
                  {...bindOccupants}
                />
                <div
                  className={classes.button}
                  onClick={() => handleAddOccupants()}
                >
                  <Add />
                </div>
              </div>
              <div className={classNames(classes.RoomDiv, classes.counter)}>
                <div
                  className={classes.button}
                  onClick={() => handleSubtractRooms()}
                >
                  <Remove />
                </div>
                <TextField
                  variant="outlined"
                  label="Rooms"
                  InputLabelProps={{
                    shrink: true
                  }}
                  {...bindRooms}
                />
                <div
                  className={classes.button}
                  onClick={() => handleAddRooms()}
                >
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
                {...bindCheckIn}
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
                {...bindCheckOut}
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
            <button onClick={() => handleSubmit()}>Search</button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(SearchBar));
