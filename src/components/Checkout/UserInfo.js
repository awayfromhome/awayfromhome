import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CreditInfo from "./CreditInfo";
import { Elements, StripeProvider } from "react-stripe-elements";

const styles = theme => ({
  background: {
    background: theme.palette.secondary.main,
    width: "35vw"
  },
  root: {
    margin: "1vw",
    display: "flex",
    flexDirection: "column"
  },
  name: {},
  header: {
    fontSize: "1.5em",
    marginBottom: "2vh"
  },
  firstP: {
    marginBottom: "2vh"
  }
});

const UserInfo = props => {
  const { classes } = props;
  return (
    <Paper className={classes.background}>
      <div className={classes.root}>
        <h1 className={classes.header}>Guest Information</h1>
        <p className={classes.firstP}>
          Already an IHG Rewards Club member? Sign in to earn your points and
          save time with automatic form completion.
        </p>
        <p>* Indicates a required input field</p>
        <div className={classes.name}>
          <TextField label="First Name*" margin="normal" variant="outlined" />
          <TextField label="Last Name*" margin="normal" variant="outlined" />
        </div>
        <TextField label="Phone Number*" margin="normal" variant="outlined" />
        <TextField label="Email Address*" margin="normal" variant="outlined" />
        <TextField label="Address*" margin="normal" variant="outlined" />
        <TextField label="City/Town*" margin="normal" variant="outlined" />
        <TextField label="Postal Code*" margin="normal" variant="outlined" />
        <TextField label="Country/Region*" margin="normal" variant="outlined" />
        <StripeProvider apiKey="pk_test_g0IpuPbZCFN2PaAxLnEfDPng">
          <Elements>
            <CreditInfo />
          </Elements>
        </StripeProvider>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(UserInfo);
