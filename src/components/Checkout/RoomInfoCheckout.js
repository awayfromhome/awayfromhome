import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckoutInfo from './CheckoutInfo';

const useStyles = makeStyles(theme => ({
  container: {
    // display: 'flex',
    // flexDirection: 'column'
    background: '#f4f2ed',
    width: '61vw',
    height: '18vh',
    margin: 'auto',
    fontFamily: theme.typography.fontFamily[1]
  },
  roomInfoCheckout: {
    padding: '20px 40px 30px 30px',
    width: '30vw',
    fontSize: '18px'
  },
  priceInfoCheckout: {
    borderTop: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '2vh'
  },
  totalPrice: {
    padding: '0px 50px 20px 30px',
    width: '30vw',
    fontSize: '24px'
  },
  currency: {
    fontSize: '17px',
    textDecoration: 'underline',
    fontWeight: 400,
    marginTop: 'auto',
    paddingLeft: '2%'
  },
  totalpriceofstay: {
    fontWeight: 600
  },
  price: {
    fontWeight: 600,
    display: 'flex'
  },
  [theme.breakpoints.down('749')]: {
    container: {
      width: '100%'
    },
    roomInfoCheckout: {
      width: 'auto'
    },
    totalPrice: {
      width: 'auto',
      padding: 0,
      fontSize: '18px'
    },
    priceInfoCheckout: {
      width: '100%',
      paddingLeft: '30px'
    },
    price: {
      width: '40%'
    }
  }
}));

const RoomInfoCheckout = props => {
  const classes = useStyles();
  const { info } = props;
  return (
    <div className={classes.container}>
      {/* // INSERT ROOM INFO  */}
      <div className={classes.roomInfoCheckout}>ONE QUEEN BED NONSMOKING</div>
      <div className={classes.totalPrice}>
        <div className={classes.priceInfoCheckout}>
          {/* INSERT PRICE OF ROOM */}
          <div className={classes.totalpriceofstay}> TOTAL PRICE OF STAY: </div>
          <div className={classes.price}>
            198.85
            <div className={classes.currency}> USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfoCheckout;
