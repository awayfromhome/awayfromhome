import React, { useEffect, useState } from 'react';
import SearchInfo from '../Search/SearchInfo';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RoomInfo from '../List/RoomInfo';
import axios from 'axios';
import { connect } from 'react-redux';
import { getRoomList } from '../../ducks/lists/listAsync';

const useStyles = makeStyles(theme => ({
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
}));

const RoomList = props => {
  const classes = useStyles();
  const [takenRooms, setTakenRooms] = useState({});
  const [tab, setTab] = useState(0);

  useEffect(() => {
    console.log(props.match.params);
    props.getRoomList(props.match.params.id);
  }, []);

  useEffect(() => {
    const ids = props.roomList.map((e, i) => {
      return e.room_id;
    });
    axios
      .post('/api/wrong/reservation', { room_id: ids, start_date: props.searchInfo.firstDate, end_date: props.searchInfo.secondDate })
      .then(res => setTakenRooms(res.data));
  }, [props.roomList]);

  const handleRoomSelect = name => {
    if (name === 'standard') {
      setTab(0);
    } else if (name === 'deluxe') {
      setTab(1);
    }
  };

  return (
    <div className={classes.root}>
      <SearchInfo />
      <Paper className={classes.rootTabs}>
        <Tabs value={tab} indicatorColor='primary' textColor='primary' centered variant='fullWidth'>
          <Tab label='Standard' onClick={() => handleRoomSelect('standard')} />
          <Tab label='Deluxe' onClick={() => handleRoomSelect('deluxe')} />
        </Tabs>
      </Paper>

      <div className={classes.card}>
        {props.roomList.map((e, i) => {
          if (tab === 0) {
            if (e.room_type === 'standard') {
              return <RoomInfo key={i} info={e} />;
            }
          } else if (tab === 1) {
            if (e.room_type === 'deluxe') {
              return <RoomInfo key={i} info={e} />;
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchInfo: state.listReducer.setSearchInfo,
    roomList: state.listReducer.roomList
  };
};

export default connect(
  mapStateToProps,
  { getRoomList }
)(RoomList);
