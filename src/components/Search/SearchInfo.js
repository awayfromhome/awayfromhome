import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
    textAlign: 'center',
    background: theme.palette.secondary.main,
    width: '61vw',
    marginTop: '7%'
  },
  barInfo: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  city: {
    width: '20vw'
  },
  searchInfo: {
    marginLeft: 10
  },
  divider: {
    marginLeft: '1%'
  },
  detailsInfo: {
    width: '35vw',
    margin: 'auto'
  },
  [theme.breakpoints.down('749')]: {
    appBar: {
      display: 'flex',
      height: '15vh',
      width: '100%',
      marginTop: '28%',
      zIndex: 1
    },
    toolbar: {
      width: '93vw',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 0,
      margin: 'auto'
    },
    city: {
      width: 'auto'
    },
    barInfo: {
      display: 'block',
      width: '100%',
      fontSize: '23px'
    },
    detailsInfo: {
      width: '100%',
      fontSize: '15px'
    },
    divider: {
      margin: '2%'
    },
    searchInfo: {
      marginLeft: 0
    }
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
    toolbar: {
      width: 'auto'
    },
    detailsInfo: {
      fontSize: '15px',
      width: '50vw'
    },
    city: {
      fontSize: '17px',
      width: '100%'
    },
    appBar: {
      margin: 'auto',
      width: '61vw'
    },
    barInfo: {
      display: 'block',
      margin: 'auto'
    }
  }
}));

const SearchInfo = props => {
  console.log('search info', props.setSearchInfo);
  const {
    destination,
    occupants,
    rooms,
    firstDate,
    secondDate
  } = props.setSearchInfo;
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.barInfo} variant='h6' color='inherit'>
          <div className={classes.city}>{destination}, TX, United States</div>
          <div className={classes.detailsInfo}>
            <span className={classes.searchInfo}>
              {firstDate} - {secondDate}
              <span className={classes.divider}> |</span>
            </span>
            <span className={classes.searchInfo}>
              Guests: {occupants}
              <span className={classes.divider}> |</span>
            </span>
            <span className={classes.searchInfo}>Rooms: {rooms}</span>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
const mapStatetoProps = state => {
  return {
    setSearchInfo: state.listReducer.setSearchInfo
  };
};

export default connect(mapStatetoProps)(SearchInfo);
