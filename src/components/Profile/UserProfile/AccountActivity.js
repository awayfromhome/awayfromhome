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
    display: 'flex',
    width: '41vw',
    background: theme.palette.tertiary.main
  },
  hiddenInfoDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '42vw',
    height: '5vh',
    borderTop: '1px solid black'
  },
  innerContentContainer: {
    overflowY: 'scroll',
    height: '63vh',
    color: 'black'
  },
  innerContent: {
    display: 'flex',
    width: '40vw',
    padding: '3%',
    paddingLeft: 0
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
    width: '41vw',
    alignItems: 'center',
    borderBottom: '1px solid black',
    padding: '2%',
    paddingBottom: 0,
    paddingLeft: 0
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
  spanHidden: {
    paddingLeft: '3%',
    width: '12vw'
  },
  spanHidden2: {
    width: '12vw'
  },
  [theme.breakpoints.down('749')]: {
    hiddenInfo: {
      borderBottom: 'none'
    },
    container: {
      width: 'auto'
    },
    Header_AccountInfo: {
      width: 'auto',
      justifyContent: 'space-evenly'
    },
    hiddenInfoDetails: {
      width: '100vw',
      height: '15vw'
    },
    hiddenInfo: {
      width: '100vw'
    },
    date: {
      width: '27%'
    },
    spanHidden: { width: 'auto', paddingLeft: 13 },
    spanHidden2: { width: '26vw' },
    content: { width: '100vw', paddingLeft: 0 },
    innerContent: { width: 'auto', paddingLeft: 25 },
    descriptionactivity: { width: '75vw', justifyContent: 'space-between' },
    description: { width: '33%' },
    text: { width: '29%', fontSize: '17px', paddingLeft: 0, margin: 'auto' },
    description3: { width: '37vw' },
    openimg: { paddingLeft: 1, width: '10vw' },
    closeimg: { width: '10vw', paddingLeft: 1, paddingTop: 20 }
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
                    <span className={classes.spanHidden}>
                      Number of Nights: {e.count}
                    </span>
                    <span className={classes.spanHidden2}>
                      ${e.price * e.count}
                    </span>
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
