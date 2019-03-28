import React, { useState } from 'react';
import { useInput } from '../../hooks/input-hook';
import { addDays, format } from 'date-fns';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateRange from '@material-ui/icons/DateRange';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { getHotelList } from '../../ducks/lists/listAsync';
import { setSearchInfo } from '../../ducks/lists/listSync';
import { setUser } from '../../ducks/auth/authSync';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '2%'
  },
  textField: {
    width: '90%',
    marginLeft: '5%'
  },
  paper: {
    marginLeft: '1%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    borderBottom: '5px solid #656D79',
    paddingBottom: 20,
    paddingTop: 20,
    width: '70%'
  },
  selectors: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    justifyContent: 'center',
    marginTop: '4%',
    width: '100%'
  },
  rightSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  leftSearchContainer: {
    width: '60%'
  },
  datepicker: {
    margin: '3%'
  },
  calendars: {
    display: 'flex',
    marginLeft: '2%'
  },
  outerButtonDiv: {
    width: '50%',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily[0],
    fontSize: 17,
    fontWeight: 600
  },
  outercounter: {
    borderRadius: '25px 25px 25px 25px',
    border: '1px solid black',
    width: '22vh',
    height: 50,
    background: '#4C525A',
    display: 'flex',
    alignItems: 'center',
    margin: '5px auto'
  },
  innercounter: {
    borderRadius: '50%',
    border: '1px solid black',
    width: '3vw',
    height: 50,
    background: '#fff',
    textAlign: 'center',
    fontSize: 30,
    margin: 'auto'
  },
  Rightbutton: {
    color: '#fff',
    marginRight: 'auto'
  },
  Leftbutton: {
    marginLeft: 'auto',
    color: '#fff'
  },
  searchButtonContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '4%'
  },
  searchButton: {
    fontFamily: theme.typography.fontFamily[0],
    marginTop: '5%',
    padding: '12px 80px',
    borderRadius: 50
  },
  count: {
    fontSize: 21,
    lineHeight: '50px',
    margin: 'auto',
    height: '100%',
    fontWeight: 400
  },
  [theme.breakpoints.down('749')]: {
    paper: {
      width: 'auto'
    },
    searchContainer: {
      flexDirection: 'column'
    },
    textField: {
      width: '80%',
      marginLeft: '10%'
    },
    leftSearchContainer: {
      width: '100%'
    },
    searchButton: {
      marginTop: 0
    },
    rightSearchContainer: {
      marginTop: '5%',
      marginRight: 0,
      width: '100%',
      flexDirection: 'column'
    },
    calendars: {
      width: '95%'
    },
    innercounter: {
      width: '13vw'
    }
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
    paper: {
      width: '90%'
    },
    searchContainer: {
      width: '95%'
    },
    outercounter: {
      width: 'auto'
    },
    outerButtonDiv: {
      marginRight: '3%',
      width: '15vw'
    },
    innercounter: {
      width: '5vw'
    },
    calendars: {
      marginTop: '0.5vh'
    }
  }
}));

const SearchBar = props => {
  const classes = useStyles();
  const {
    value: destination,
    bind: bindDestination,
    reset: resetDestination
  } = useInput('Dallas');
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
    value: checkOut,
    setValue: setCheckOut,
    bind: bindCheckOut,
    reset: resetCheckOut
  } = useInput(addDays(new Date(), 1));
  const [checkIn, setCheckIn] = useState(new Date());
  const [error, setError] = useState('');

  const reset = () => {
    resetDestination();
    resetOccupants();
    setCheckIn(new Date());
    resetCheckOut();
    resetRooms();
  };

  const handleSubtractOccupants = () => {
    if (occupants <= 0) {
      setOccupants(0);
    } else {
      setOccupants(+occupants - 1);
      let rule = +occupants / 4;
      rule -= 0.25;
      if (rule % 1 === 0) {
        setRooms(rule);
      }
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
    const rule = +occupants / 4;
    if (rule % 1 === 0) {
      setRooms(rule + 1);
    }
    setOccupants(+occupants + 1);
  };

  const handleAddRooms = () => {
    setRooms(+rooms + 1);
  };

  const handleCheckInChange = e => {
    setCheckIn(e);
    setCheckOut(addDays(e, 1));
  };

  const handleSubmit = () => {
    if (rooms === 0 || occupants === 0 || destination === '') {
      setError('You are missing an input field.');
    } else {
      let firstDate = format(checkIn, 'MM/dd/yy');
      let secondDate = format(checkOut, 'MM/dd/yy');
      props.setUser({ role: 'guest' });
      props.setSearchInfo({
        destination,
        occupants,
        rooms,
        firstDate,
        secondDate
      });
      props.getHotelList({
        destination,
        occupants,
        rooms,
        firstDate,
        secondDate
      });
      reset();
      props.history.push('/Hotellist');
    }
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.searchContainer}>
        <div className={classes.leftSearchContainer}>
          <TextField
            label='Destination'
            margin='normal'
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
            className={classes.textField}
            {...bindDestination}
          />

          <div className={classes.selectors}>
            <div className={classes.outerButtonDiv}>
              Rooms
              <div className={classes.outercounter}>
                <div
                  onClick={() => handleSubtractRooms()}
                  className={classes.Leftbutton}
                >
                  <Remove />
                </div>
                <div className={classes.innercounter}>
                  <div className={classes.count} {...bindRooms}>
                    {rooms}
                  </div>
                </div>
                <div
                  onClick={() => handleAddRooms()}
                  className={classes.Rightbutton}
                >
                  <Add />
                </div>
              </div>
            </div>

            <div className={classes.outerButtonDiv}>
              Occupants
              <div className={classes.outercounter}>
                <div
                  onClick={() => handleSubtractOccupants()}
                  className={classes.Leftbutton}
                >
                  <Remove />
                </div>
                <div className={classes.innercounter}>
                  <div className={classes.count} {...bindOccupants}>
                    {occupants}
                  </div>
                </div>
                <div
                  onClick={() => handleAddOccupants()}
                  className={classes.Rightbutton}
                >
                  <Add />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.rightSearchContainer}>
          <div className={classes.calendars}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                className={classes.datepicker}
                margin='normal'
                label='Check-In'
                value={checkIn}
                onChange={e => handleCheckInChange(e)}
                variant='outlined'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <DateRange />
                    </InputAdornment>
                  )
                }}
              />
              <DatePicker
                className={classes.datepicker}
                margin='normal'
                label='Check-Out'
                {...bindCheckOut}
                variant='outlined'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <DateRange />
                    </InputAdornment>
                  )
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.searchButtonContainer}>
            <Button
              className={classes.searchButton}
              variant='contained'
              size='large'
              color='primary'
              onClick={() => handleSubmit()}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => state;

export default withRouter(
  connect(
    mapStateToProps,
    { getHotelList, setSearchInfo, setUser }
  )(SearchBar)
);
