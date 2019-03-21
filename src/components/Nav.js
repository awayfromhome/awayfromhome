import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Login from './Login';
import { handleAccountForm } from '../ducks/async';

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
         height: '10vh',
         background: theme.palette.tertiary.main,
         width: '100%'
      },
      hiddenMenus: {
         display: 'flex',
         zIndex: 4,
         flexDirection: 'column',
         marginTop: '3%'
      },
      hamburgerMenu: {
         display: 'flex',
         zIndex: 10,
         width: 50,
         height: 50,
         paddingLeft: '10%',
         paddingTop: '4%'
      },
      hiddenMenutags: {
         zIndex: 4,
         padding: '5%',
         paddingLeft: '10%',
         background: '#8A95A5'
      }
   }
});

const Nav = props => {
   const [hiddenMenu, setHiddenMenu] = useState('true');
   console.log(hiddenMenu);

   const { classes } = props;
   return (
      <div className={classes.entireMobileMenu}>
         <div className={classes.entireMobileMenu}>
            <img
               src="https://cdn4.iconfinder.com/data/icons/circles-1/32/364-01-512.png"
               onClick={() => setHiddenMenu(!hiddenMenu)}
               className={classes.hamburgerMenu}
            />
            {hiddenMenu ? null : (
               <div className={classes.hiddenMenus}>
                  <a className={classes.hiddenMenutags}>Sign In</a>
                  <a className={classes.hiddenMenutags}>Sign Up</a>
                  <a className={classes.hiddenMenutags}>Locations</a>
                  <a className={classes.hiddenMenutags}>Offers </a>
               </div>
            )}
         </div>
         <div className={classes.navContainer}>
            <div className={classes.logo}>AFM</div>
            <div className={classes.navwrapper}>
               <a className={classes.tags} onClick={() => props.handleAccountForm('Login')}>
                  Sign In
               </a>
               <a className={classes.tags} onClick={() => props.handleAccountForm('Register')}>
                  Sign Up
               </a>
               <a className={classes.tags}>Locations</a>
               <a className={classes.tags}>Offers</a>
               <a className={classes.tags}>Profile</a>
               <a className={classes.tags}>Owner</a>
            </div>
         </div>
         <Login />
      </div>
   );
};

export default connect(
   null,
   { handleAccountForm }
)(withStyles(styles)(Nav));
