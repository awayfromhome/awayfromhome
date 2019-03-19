import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  navContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "5vw",
    background: "#4C525A"
  },
  logo: {
    textAlign: "center",
    height: "12vh",
    borderBottom: "1px solid #96BBBB",
    color: "#fff",
    lineHeight: "12vh",
    background: theme.palette.secondary.main
  },
  navwrapper: {
    overflowY: "hidden",
    cursor: "pointer",
    height: "55vh"
  },
  lists: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "55vh"
  },
  tags: {
    borderBottom: "1px solid #96BBBB",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 13,
    color: "#fff",
    fontFamily: "Baloo",
    height: "15vh",
    margin: "0 auto",
    width: "5vw",
    lineHeight: 9.5,
    background: `linear-gradient(to right,
      #CCFF33,
      #CCFF33 50%,
      transparent 50%,
      transparent)`,
    backgroundPosition: "100% 0",
    backgroundSize: "200% 100%",
    transition: "all .3s ease-in",
    "&:hover": {
      color: " #006600",
      borderBottom: "1px #006600 dotted",
      backgroundPosition: "0 0"
    }
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <div className={classes.navContainer}>
      <div className={classes.logo}>AFM</div>
      <div className={classes.navwrapper}>
        <nav className={classes.lists}>
          <a className={classes.tags}>Sign In</a>
          <a className={classes.tags}>Sign Up</a>
          <a className={classes.tags}>Locations</a>
          <a className={classes.tags}>Offers </a>
        </nav>
      </div>
    </div>
  );
};

export default withStyles(styles)(Nav);

// position: "absolute"
// "&:after": {
//   position: "absolute",
//   content: "''",
//   top: 0,
//   bottom: 0,
//   left: 0,
//   height: "100%",
//   transformOrigin: "left",
//   transition: "5s",
//   zIndex: -1,
//   background: "red"
// },
// "&:hover:after": {
//   width: "100%"
// }
