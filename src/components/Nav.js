import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Login from './Login';
import { handleAccountForm, getUser, handleLogout } from '../ducks/async';

const styles = theme => ({
  navContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '7%',
    background: '#4C525A',
    zIndex: 4
  },
  hamburgerMenu: {
    display: 'none'
  },
  hiddenMenus: {
    display: 'none'
  },
  logo: {
    textAlign: 'center',
    height: '12vh',
    borderBottom: '1px solid #96BBBB',
    color: '#fff',
    lineHeight: '12vh',
    background: theme.palette.secondary.main
  },
  navwrapper: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  tags: {
    borderBottom: '1px solid #96BBBB',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Baloo',
    lineHeight: 7.5,
    background: `linear-gradient(to right,
      #26292D,
      #26292D 50%,
      transparent 50%,
      transparent)`,
    backgroundPosition: '100% 0',
    backgroundSize: '200% 100%',
    transition: 'all .3s ease-in',
    '&:hover': {
      color: ' #fff',
      backgroundPosition: '0 0'
    }
  },

  [theme.breakpoints.down('749')]: {
    navContainer: {
      display: 'none'
    },
    entireMobileMenu: {
      height: '13vh',
      background: theme.palette.tertiary.main,
      width: '100%'
    },
    hiddenMenus: {
      display: 'flex',
      zIndex: 4,
      flexDirection: 'column'
    },
    hamburgerMenu: {
      display: 'flex',
      zIndex: 10,
      width: 50,
      height: 50,
      paddingTop: '2.5vh',
      margin: 'auto',
      marginTop: 'auto'
    },
    hiddenMenutags: {
      zIndex: 4,
      padding: '5%',
      paddingLeft: '10%',
      background: '#8A95A5',
      borderBottom: '1px solid black'
    },
    imgContainer: {
      width: '30vw',
      height: '100%'
    }
  },
  ['@media (min-width: 750px) and (max-width: 1200px)']: {
    navContainer: { width: '10%' }
  }
});

const Nav = props => {
  const [hiddenMenu, setHiddenMenu] = useState('true');

  const { classes } = props;

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <div className={classes.entireMobileMenu}>
      <div className={classes.entireMobileMenu}>
        <div className={classes.imgContainer}>
          <img
            src='https://cdn4.iconfinder.com/data/icons/circles-1/32/364-01-512.png'
            onClick={() => setHiddenMenu(!hiddenMenu)}
            className={classes.hamburgerMenu}
          />
        </div>
        {hiddenMenu ? null : (
          <div className={classes.hiddenMenus}>
            <a
              className={classes.hiddenMenutags}
              onClick={() => props.handleAccountForm('Login')}
            >
              Sign In
            </a>
            <a
              className={classes.hiddenMenutags}
              onClick={() => props.handleAccountForm('Register')}
            >
              Sign Up
            </a>
            <a className={classes.hiddenMenutags}>Locations</a>
            <a className={classes.hiddenMenutags}>Offers </a>
            {props.user.username ? (
              <a
                className={classes.hiddenMenutags}
                onClick={() => props.history.push('/Profile')}
              >
                Profile
              </a>
            ) : null}
            {props.user.owner ? (
              <a
                className={classes.hiddenMenutags}
                onClick={() => props.history.push('/Owner')}
              >
                Owner
              </a>
            ) : null}
            {props.user.username ? (
              <a
                className={classes.hiddenMenutags}
                onClick={() => props.handleLogout()}
              >
                Logout
              </a>
            ) : null}
          </div>
        )}
      </div>
      <div className={classes.navContainer}>
        <div className={classes.logo} onClick={() => props.history.push('/')}>
          AFM
        </div>
        <div className={classes.navwrapper}>
          {props.user.username ? null : (
            <a
              className={classes.tags}
              onClick={() => props.handleAccountForm('Login')}
            >
              Sign In
            </a>
          )}
          {props.user.username ? null : (
            <a
              className={classes.tags}
              onClick={() => props.handleAccountForm('Register')}
            >
              Sign Up
            </a>
          )}
          <a className={classes.tags}>Locations</a>
          <a className={classes.tags}>Offers</a>
          {props.user.username ? (
            <a
              className={classes.tags}
              onClick={() => props.history.push('/Profile')}
            >
              Profile
            </a>
          ) : null}
          {props.user.owner ? (
            <a
              className={classes.tags}
              onClick={() => props.history.push('/Owner')}
            >
              Owner
            </a>
          ) : null}
          {props.user.username ? (
            <a className={classes.tags} onClick={() => props.handleLogout()}>
              Logout
            </a>
          ) : null}
        </div>
      </div>
      <Login />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { handleAccountForm, getUser, handleLogout }
  )(withStyles(styles)(Nav))
);
