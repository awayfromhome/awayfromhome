import React, { useState, useEffect } from 'react';
import { makeStyles, getThemeProps } from '@material-ui/styles';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import { updateStay, updatePoints } from '../../../ducks/lists/listSync';

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
  hiddenInfo: {
    display: 'flex'
  },
  hiddenInfoDetails: {
    height: '5vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '110vw',
    borderBottom: '1px solid black',
    background: '#F2E3BC'
  },
  innerContentContainer: {
    overflowY: 'scroll',
    height: '63vh',
    color: 'black'
  },
  innerContent: {
    display: 'flex',
    borderBottom: '1px solid black',
    paddingBottom: '5%',
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
    flexDirection: 'column',
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
    textAlign: 'left',
    padding: '5px'
  },
  content: {
    alignItems: 'center',
    padding: '17px 10px 25px 2px'
  },
  openimg: {
    transform: 'rotateX(180deg)',
    width: '3vw',
    paddingBottom: '15px',
    paddingLeft: '80px'
  },
  closeimg: {
    width: '3vw',
    paddingBottom: '15px',
    paddingLeft: '80px',
    paddingTop: '20px'
  },
  [theme.breakpoints.down('749')]: {
    container: {
      width: 'auto'
    },
    Header_AccountInfo: {
      width: 'auto',
      justifyContent: 'space-evenly'
    },

    date: {
      width: '27%'
    },
    content: { width: '100vw' },
    innerContent: { width: 'auto' },
    descriptionactivity: { width: '75vw', justifyContent: 'space-between' },
    description: { width: '33%' },
    text: { width: '33%', fontSize: '17px' },
    description3: { width: '37vw', paddingLeft: '110px' },
    openimg: { paddingLeft: 0, width: '10vw' },
    closeimg: { width: '10vw', paddingLeft: 0, paddingTop: 20 }
  }
}));

const AccountActivity = props => {
  const [toggle, setToggle] = useState('true');
  const [activity, setActivity] = useState([]);
  const [info, setInfo] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    // add {props.id}
    axios.get(`/api/accountActivity/${props.id}`).then(response => {
      console.log(response.data);
      setActivity(response.data);
    });
  }, []);

  let count = 0;
  let points = 0;
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
      <div className={classes.innerContentContainer}>
        {activity.length >= 1 ? null : 'NO ROOMS BOOKED'}
        {activity.map((e, i) => {
          console.log(e);
          count += +e.count;
          points += e.points;
          props.updateStay(count);

          props.updatePoints(points);
          return (
            <div className={classes.content} key={i}>
              <div className={classes.innerContent}>
                <div className={classNames(classes.date, classes.text)}>
                  {e.date}
                </div>
                <div className={classes.descriptionactivity}>
                  <span
                    className={classNames(
                      classes.description,
                      classes.text,
                      classes.description2
                    )}
                  >
                    <div className={classes.description3}>Qualifying Stay </div>
                    <div className={classes.description3}>{e.hotel_name}</div>
                    <div className={classes.description3}>Dallas, TX</div>
                  </span>
                  <span className={classNames(classes.activity, classes.text)}>
                    {e.points} points
                    <span onClick={() => setInfo(i)}>
                      <img
                        src='https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png'
                        onClick={() => setToggle(!toggle)}
                        className={
                          !toggle && i === info
                            ? classNames(classes.closeimg)
                            : classNames(classes.openimg)
                        }
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.hiddenInfo}>
                {info === i && !toggle ? (
                  <div className={classes.hiddenInfoDetails}>
                    <span> Number of Nights: {e.count} </span>
                    <span>${e.price}</span>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.listReducer.count,
    id: state.authReducer.user.id
  };
};
export default connect(
  mapStateToProps,
  { updateStay, updatePoints }
)(AccountActivity);
