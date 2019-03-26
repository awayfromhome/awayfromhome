import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Members from './Members';
import MembersBenefits from './MembersBenefits';
import PersonalInfo from './PersonalInfo';
import AccountActivity from './AccountActivity';

const useStyles = makeStyles(theme => ({
  profileContainer: {
    margin: 'auto',
    width: '93%',
    marginLeft: '7%',
    textAlign: 'center',
    height: '100vh'
  },
  innerProfileContainer: {
    paddingTop: '10vh',
    height: '90%',
    width: '65vw',
    margin: 'auto',
    display: 'flex'
  },
  root: {
    height: '70vh',
    width: '20vw',
    boxShadow:
      '0px 1px 3px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
  },
  root2: {
    height: '70vh',
    width: '42vw',
    marginLeft: '5%'
  },
  redeemPointsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '15%'
  },
  redeemTitle: {
    paddingBottom: 15
  },
  memberBoxesContainer: {
    display: 'flex',
    paddingTop: '10%'
  },
  memberBoxes: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: '9.8vw',
    height: '5vh',
    border: '1px solid black',
    justifyContent: 'space-around',
    background: '#4C525A',
    color: '#fff'
  },
  entirecirclecontainer: {
    width: '100%',
    display: 'flex'
  },
  memeberDivBox1: {
    width: '25vw'
  },
  memeberDivBox2: {
    width: '23vw'
  },
  circle: {
    width: '150px',
    height: '150px',
    border: '5px solid gray',
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '20%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:after': {
      content: '""',
      position: 'fixed',
      width: '19vw',
      right: '60%',
      height: '20px',
      marginTop: 77,
      background: '#fff'
    }
  }
}));

const Profile = props => {
  const [side, setSide] = useState('Account Activity');
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <div className={classes.innerProfileContainer}>
        <Paper className={classes.root}>
          <div className={classes.redeemPointsContainer}>
            Available Points to Redeem
            <span className={classes.redeemTitle}>Points will go here</span>
            <button> Redeem</button>
          </div>
          <div className={classes.memberBoxesContainer}>
            <div className={classes.memeberDivBox1}>
              <div
                className={classes.memberBoxes}
                onClick={() => setSide('Account Activity')}
              >
                Account Activity
              </div>
              <div
                className={classes.memberBoxes}
                onClick={() => setSide('PersonalInfo')}
              >
                Personal Information
              </div>
            </div>
            <div>
              <div
                className={classes.memberBoxes}
                onClick={() => setSide('Member')}
              >
                Member
              </div>
              <div
                className={classes.memberBoxes}
                onClick={() => setSide('MemberBenefits')}
              >
                Member Benefits
              </div>
            </div>
          </div>
          <div className={classes.entirecirclecontainer}>
            <div className={classes.circle}>
              0 <br /> Points
            </div>
            <div className={classes.circle}>
              0 <br />
              Nights
            </div>
          </div>
        </Paper>
        <div>
          <Paper className={classes.root2}>
            {side === 'Account Activity' ? <AccountActivity /> : null}
            {side === 'PersonalInfo' ? <PersonalInfo /> : null}
            {side === 'Member' ? <Members /> : null}
            {side === 'MemberBenefits' ? <MembersBenefits /> : null}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Profile;