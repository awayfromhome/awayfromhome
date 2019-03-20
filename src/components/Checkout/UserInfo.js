import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import CreditInfo from './CreditInfo';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { useInput } from '../../hooks/input-hook';

const styles = theme => ({
   background: {
      background: theme.palette.secondary.main,
      width: '35vw'
   },
   root: {
      margin: '1vw',
      display: 'flex',
      flexDirection: 'column'
   },
   header: {
      fontSize: '1.5em',
      marginBottom: '2vh'
   },
   firstP: {
      marginBottom: '2vh'
   },
   check: {
      width: '5vw'
   }
});

const UserInfo = props => {
   const { value: firstName, reset: resetFirstName, bind: bindFirstName } = useInput('');
   const { value: lastName, reset: resetLastName, bind: bindLastName } = useInput('');
   const { value: number, reset: resetNumber, bind: bindNumber } = useInput('');
   const { value: email, reset: resetEmail, bind: bindEmail } = useInput('');
   const { value: address, reset: resetAddress, bind: bindAddress } = useInput('');
   const { value: city, reset: resetCity, bind: bindCity } = useInput('');
   const { value: postalCode, reset: resetPostalCode, bind: bindPostalCode } = useInput('');
   const { value: country, reset: resetCountry, bind: bindCountry } = useInput('');
   const [check, setCheck] = useState(false);

   const { classes } = props;
   return (
      <Paper className={classes.background}>
         <div className={classes.root}>
            <h1 className={classes.header}>Guest Information</h1>
            <p className={classes.firstP}>
               Already an IHG Rewards Club member? Sign in to earn your points and save time with automatic form completion.
            </p>
            <p>* Indicates a required input field</p>
            <div>
               <TextField label="First Name*" margin="normal" variant="outlined" {...bindFirstName} />
               <TextField label="Last Name*" margin="normal" variant="outlined" {...bindLastName} />
            </div>
            <TextField label="Phone Number*" margin="normal" variant="outlined" {...bindNumber} />
            <TextField label="Email Address*" margin="normal" variant="outlined" {...bindEmail} />
            <TextField label="Address*" margin="normal" variant="outlined" {...bindAddress} />
            <TextField label="City/Town*" margin="normal" variant="outlined" {...bindCity} />
            <TextField label="Postal Code*" margin="normal" variant="outlined" {...bindPostalCode} />
            <TextField label="Country/Region*" margin="normal" variant="outlined" {...bindCountry} />
            <div>
               <h1>Register a new User?</h1>
               <Checkbox checked={check} onChange={() => setCheck(!check)} color="primary" className={classes.check} />
            </div>
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
