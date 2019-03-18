import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    background: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    width: "30vw"
  },
  name: {}
});

const UserInfo = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.name}>
        <TextField label="First Name" margin="normal" variant="outlined" />
        <TextField label="Last Name" margin="normal" variant="outlined" />
      </div>
      <TextField label="Phone Number" margin="normal" variant="outlined" />
      <TextField label="Email Address" margin="normal" variant="outlined" />
      <TextField label="Address" margin="normal" variant="outlined" />
      <TextField label="City/Town" margin="normal" variant="outlined" />
      <TextField label="Postal Code" margin="normal" variant="outlined" />
      <TextField label="Country/Region" margin="normal" variant="outlined" />
    </div>
  );
};

export default withStyles(styles)(UserInfo);
