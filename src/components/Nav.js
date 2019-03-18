import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  navContainer: {
    height: "5vh"
  }
});

const Nav = props => {
  const { classes } = props;
  return (
    <div className={classes.navContainer}>
      <h1>Away From Home</h1>
    </div>
  );
};

export default withStyles(styles)(Nav);
