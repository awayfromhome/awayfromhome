import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const OwnerProfile = () => {
  const classes = useStyles;
  return (
    <div className={classes.root}>
      <h1>Avatar</h1>
      <h1>Name</h1>
      <h1>Email</h1>
      <h1>Phone Number</h1>
      <h1>Address</h1>
      <h1>City</h1>
      <h1>PostalCode</h1>
      <h1>Country</h1>
    </div>
  );
};

export default OwnerProfile;
