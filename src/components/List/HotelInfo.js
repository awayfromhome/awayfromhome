import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  hotelInfo: {
    width: '50%',
    margin: 'auto',
    paddingLeft: '5%',
    height: '100%'
  },
  hotelname: {
    marginBottom: 'auto',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5%',
    margin: '1%'
  },
  hotelavatar: {
    borderRadius: '50%',
    border: '1px solid black',
    width: 30,
    height: 30
  },
  amenities: {
    paddingRight: '1%',
    width: '70%',
    margin: 'auto',
    textAlign: 'left'
  },
  bodytext: {
    display: 'flex',
    marginBottom: 'auto'
  },
  infoname: {
    paddingLeft: '2%',
    width: '80%',
    fontSize: 30,
    fontFamily: theme.typography.fontFamily[1]
  },
  amenitiesList: {
    width: '50%',
    margin: 'auto',
    height: '100%'
  },
  eachAmenities: {
    listStyleType: 'square'
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
    hotelInfo: {
      width: '50%',
      paddingLeft: 0,
      marginLeft: '5%'
    },
    amenitiesList: {
      width: '30%'
    },
    amenities: {
      paddingRight: 0,
      height: '100%',
      width: '100%',
      fontSize: 12,
      lineHeight: '25px',
      marginLeft: '10%',
      marginTop: '30%'
    }
  },
  [theme.breakpoints.down('749')]: {
    amenitiesList: {
      height: 'auto',
      marginLeft: '3vw'
    },
    hotelname: {
      margin: '5%'
    }
  }
}));

const HotelInfo = props => {
  const { info } = props;
  const classes = useStyles();

  const amenities = obj => {
    let arr = [];
    for (let key in obj) {
      arr.push(<li className={classes.eachAmenities}>{obj[key]}</li>);
    }
    return arr;
  };

  return (
    <Card
      price='100'
      img={info.url}
      btnName='Select Hotel'
      onClick={() => props.history.push(`/roomlist/${info.hotel_id}`)}
    >
      <div className={classes.hotelname}>
        <div className={classes.hotelavatar} />
        <h1 className={classes.infoname}>{info.name}</h1>
      </div>
      <div className={classes.bodytext}>
        <div className={classes.hotelInfo}>
          <h4>{info.address}</h4>
          <h4>Reservations: {info.reservation_num}</h4>
          <h4>Front Desk: {info.front_desk_num}</h4>
          <h4>Distance</h4>
        </div>
        <div className={classes.amenitiesList}>
          <ul className={classes.amenities}>
            {amenities(JSON.parse(info.amenities)[0])}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default withRouter(HotelInfo);
