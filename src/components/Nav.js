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
    height: "10vh",
    textAlign: "center",
    background: theme.palette.accent.main,
    height: "15vh",
    borderBottom: "1px solid #96BBBB",
    paddingTop: "7.5vh",
    color: "#fff"
  },
  lists: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "50vh"
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
    height: "6vh",
    textTransform: "uppercase",
    fontSize: 13,
    color: "#fff",
    fontFamily: "Baloo"
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <div className={classes.navContainer}>
      <div className={classes.logo}>Away From Home</div>
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
