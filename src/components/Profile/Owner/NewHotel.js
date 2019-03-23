import React, { useState } from 'react';
import { useInput } from '../../../hooks/input-hook';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { getHotelListById } from '../../../ducks/async';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const NewHotel = props => {
  const classes = useStyles();
  const [amenityList, setAmenityList] = useState([{ body: '' }]);
  const { value: name, reset: resetName, bind: bindName } = useInput('');
  const { value: address, reset: resetAddress, bind: bindAddress } = useInput('');
  const { value: url, reset: resetUrl, bind: bindUrl } = useInput('');
  const { value: reservationNum, reset: resetReservationNum, bind: bindReservationNum } = useInput('');
  const { value: frontDeskNum, reset: resetfrontDeskNum, bind: bindFrontDeskNum } = useInput('');

  const handleChange = e => {
    let amenities = [...amenityList];
    amenities[+e.target.id].body = e.target.value;
    setAmenityList(amenities);
  };

  const handleAddAmenity = () => {
    setAmenityList(prevAmenities => [...prevAmenities, { body: '' }]);
  };

  const reset = () => {
    resetName();
    resetAddress();
    resetUrl();
    resetReservationNum();
    resetfrontDeskNum();
  };

  const handleSubmit = async () => {
    let arr = amenityList.map((e, i) => {
      return e.body;
    });
    await axios.post('/api/createhotel', { name, address, url, frontDeskNum, reservationNum, amenityList: arr });
    reset();
    props.getHotelListById();
  };

  return (
    <div>
      <Paper className={classes.root}>
        <TextField label='Hotel Name' margin='normal' {...bindName} />
        <TextField label='Address' margin='normal' {...bindAddress} />
        <TextField label='Hotel Image' margin='normal' {...bindUrl} />
        <TextField label='Reservation Number' margin='normal' {...bindReservationNum} />
        <TextField label='Front Desk Number' margin='normal' {...bindFrontDeskNum} />
        <h1>List of Amenities</h1>
        {amenityList.map((e, i) => {
          let label = `Amenity #${i + 1}`;
          return <TextField key={i} label={label} id={`${i}`} margin='normal' onChange={e => handleChange(e)} />;
        })}
        <Button onClick={() => handleAddAmenity()}>Add Amenity</Button>
        <Button onClick={() => handleSubmit()}>Create Hotel</Button>
      </Paper>
    </div>
  );
};

export default connect(
  null,
  { getHotelListById }
)(NewHotel);
