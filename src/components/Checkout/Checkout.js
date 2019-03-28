import React from 'react';
import CheckoutInfo from './CheckoutInfo';
import UserInfo from './UserInfo';
import SearchInfo from '../Search/SearchInfo';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { makeStyles } from '@material-ui/styles';
import RoomInfoCheckout from './RoomInfoCheckout';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.tertiary.main
  },
  upper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  second: {
    display: 'flex',
    marginTop: '2vh'
  },
  CheckoutInfo: {
    display: 'flex'
  },
  [theme.breakpoints.down('749')]: {
    CheckoutInfo: {
      display: 'none'
    }
  }
}));

const Checkout = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchInfo />
      <div className={classes.upper}>
        <RoomInfoCheckout />
        <div className={classes.second}>
          <StripeProvider apiKey='pk_test_g0IpuPbZCFN2PaAxLnEfDPng'>
            <Elements>
              <UserInfo />
            </Elements>
          </StripeProvider>
          <div className={classes.CheckoutInfo}>
            <CheckoutInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
