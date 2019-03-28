import React, { useState } from 'react';
import { useInput } from '../../../hooks/input-hook';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import { getHotelList } from '../../../ducks/lists/listAsync';

const useStyles = makeStyles(theme => ({
  background: {
    margin: '1vw'
  },
  root: {
    margin: '1vw',
    display: 'flex',
    flexDirection: 'column'
  },
  uploadButton: {
    width: '40%'
  }
}));

const NewHotel = props => {
  const classes = useStyles();
  const [amenityList, setAmenityList] = useState([{ body: '' }]);
  const { value: name, reset: resetName, bind: bindName } = useInput('');
  const { value: address, reset: resetAddress, bind: bindAddress } = useInput('');
  const { value: reservationNum, reset: resetReservationNum, bind: bindReservationNum } = useInput('');
  const { value: frontDeskNum, reset: resetfrontDeskNum, bind: bindFrontDeskNum } = useInput('');
  const [location, setLocation] = useState('');

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
    resetReservationNum();
    resetfrontDeskNum();
  };

  const upload = async e => {
    try {
      let data = new FormData();
      data.append('pic', e.target.files[0]);
      const dataLocation = axios.post('/api/uploadPic', data);
      setLocation(dataLocation.data.Location);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    let arr = amenityList.map((e, i) => {
      return e.body;
    });
    await axios.post('/api/createhotel', {
      name,
      address,
      frontDeskNum,
      reservationNum,
      amenityList: arr,
      location
    });
    reset();
    props.getHotelList({}, true);
  };

  return (
    <Paper className={classes.background}>
      <div className={classes.root}>
        <Button variant='contained' className={classes.uploadButton}>
          Hotel image upload
          <TextField type='file' onChange={upload} className={classes.inputFile} />
          <CloudUploadIcon className={classes.cloudIcon} />
        </Button>
        <TextField label='Hotel Name' margin='normal' {...bindName} />
        <TextField label='Address' margin='normal' {...bindAddress} />
        {/* <TextField label="Hotel Image" margin="normal" {...bindUrl} /> */}
        <TextField label='Reservation Number' margin='normal' {...bindReservationNum} />
        <TextField label='Front Desk Number' margin='normal' {...bindFrontDeskNum} />
        <h1>List of Amenities</h1>
        {amenityList.map((e, i) => {
          let label = `Amenity #${i + 1}`;
          return <TextField key={i} label={label} id={`${i}`} margin='normal' onChange={e => handleChange(e)} />;
        })}
        <Button onClick={() => handleAddAmenity()}>Add Amenity</Button>
        <Button onClick={() => handleSubmit()}>Create Hotel</Button>
      </div>
    </Paper>
  );
};

export default connect(
  null,
  { getHotelList }
)(NewHotel);
