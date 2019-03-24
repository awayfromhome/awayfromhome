import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  roomInfo: {
    height: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '5vw'
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
  const classes = useStyles();
  return (
    <Card price='$97' img={info.url} onClick={() => props.history.push(`/room/${props.info.room_id}`)} btnName='Select Room'>
      {/* <h1>{props.info.room_id}</h1> */}
      <div className={classes.roomInfo}>
        <h1 className={classes.numberOfRooms}>Only 1 Room Left</h1>
        <h1 className={classes.roomTitle}>1 King Bed Leisure Nonsmoking</h1>
        <p className={classes.roomDescription}>
          Understand the true meaning of contentment in this rm. Stay productive at the well lit desk. Relax in the ergonomic chair with free high
          speed internet or let indulgence rain all over you from the a pulsating showerhead.
        </p>
      </div>
    </Card>
  );
};

export default withRouter(RoomInfo);
