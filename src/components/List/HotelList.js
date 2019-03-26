import React from 'react';
import SearchInfo from '../Search/SearchInfo';
import HotelInfo from '../List/HotelInfo';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInfo: {
    marginTop: '5%'
  },
  card: {
    marginTop: '1%',
    paddingTop: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.second,
    height: '100%',
    width: '100%',
    borderRadius: 8
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
    card: { marginLeft: '10%' }
  }
}));

const HotelList = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchInfo />
      <div className={classes.card}>
        {props.hotelList.map((e, i) => {
          return <HotelInfo key={i} info={e} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hotelList: state.listReducer.hotelList
  };
};

export default connect(mapStateToProps)(HotelList);
