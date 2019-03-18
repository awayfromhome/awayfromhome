import React from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  background: {
    width: "25vw",
    background: theme.palette.primary.main,
    marginLeft: "1vw"
  },
  root: {
    margin: "1vw"
  },
  header: {
    fontSize: "1.3em"
  }
});

const CheckoutInfo = props => {
  const { classes } = props;
  return (
    <Paper className={classes.background}>
      <div className={classes.root}>
        {/* Get based on rate type */}
        <h1 className={classes.header}>Rate Description</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on room */}
        <h1 className={classes.header}>Rate Information per Stay for 1 Room</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Taxes and Additional Charges</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Other Charges</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on room */}
        <h1 className={classes.header}>Nightly Rate</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on room */}
        <h1 className={classes.header}>
          Maximum # of Persons per Room Allowed
        </h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Rate Rules</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Parking</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Pet Policy</h1>
        <p>
          Some set of information. Some set of information. Some set of
          information. Some set of information.
        </p>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(CheckoutInfo);
