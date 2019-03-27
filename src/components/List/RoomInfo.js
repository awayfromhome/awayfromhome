import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  roomInfo: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '2vw'
  },
  roomDescription: {
    width: '70%'
  },
  [theme.breakpoints.down('749')]: {
    roomTitle: {
      margin: 'auto'
    },
    roomDescription: {
      width: '90%',
      margin: 'auto'
    },
    numberOfRooms: {
      margin: 'auto'
    }
  }
}));

const RoomInfo = props => {
  const { info } = props;
  console.log(info);
  const classes = useStyles();
  return (
    <Card price={info.price} img={info.url} onClick={() => props.history.push(`/Checkout`)} btnName='Select Room'>
      <div className={classes.roomInfo}>
        <h1 className={classes.numberOfRooms}>There are {info.number_of_rooms} rooms left</h1>
        <h1 className={classes.roomTitle}>{info.room_name}</h1>
        <p className={classes.roomDescription}>{info.description}</p>
      </div>
    </Card>
  );
};

export default withRouter(RoomInfo);
