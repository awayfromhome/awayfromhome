import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  navContainer: {
    // height: "10vh",
    // width: "90vw",
    // margin: "auto",
    // background: "#96BBBB",
    // marginBottom: 5,
    // display: "flex",
    // justifyContent: "space-between",
    // borderRadius: 8,
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "4vw",
    background: theme.palette.primary.main
  },
  logo: {
    height: "10vh",
    width: "3vw",
    textAlign: "center",
    background: theme.palette.accent.main,
    padding: 9,
    paddingTop: 50
  },
  logoText: {
    textAlign: "center",
    paddingTop: "4vh"
  },
  lists: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "50vh",
    width: "6vw"
  },
  navwrapper: {
    overflowX: "hidden",
    cursor: "pointer"
  },
  tags: {
    borderBottom: "1px solid #96BBBB",
    textAlign: "center",
    position: "relative",
    textDecoration: "none",
    verticalAlign: "middle",
    height: "6vh"
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <div className={classes.navContainer}>
      <div className={classes.logo}>
        <h1 className={classes.logoText}>Away From Home</h1>
      </div>
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
