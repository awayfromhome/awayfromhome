import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    flexGrow: 1,
    textAlign: 'center',
    background: theme.palette.tertiary.main,
    width: '63vw'
  },
  barInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  toolbar: {
    width: '60vw'
  },
  city: {
    width: '30vw'
  },
  searchInfo: {
    marginLeft: 10
  },
  divider: {
    marginLeft: '1%'
  },
  deatilsInfo: {
    width: '100%',
    margin: 'auto'
  },
  [theme.breakpoints.down('749')]: {
    appBar: {
      display: 'flex',
      height: '15vh',
      width: '100%'
    },
    toolbar: {
      width: '100vw',
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
      width: '100%'
    },
    deatilsInfo: {
      fontSize: '15px'
    },
    divider: {
      margin: '2%'
    },
    searchInfo: {
      marginLeft: 0
    }
  },
  ['@media (min-width: 750px) and (max-width: 1200px)']: {
    toolbar: { width: '70vw' },
    deatilsInfo: {
      fontSize: '15px',
      width: '50vw'
    },
    city: {
      fontSize: '17px',
      width: '100%'
    },
    appBar: {
      margin: 'auto',
      width: '55vw'
    },
    barInfo: {
      display: 'block'
    }
  }
});

const SearchInfo = props => {
  const { classes } = props;
  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.barInfo} variant='h6' color='inherit'>
          <div className={classes.city}>Dallas, Tx, United States</div>
          <div className={classes.deatilsInfo}>
            <span className={classes.searchInfo}>
              03/18/2019 - 03/19/2019{' '}
              <span className={classes.divider}> |</span>
            </span>
            <span className={classes.searchInfo}>
              # of Guests <span className={classes.divider}> |</span>
            </span>
            <span className={classes.searchInfo}> 1 room </span>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStatetoProps = state => state;

export default connect(mapStatetoProps)(withStyles(styles)(SearchInfo));
