import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  container: {
    width: '42vw',
    fontSize: '20px'
  },
  Header_AccountInfo: {
    background: '#4C525A',
    color: '#fff',
    height: '7vh',
    display: 'flex',
    alignItems: 'center',
    width: '42vw'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2vw'
  },
  date: {
    width: '8vw'
  },
  description: {
    width: '13vw'
  },
  activity: {
    width: '8vw',
    paddingLeft: '20px'
  },
  content: {
    display: 'flex',
    width: '42vw',
    alignItems: 'center'
  },
  descriptionactivity: {
    display: 'flex'
  },
  description2: {
    flexDirection: 'column'
  },
  description3: {
    width: '13vw',
    textAlign: 'left'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: '17px 10px 25px 2px',
    borderBottom: '1px solid black'
  },
  img: {
    transform: 'rotateX(180deg)',
    width: '4vw'
  },
  closeimg: {
    width: '4vw',
    paddingBottom: '15px'
  },
  [theme.breakpoints.down('749')]: {
    container: {
      width: 'auto'
    },
    Header_AccountInfo: {
      width: 'auto',
      justifyContent: 'space-evenly'
    },
    content: {
      height: '10vh'
    },
    date: {
      width: '29%'
    }
  }
}));

const AccountActivity = () => {
  const [toggle, setToggle] = useState('true');
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.Header_AccountInfo}>
        <div className={classNames(classes.date, classes.text)}>Date</div>
        <div className={classNames(classes.description, classes.text)}>
          Description
        </div>
        <div className={classNames(classes.activity, classes.text)}>
          Activity
        </div>
      </div>
      <div className={classes.content}>
        <div className={classNames(classes.date, classes.text)}>03/01/2018</div>
        <div className={classes.descriptionactivity}>
          <span
            className={classNames(
              classes.description,
              classes.text,
              classes.description2
            )}
          >
            <div className={classes.description3}>Qualifying Stay </div>
            <div className={classes.description3}>
              Holiday Inn Express & Suites{' '}
            </div>
            <div className={classes.description3}>San Jose-Morgan Hill </div>
          </span>
          <span className={classNames(classes.activity, classes.text)}>
            4,000 Points
          </span>
        </div>
        <span>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png'
            onClick={() => setToggle(!toggle)}
            className={
              toggle ? classNames(classes.img) : classNames(classes.closeimg)
            }
          />
        </span>
      </div>
      <div>{toggle ? null : 'Hello'}</div>
    </div>
  );
};

export default AccountActivity;
