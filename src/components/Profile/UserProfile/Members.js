import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  img: {
    width: '150px',
    height: '100px'
  },
  CardContent: {
    width: '25vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  membershipName1: {
    color: '#d46731',
    fontSize: '25px',
    textAlign: 'left'
  },
  membershipdetails: {
    fontSize: '18px',
    textAlign: 'left'
  }
}));

const Members = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.CardContent}>
          <img
            src='https://ihg.scene7.com/is/image/ihg/rc_card_platinum_elite'
            alt='club-memeber-card'
            className={classes.img}
          />
          <div>
            <h1 className={classes.membershipName1}>Club</h1>
            <h4 className={classes.membershipdetails}>
              0-9 Qualified Nights or
            </h4>
            <h4 className={classes.membershipdetails}>0-10,000 points </h4>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent className={classes.CardContent}>
          <img
            src='https://ihg.scene7.com/is/image/ihg/rc_card_gold_elite'
            alt='gold-elite'
            className={classes.img}
          />
          <div>
            <h1 className={classes.membershipName1}>Gold Elite</h1>
            <h4 className={classes.membershipdetails}>
              10 Qualified Nights or
            </h4>
            <h4 className={classes.membershipdetails}>10,000 points </h4>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent className={classes.CardContent}>
          <img
            src='https://ihg.scene7.com/is/image/ihg/rc_card_platinum_elite'
            alt='gold-elite'
            className={classes.img}
          />
          <div>
            <h1 className={classes.membershipName1}>Platinum Elite</h1>
            <h4 className={classes.membershipdetails}>
              40 Qualified Nights or
            </h4>
            <h4 className={classes.membershipdetails}>40,000 points </h4>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Members;
