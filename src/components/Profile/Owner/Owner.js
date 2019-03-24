import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import OwnerProfile from './OwnerProfile';
import NewHotel from './NewHotel';
import NewRoom from './NewRoom';
import HotelInfo from '../../List/HotelInfo';
import { getHotelListById } from '../../../ducks/async';

const useStyles = makeStyles({
  root: {
    marginLeft: '7%',
    width: '93%'
  },
  tabs: {
    marginTop: '10%'
  }
});

const Owner = props => {
  const classes = useStyles();

  const [outerTabs, setOuterTabs] = useState(0);
  const [innerTabs, setInnerTabs] = useState(0);

  useEffect(() => {
    props.getHotelListById();
  }, []);

  const handleOuterChange = (event, newValue) => {
    setOuterTabs(newValue);
  };

  const handleInnerChange = (event, newValue) => {
    setInnerTabs(newValue);
  };

  const displayInnerTabs = () => {
    if (outerTabs === 1) {
      return (
        <Tabs value={innerTabs} onChange={handleInnerChange} indicatorColor='primary'>
          <Tab label='Room List' />
          <Tab label='New Room' />
          <Tab label='Update Room' />
        </Tabs>
      );
    }
    if (outerTabs === 2) {
      return (
        <Tabs value={innerTabs} onChange={handleInnerChange} indicatorColor='primary'>
          <Tab label='All' />
          <Tab label='By Hotel' />
          <Tab label='By Room' />
        </Tabs>
      );
    } else if (outerTabs === 3) {
      return null;
    } else {
      return (
        <Tabs value={innerTabs} onChange={handleInnerChange} indicatorColor='primary'>
          <Tab label='Hotel List' />
          <Tab label='New Hotel' />
          <Tab label='Update Hotel' />
        </Tabs>
      );
    }
  };

  const displayInnerInfo = () => {
    if (outerTabs === 0 && innerTabs === 1) {
      return <NewHotel />;
    } else if (outerTabs === 0 && innerTabs === 0) {
      const arr = props.hotelList.map((e, i) => {
        //Update with a better looking UI on monday
        return <HotelInfo key={i} info={e} />;
      });
      return arr;
    } else if (outerTabs === 1 && innerTabs === 1) {
      return <NewRoom />;
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <OwnerProfile />
      <Paper className={classes.tabs}>
        <Tabs value={outerTabs} onChange={handleOuterChange} indicatorColor='primary'>
          <Tab label='Hotels' />
          <Tab label='Rooms' />
          <Tab label='Reservations' />
          <Tab label='Reports' />
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
    hotelList: state.hotelList
  };
};

export default connect(
  mapStateToProps,
  { getHotelListById }
)(Owner);
