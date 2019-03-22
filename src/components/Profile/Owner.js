import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useInput } from '../../hooks/input-hook';

const styles = theme => ({
   form: {
      display: 'flex',
      flexDirection: 'column',
      width: '50vh',
      marginLeft: '10vw'
   }
});

const Owner = props => {
   const { classes } = props;
   const { value: name, reset: resetName, bind: bindName } = useInput('');
   const { value: address, reset: resetAddress, bind: bindAddress } = useInput('');
   const { value: url, reset: resetUrl, bind: bindUrl } = useInput('');
   const { value: reservationNum, reset: resetReservationNum, bind: bindReservationNum } = useInput('');
   const { value: frontDeskNum, reset: resetfrontDeskNum, bind: bindFrontDeskNum } = useInput('');
   const { value: amenities, reset: resetAmenities, bind: bindAmenities } = useInput([]);

   return (
      <div>
         <Paper className={classes.form}>
            <TextField variant="outlined" />
            <TextField variant="outlined" />
            <TextField variant="outlined" />
            <TextField variant="outlined" />
            <TextField variant="outlined" />
         </Paper>
      </div>
   );
};

export default withStyles(styles)(Owner);
