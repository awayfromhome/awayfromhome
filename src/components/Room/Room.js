import React, { useEffect, useState } from 'react';
import SearchInfo from '../Search/SearchInfo';
import { makeStyles } from '@material-ui/styles';
import Card from '../List/Card';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInfo: {
    marginTop: '3%'
  },
  card: {
    marginTop: '2%',
    backgroundColor: '#f4f2ec',
    height: '1000px',
    width: '85%',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center'
  },
  roomContainer: {
    border: '1px solid black',
    marginTop: '4%',
    backgroundColor: '#ffff',
    height: '25%',
    width: '85%',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center'
  },
  imageHolder: {
    border: '1px solid black',
    borderRight: '1px solid lightgrey',
    width: '25%'
  },
  roomInfoholder: {
    margin: 'auto'
  },
  roomButtonHolder: {
    width: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  roomButtonSize: {
    width: '60%'
  }
}));

const Room = props => {
  const { info } = props;
  const classes = useStyles();

  const [roomInfo, setRoomInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/room/${1}`)
      .then(res => {
        setRoomInfo(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.searchInfo}>
        <SearchInfo />
      </div>
      <Card
        onClick={() => props.history.push(`/checkout`)}
        btnName='Select Rate'
        // img={info.url}
      >
        <div className={classes.roomInfoholder}>
          <h1>some info haha this is more info</h1>
          <h1>more crap, i think this is good</h1>
          <h1>more stufff</h1>
          <h1>some info</h1>
          <h1>more crap, do you like this?</h1>
          <h1>more stufff</h1>
          <h1>some info think this looks good?</h1>
        </div>
      </Card>
    </div>
  );
};
export default Room;
