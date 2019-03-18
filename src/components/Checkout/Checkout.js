import React from "react";
import CreditInfo from "./CreditInfo";
import CheckoutInfo from "./CheckoutInfo";
import UserInfo from "./UserInfo";
import SearchInfo from "../Search/SearchInfo";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import { Elements, StripeProvider } from "react-stripe-elements";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  upper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  info: {
    background: theme.palette.tertiary.main,
    width: "61vw",
    marginTop: "1vh",
    marginBottom: "1vh"
  },
  innerInfo: {
    margin: "1vw"
  },
  second: {
    display: "flex",
    marginBottom: "2vh"
  },
  upperHeader: {
    fontSize: "1.3em"
  },
  upperPrice: {
    fontSize: "1.7em"
  },
  filler: {
    height: "20vh"
  }
});

const Checkout = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SearchInfo />
      <div className={classes.upper}>
        <Paper className={classes.info}>
          <div className={classes.innerInfo}>
            <h1 className={classes.upperHeader}>Two Queen Beds Nonsmoking</h1>
            <h2 className={classes.upperHeader}>Rate Description</h2>
            <h3># of Rooms left</h3>
            <h2 className={classes.upperPrice}>Total Price for stay</h2>
          </div>
        </Paper>
        <div className={classes.second}>
          <UserInfo />
          <CheckoutInfo />
        </div>
      </div>
      <div className={classes.filler}>
        <h1>Hey this makes the page longer</h1>
      </div>
    </div>
  );
};

export default withStyles(styles)(Checkout);
