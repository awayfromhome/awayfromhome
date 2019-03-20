import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
   root: {
      margin: '1vh'
   },
   input: {
      padding: '10px',
      border: '1px solid grey',
      borderRadius: '5px'
   },
   submit: {
      height: '5vh',
      marginTop: '1vh',
      fontSize: '1.5em',
      background: theme.palette.accent.main,
      border: 'none',
      borderRadius: '5px'
   },
   stripe: {
      display: 'flex',
      flexDirection: 'column'
   },
   title: {
      fontSize: '1.5em',
      marginBottom: '1vh'
   }
});

const CreditInfo = props => {
   const { classes } = props;
   const submit = async ev => {
      let { token } = await props.stripe.createToken({ name: 'Name' });
      let response = await fetch('/charge', {
         method: 'POST',
         headers: { 'Content-Type': 'text/plain' },
         body: token.id
      });

      if (response.ok) console.log('Purchase Complete!');
   };
   return (
      <div className={classes.root}>
         <p className={classes.title}>Card Information</p>
         <div className={classes.stripe}>
            <CardElement
               className={classes.input}
               style={{
                  base: {
                     lineHeight: '45px',
                     fontWeight: 300,
                     fontSize: '20px'
                  }
               }}
            />
            <button className={classes.submit} onClick={submit}>
               Create Reservation
            </button>
         </div>
      </div>
   );
};

export default injectStripe(withStyles(styles)(CreditInfo));
