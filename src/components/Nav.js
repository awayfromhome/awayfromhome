import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Login from './Login';
import { handleAccountForm, getUser, handleLogout } from '../ducks/async';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
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
      height: '12vh',
      background: theme.palette.tertiary.main,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    imgContainer: {
      height: '12vh',
      display: 'flex',
      alignItems: 'center',
      width: '21%'
    },
    hiddenMenus: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    hamburgerMenu: {
      display: 'flex',
      width: '100%',
      height: '12vh'
    },
    hiddenMenutags: {
      height: '12vh',
      lineHeight: '12vh',
      width: '22%',
      textAlign: 'center'
    }
  },
  ['@media (min-width: 750px) and (max-width: 1200px)']: {
    navContainer: { width: '10%' }
  }
}));

const Nav = props => {
  const [hiddenMenu, setHiddenMenu] = useState('true');
  const classes = useStyles();

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <div className={classes.entireMobileMenu}>
      <div className={classNames(classes.imgContainer)}>
        {hiddenMenu ? (
          <img
            src='https://cdn4.iconfinder.com/data/icons/basic-user-interface-2/512/User_Interface-03-512.png'
            onClick={() => setHiddenMenu(!hiddenMenu)}
            className={hiddenMenu ? classes.hamburgerMenu : classNames(classes.hamburgerMenu, 'animated fadeInUp slow delay-5s')}
          />
        ) : (
          <img
            src='https://cdn0.iconfinder.com/data/icons/online-bank-service/100/025_-_arrow_navigation_menu-512.png'
            className={classNames(classes.hamburgerMenu, 'animated fadeInDown slow')}
            onClick={() => setHiddenMenu(!hiddenMenu)}
          />
        )}
      </div>
      {hiddenMenu ? null : (
        <div className={classNames(classes.hiddenMenus, 'animated fadeInDown slow')}>
          {props.user.username || props.user.owner ? null : (
            <a className={classes.hiddenMenutags} onClick={() => props.handleAccountForm('Login')}>
              Sign In
            </a>
          )}
          {props.user.username || props.user.owner ? null : (
            <a className={classes.hiddenMenutags} onClick={() => props.handleAccountForm('Register')}>
              Sign Up
            </a>
          )}
          <a className={classes.hiddenMenutags}>Locations</a>
          <a className={classes.hiddenMenutags}>Offers </a>
          {props.user.username ? (
            <a className={classes.hiddenMenutags} onClick={() => props.history.push('/Profile')}>
              Profile
            </a>
          ) : null}
          {props.user.owner ? (
            <a className={classes.hiddenMenutags} onClick={() => props.history.push('/Owner')}>
              Owner
            </a>
          ) : null}
          {props.user.username ? (
            <a className={classes.hiddenMenutags} onClick={() => props.handleLogout()}>
              Logout
            </a>
          ) : null}
        </div>
      )}

      <div className={classes.navContainer}>
        <div className={classes.logo} onClick={() => props.history.push('/')}>
          AFM
        </div>
        <div className={classes.navwrapper}>
          {props.user.username ? null : (
            <a className={classes.tags} onClick={() => props.handleAccountForm('Login')}>
              Sign In
            </a>
          )}
          {props.user.username ? null : (
            <a className={classes.tags} onClick={() => props.handleAccountForm('Register')}>
              Sign Up
            </a>
          )}
          <a className={classes.tags}>Locations</a>
          <a className={classes.tags}>Offers</a>
          {props.user.username ? (
            <a className={classes.tags} onClick={() => props.history.push('/Profile')}>
              Profile
            </a>
          ) : null}
          {props.user.owner ? (
            <a className={classes.tags} onClick={() => props.history.push('/Owner')}>
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
  )(Nav)
);
