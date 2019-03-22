import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { useInput } from '../../hooks/input-hook';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
   root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px'
   }
});

const Owner = props => {
   const classes = useStyles();
   const { value: name, reset: resetName, bind: bindName } = useInput('');
   const { value: address, reset: resetAddress, bind: bindAddress } = useInput('');
   const { value: url, reset: resetUrl, bind: bindUrl } = useInput('');
   const { value: reservationNum, reset: resetReservationNum, bind: bindReservationNum } = useInput('');
   const { value: frontDeskNum, reset: resetfrontDeskNum, bind: bindFrontDeskNum } = useInput('');
   const { value: amenities, reset: resetAmenities, bind: bindAmenities } = useInput([]);

   return (
      <div>
         <Paper className={classes.root}>
            <Tabs>
               <Tab label="Item One" />
               <Tab label="Item Two" />
               <Tab label="Item Three" />
            </Tabs>
         </Paper>
      </div>
   );
};

export default Owner;
