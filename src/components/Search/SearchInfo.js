import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    background: theme.palette.accent.main
  },
  barInfo: {
    display: "flex",
    justifyContent: "space-between"
  },
  searchInfo: {
    marginLeft: 10
  },
  MobileappBar: {
    display: "none"
  },
  [theme.breakpoints.down("749")]: {
    root: {
      background: "none"
    },
    appBar: {
      display: "none"
    },
    MobileappBar: {
      display: "flex",
      height: "20vh"
    },
    Mobiletoolbar: {
      width: "100vw"
    },
    searchInfo: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 0
    },
    mobileDateDiv: {
      width: "100%"
    }
  }
});

const SearchInfo = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.barInfo} variant="h6" color="inherit">
            <div>Dallas, Tx, United States|</div>
            <div className={classes.searchInfo}>03/18/2019 - 03/19/2019 |</div>
            <div className={classes.searchInfo}># of Guests |</div>
            <div className={classes.searchInfo}>1 room |</div>
            <div className={classes.searchInfo}>SearchInfo</div>
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.MobileappBar}>
        <Toolbar className={classes.Mobiletoolbar}>
          <Typography className={classes.barInfo} variant="h6" color="inherit">
            <div className={classes.searchInfo}>
              <div>Dallas, Tx, United States</div>
              <div className={classes.mobileDateDiv}>
                <div>03/18/2019 - 03/19/2019</div>
                <div># of Guests</div>
                <div>1 room </div>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStatetoProps = state => state;

export default connect(mapStatetoProps)(withStyles(styles)(SearchInfo));
