import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useInput } from '../../../hooks/input-hook';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  background: {
    margin: '1vw'
  },
  root: {
    margin: '1vw',
    display: 'flex',
    flexDirection: 'column'
  }
}));

const NewRoom = props => {
  const classes = useStyles();
  const { value: count, reset: resetCount, bind: bindCount } = useInput(0);
  const { value: type, reset: resetType, bind: bindType } = useInput('');
  const { value: name, reset: resetName, bind: bindName } = useInput('');
  const { value: hotel, reset: resetHotel, bind: bindHotel } = useInput('');
  const { value: description, reset: resetDescription, bind: bindDescription } = useInput('');
  const { value: price, reset: resetPrice, bind: bindPrice } = useInput(0);
  const [location, setLocation] = useState('');

  const reset = () => {
    resetCount();
    resetType();
    resetName();
    resetHotel();
    resetDescription();
    resetPrice();
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
    try {
      await axios.post('/api/room', { count, type, name, hotel, description, price });
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper className={classes.background}>
      <div className={classes.root}>
        <Button id='hello' variant='contained' color='primary' className={classes.uploadButton}>
          Upload
          <TextField type='file' onChange={upload} className={classes.inputFile} />
          <CloudUploadIcon className={classes.cloudIcon} />
        </Button>
        <FormControl className={classes.formControl} margin='dense'>
          <InputLabel>Associated Hotel</InputLabel>
          <Select {...bindHotel}>
            {props.hotelList.map((el, i) => {
              return (
                <MenuItem key={i} value={el.hotel_id}>
                  {el.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} margin='dense'>
          <InputLabel>Room Type</InputLabel>
          <Select {...bindType}>
            <MenuItem value={'Standard'}>Standard</MenuItem>
            <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
            <MenuItem value={'Suite'}>Suite</MenuItem>
          </Select>
        </FormControl>
        <TextField label='Name' margin='normal' {...bindName} />
        <TextField label='Description' margin='normal' {...bindDescription} />
        <TextField label='Number of Rooms' margin='normal' {...bindCount} />
        <TextField label='Price' margin='normal' {...bindPrice} />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    hotelList: state.reducer.hotelList
  };
};

export default connect(mapStateToProps)(NewRoom);
