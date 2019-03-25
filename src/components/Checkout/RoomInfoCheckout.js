import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import CheckoutInfo from './CheckoutInfo';

const useStyles = makeStyles(theme => ({
  container: {
    // display: 'flex',
    // flexDirection: 'column'
    background: '#f4f2ed',
    width: '61vw',
    height: '18vh',
    fontFamily: theme.typography.fontFamily[1],
    margin: '2%'
  },
  roomInfoCheckout: {
    padding: '20px 40px 30px 30px',
    width: '30vw',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  openArrow: {
    display: 'none'
  },
  closeArrow: {
    display: 'none'
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
    container: {
      height: 'auto'
    },
    totalPrice: {
      width: '50vw'
    },
    roomInfoCheckout: {
      width: '50vw'
    }
  },
  [theme.breakpoints.down('749')]: {
    container: {
      width: '100%',
      height: '100%'
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
      padding: '30px'
    },
    price: {
      width: '40%'
    },
    closeArrow: {
      display: 'block',
      width: '70px',
      transform: 'rotate(270deg)'
    },
    openArrow: {
      transform: 'rotate(90deg)',
      display: 'block',
      width: '70px'
    }
  }
}));

const RoomInfoCheckout = props => {
  const [toggle, setToggle] = useState('true');
  const classes = useStyles();
  // const { info } = props;
  return (
    <div className={classes.container}>
      {/* // INSERT ROOM INFO  */}
      <div className={classes.roomInfoCheckout}>
        <span> ONE QUEEN BED NONSMOKING </span>

        {/* {arrow up or down depending on toggle} */}
        <span>
          {toggle ? (
            <img
              src='https://cdn0.iconfinder.com/data/icons/online-bank-service/100/025_-_arrow_navigation_menu-512.png'
              alt='drop-down'
              className={classes.closeArrow}
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <img
              src='https://cdn0.iconfinder.com/data/icons/online-bank-service/100/025_-_arrow_navigation_menu-512.png'
              alt='drop-down'
              className={classes.openArrow}
              onClick={() => setToggle(!toggle)}
            />
          )}
        </span>
      </div>

      {/* {Drops down the rates and details in mobile view} */}
      <div>{toggle ? null : <CheckoutInfo />}</div>

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
