import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '42vw'
  },
  Header_AccountInfo: {
    background: '#4C525A',
    color: '#fff',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    width: '42vw'
  },
  date: {
    width: '12vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px'
  },
  description: {
    width: '20vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px'
  },
  activity: {
    width: '10vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px'
  }
}));

const AccountActivity = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.Header_AccountInfo}>
        <div className={classes.date}>Date</div>
        <div className={classes.description}>Description</div>
        <div className={classes.activity}>Activity</div>
      </div>
      <div className={classes.InnerAccountInfo} />
    </div>
  );
};

export default AccountActivity;
