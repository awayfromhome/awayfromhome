import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  background: {
    width: '25vw',
    marginLeft: '1vw'
  },
  root: {
    margin: '1vw'
  },
  header: {
    fontSize: '1.3em',
    marginBottom: '5%',
    fontWeight: 650,
    fontFamily: theme.typography.fontFamily[1]
  },
  paragraph: {
    marginBottom: '5%',
    fontFamily: theme.typography.fontFamily[2]
  },
  priceDetails: {
    marginBottom: '5%',
    fontFamily: theme.typography.fontFamily[2],
    background: theme.palette.secondary.main
  },
  priceDetailsText: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5%'
  },
  [theme.breakpoints.down('749')]: {
    background: {
      width: 'auto',
      height: '100%',
      marginBottom: '5%'
    },
    header: {
      padding: '2%'
    },
    paragraph: {
      marginBottom: '7%',
      padding: '2%'
    }
  }
}));

const CheckoutInfo = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.background}>
      <div className={classes.root}>
        {/* Get based on rate type */}
        <h1 className={classes.header}>Rate Description</h1>
        <p className={classes.paragraph}>
          Start and end your business day with something inspiring. Package
          includes locally-inspired breakfast to kick start your day, signature
          drink at our bar and bistro to help you unwind at night. Plus we add
          1,000 IHG® Rewards Club bonus points to your stay. At Hotel Indigo,
          you'll find everything you need for your next trip - complimentary
          high-speed internet access, plush bedding, spa-inspired showers,
          24-hour business centers and fitness centers and boardroom-style
          meeting spaces. Our bar and bistro serves delicious locally sourced
          and seasonal menu selections, from local coffee and craft beer to
          fresh made bread and artisan cheeses
        </p>
        {/* Get based on room */}
        <h1 className={classes.header}>Rate Information per Stay for 1 Room</h1>
        <div className={classes.priceDetails}>
          <div className={classes.priceDetailsText}>
            March 23,2019 - March 25, 2019
            <div>
              164.00
              <span> USD</span>
            </div>
          </div>
          <div className={classes.priceDetailsText}>
            Price for One Room
            <div>
              164.00
              <span> USD</span>
            </div>
          </div>
          <div className={classes.priceDetailsText}>
            Taxes
            <div>
              25.00
              <span> USD</span>
            </div>
          </div>
          <div className={classes.priceDetailsText}>
            Total
            <div>
              189.00
              <span> USD</span>
            </div>
          </div>
        </div>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Taxes and Additional Charges</h1>
        <p className={classes.paragraph}>
          15% per night not included in rate effective 23 March, 2019 thru 24
          March, 2019 TAX IS CHARGED PER NIGHT. 2 Percent Dallas Tourism Public
          Improvement District Reimbursement Fee
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Other Charges</h1>
        <p className={classes.paragraph}>
          The following fees will be added to your bill only if they apply to
          your stay
        </p>
        {/* Get based on room */}
        <h1 className={classes.header}>Nightly Rate</h1>
        <p className={classes.paragraph}>164.00 USD per room, per night.</p>
        {/* Get based on room */}
        <h1 className={classes.header}>
          Maximum # of Persons per Room Allowed
        </h1>
        <p className={classes.paragraph}>2 persons max</p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Rate Rules</h1>
        <p className={classes.paragraph}>
          Check-in-time: 3:00 PM Check-out-time: 12:00 PM
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Parking</h1>
        <p className={classes.paragraph}>
          Valet parking is provided on southbound Harwood St., between Elm and
          Main St. The overnight rate is $29.00 per overnight stay, with
          unlimited in and out privileges. Visitor day parking is $14.00, with
          no in and out privileges.
        </p>
        {/* Get based on Hotel */}
        <h1 className={classes.header}>Pet Policy</h1>
        <p className={classes.paragraph}>
          A one time, nonrefundable fee of 75 dollars will be charged upon
          checkin. Pet Limit of two and or 75 lbs Maximum.
        </p>
      </div>
    </Paper>
  );
};

export default CheckoutInfo;
