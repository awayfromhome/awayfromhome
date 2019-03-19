import React, { useState } from "react";
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
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
          <TextField
            label="First Name*"
            margin="normal"
            variant="outlined"
            name="firstName"
            value={state.firstName}
            onChange={e => handleChange(e)}
          />
          <TextField
            label="Last Name*"
            margin="normal"
            variant="outlined"
            name="lastName"
            value={state.lastName}
            onChange={e => handleChange(e)}
          />
        </div>
        <TextField
          label="Phone Number*"
          margin="normal"
          variant="outlined"
          name="number"
          value={state.number}
          onChange={e => handleChange(e)}
        />
        <TextField
          label="Email Address*"
          margin="normal"
          variant="outlined"
          name="email"
          value={state.email}
          onChange={e => handleChange(e)}
        />
        <TextField
          label="Address*"
          margin="normal"
          variant="outlined"
          name="address"
          value={state.address}
          onChange={e => handleChange(e)}
        />
        <TextField
          label="City/Town*"
          margin="normal"
          variant="outlined"
          name="city"
          value={state.city}
          onChange={e => handleChange(e)}
        />
        <TextField
          label="Postal Code*"
          margin="normal"
          variant="outlined"
          name="postalCode"
          value={state.postalCode}
          onChange={e => handleChange(e)}
        />
        <TextField
          label="Country/Region*"
          margin="normal"
          variant="outlined"
          name="country"
          value={state.country}
          onChange={e => handleChange(e)}
        />
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
