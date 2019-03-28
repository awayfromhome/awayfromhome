import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Login from './Login';
import {
  getUser,
  handleAccountForm,
  handleLogout
} from '../ducks/auth/authAsync';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  navContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '7%',
    background: theme.palette.primary.main,
    zIndex: 4
  },
  navicons: {
    display: 'none'
  },
  hiddenMenus: {
    display: 'none'
  },
  logo: {
    textAlign: 'center',
    height: '12vh',
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
    borderBottom: `1px solid ${theme.palette.accent.main}`,
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
      background: theme.palette.primary.main,
      width: '100vw',
      position: 'fixed',
      zIndex: 4
    },
    hiddenMenus: {
      display: 'flex',
      zIndex: 4,
      flexDirection: 'column',
      background: '#8A95A5',
      height: '100vh'
    },
    navicons: {
      display: 'flex',
      width: '6vh'
    },
    arrow: {
      transform: 'rotate(270deg)',
      width: '4vh',
      height: '4vh',
      padding: '15%'
    },
    AFHlogo: {
      width: '18vh',
      height: '13vh'
    },
    hamburgerMenu: {
      paddingLeft: '15%',
      color: 'white'
    },
    hiddenMenutags: {
      zIndex: 4,
      padding: '10%',
      background: '#8A95A5',
      borderBottom: '1px solid black',
      textAlign: 'center'
    },
    imgContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
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
        <img
          src='https://s3.us-east-2.amazonaws.com/awayfromhome/AFHlogo.png'
          alt='logo'
          className={classNames(classes.navicons, classes.AFHlogo)}
          onClick={() => props.history.push('/')}
        />
        {hiddenMenu ? (
          <img
            src='https://img.icons8.com/cotton/2x/menu.png'
            onClick={() => setHiddenMenu(!hiddenMenu)}
            alt='hamburger menu'
            className={classNames(classes.hamburgerMenu, classes.navicons)}
          />
        ) : (
          <img
            src='https://www.freeiconspng.com/uploads/white-arrow-transparent-png-22.png'
            className={classNames(
              classes.hamburgerMenu,
              classes.navicons,
              classes.arrow
            )}
            alt='chevron menu'
            onClick={() => setHiddenMenu(!hiddenMenu)}
          />
        )}
      </div>

      {hiddenMenu ? null : (
        <div
          className={
            hiddenMenu
              ? classNames(classes.hiddenMenus, 'animated fadeOutLeft')
              : classNames(classes.hiddenMenus, 'animated fadeInLeft')
          }
        >
          {props.user.username ? null : (
            <div
              className={classes.hiddenMenutags}
              onClick={() => props.handleAccountForm('Login')}
            >
              Sign In
            </div>
          )}
          {props.user.username ? null : (
            <div
              className={classes.hiddenMenutags}
              onClick={() => props.handleAccountForm('Register')}
            >
              Sign Up
            </div>
          )}
          <div className={classes.hiddenMenutags}>Locations</div>
          <div className={classes.hiddenMenutags}>Offers </div>
          {props.user.username && props.user.role != 'admin' ? (
            <div
              className={classes.hiddenMenutags}
              onClick={() => props.history.push('/Profile')}
            >
              Profile
            </div>
          ) : null}
          {props.user.role === 'admin' ? (
            <div
              className={classes.hiddenMenutags}
              onClick={() => props.history.push('/Owner')}
            >
              Owner
            </div>
          ) : null}
          {props.user.username ? (
            <div
              className={classes.hiddenMenutags}
              onClick={() => props.handleLogout()}
            >
              Logout
            </div>
          ) : null}
        </div>
      )}
      <div className={classes.navContainer}>
        <div className={classes.logo} onClick={() => props.history.push('/')}>
          AFH
        </div>
        <div className={classes.navwrapper}>
          {props.user.username ? null : (
            <div
              className={classes.tags}
              onClick={() => props.handleAccountForm('Login')}
            >
              Sign In
            </div>
          )}
          {props.user.username ? null : (
            <div
              className={classes.tags}
              onClick={() => props.handleAccountForm('Register')}
            >
              Sign Up
            </div>
          )}
          <div className={classes.tags}>Locations</div>
          <div className={classes.tags}>Offers</div>
          {props.user.username && props.user.role != 'admin' ? (
            <div
              className={classes.tags}
              onClick={() => props.history.push('/Profile')}
            >
              Profile
            </div>
          ) : null}
          {props.user.role === 'admin' ? (
            <div
              className={classes.tags}
              onClick={() => props.history.push('/Owner')}
            >
              Owner
            </div>
          ) : null}

          {props.user.username ? (
            <div className={classes.tags} onClick={() => props.handleLogout()}>
              Logout
            </div>
          ) : null}
        </div>
      </div>
      <Login />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { handleAccountForm, getUser, handleLogout }
  )(Nav)
);
