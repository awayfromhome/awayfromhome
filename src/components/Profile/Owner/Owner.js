import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import OwnerProfile from './OwnerProfile';
import NewHotel from './NewHotel';
import NewRoom from './NewRoom';
import { getUser } from '../../../ducks/auth/authAsync';
import { getHotelList, getRoomList } from '../../../ducks/lists/listAsync';
import { setOuterTabs, setInnerTabs } from '../../../ducks/lists/listSync';
import OwnerHotelList from './OwnerHotelList';
import OwnerRoomList from './OwnerRoomList';
import UpdateHotel from './UpdateHotel';
import UpdateRoom from './UpdateRoom';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '7%',
    width: '93%'
  },
  tabs: {
    marginTop: '1%'
  },
  [theme.breakpoints.down('749')]: {
    root: {
      marginLeft: 0,
      width: '100%'
    }
  }
}));

const Owner = props => {
  const classes = useStyles();
  const { outerTabs, innerTabs } = props;

  useEffect(() => {
    props.getHotelList({}, true);
    props.getRoomList({}, true);
  }, []);

  const handleOuterChange = (event, newValue) => {
    props.setOuterTabs(newValue);
    props.setInnerTabs(0);
  };

  const handleInnerChange = (event, newValue) => {
    props.setInnerTabs(newValue);
  };

  const displayInnerTabs = () => {
    if (outerTabs === 1) {
      return (
        <Tabs
          value={innerTabs}
          onChange={handleInnerChange}
          indicatorColor='primary'
        >
          <Tab label='Room List' />
          <Tab label='New Room' />
          <Tab label='Update Room' disabled />
        </Tabs>
      );
    }
    if (outerTabs === 2) {
      return (
        <Tabs
          value={innerTabs}
          onChange={handleInnerChange}
          indicatorColor='primary'
        >
          <Tab label='All' />
          <Tab label='By Hotel' />
          <Tab label='By Room' />
        </Tabs>
      );
    } else if (outerTabs === 3) {
      return null;
    } else {
      return (
        <Tabs
          value={innerTabs}
          onChange={handleInnerChange}
          indicatorColor='primary'
        >
          <Tab label='Hotel List' />
          <Tab label='New Hotel' />
          <Tab label='Update Hotel' disabled />
        </Tabs>
      );
    }
  };

  const displayInnerInfo = () => {
    if (outerTabs === 0 && innerTabs === 0) {
      return <OwnerHotelList />;
    } else if (outerTabs === 0 && innerTabs === 1) {
      return <NewHotel />;
    } else if (outerTabs === 0 && innerTabs === 2) {
      return <UpdateHotel />;
    } else if (outerTabs === 1 && innerTabs === 0) {
      return <OwnerRoomList />;
    } else if (outerTabs === 1 && innerTabs === 1) {
      return <NewRoom />;
    } else if (outerTabs === 1 && innerTabs === 2) {
      return <UpdateRoom />;
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <OwnerProfile />
      <Paper className={classes.tabs}>
        <Tabs
          value={outerTabs}
          onChange={handleOuterChange}
          indicatorColor='primary'
        >
          <Tab label='Hotels' />
          <Tab label='Rooms' />
          <Tab label='Reservations' />
        </Tabs>
        <Divider />
        {displayInnerTabs()}
      </Paper>
      {displayInnerInfo()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hotelList: state.listReducer.hotelList,
    user: state.authReducer.user,
    outerTabs: state.listReducer.outerTabs,
    innerTabs: state.listReducer.innerTabs
  };
};

export default connect(
  mapStateToProps,
  { getHotelList, getRoomList, getUser, setInnerTabs, setOuterTabs }
)(Owner);
