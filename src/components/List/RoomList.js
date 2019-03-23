import React, { useEffect, useState } from 'react';
import SearchInfo from '../Search/SearchInfo';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RoomInfo from '../List/RoomInfo';
import axios from 'axios';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rootTabs: {
    flexGrow: 1,
    marginTop: '3%',
    width: '40vw'
  },
  searchInfo: {
    marginTop: '4%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3%',
    backgroundColor: '#f4f2ec',
    height: '70vh',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '8px'
  },
  [theme.breakpoints.down('749')]: {
    rootTabs: {
      width: '100%'
    }
  }
});

const RoomList = props => {
  const { classes, info } = props;
  // console.log('info room list', info);
  const [roomList, setRoomList] = useState([]);
  const [standard, setStandard] = useState(true);
  const [deluxe, setDeluxe] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/roomlist/${1}`)
      .then(res => {
        setRoomList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleRoomSelect = name => {
    if (name === 'Standard') {
      setStandard(true);
      setDeluxe(false);
    } else if (name === 'Deluxe') {
      setDeluxe(true);
      setStandard(false);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchInfo}>
        <SearchInfo />
      </div>

      <Paper className={classes.rootTabs}>
        <Tabs
          value={false}
          indicatorColor='primary'
          textColor='primary'
          centered
          variant='fullWidth'
        >
          <Tab label='Standard' onClick={() => handleRoomSelect('Standard')} />
          <Tab label='Deluxe' onClick={() => handleRoomSelect('Deluxe')} />
        </Tabs>
      </Paper>

      <div className={classes.card}>
        {roomList.map((e, i) => {
          console.log('roomlist', e);
          if (standard) {
            if (e.name === 'Standard') {
              return <RoomInfo key={i} info={e} />;
            }
          } else {
            if (e.name === 'Deluxe') {
              return <RoomInfo key={i} info={e} />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(RoomList);
