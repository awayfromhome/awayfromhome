import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

const UserInfo = () => {
  return (
    <div>
      <TextField />
    </div>
  );
};

export default withStyles(styles)(UserInfo);
