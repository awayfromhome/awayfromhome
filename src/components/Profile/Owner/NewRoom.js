import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useInput } from '../../../hooks/input-hook';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
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

  const reset = () => {
    resetCount();
    resetType();
    resetName();
    resetHotel();
    resetDescription();
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel>Associated Hotel</InputLabel>
        <Select
          //   value={state.age}
          //   onChange={handleChange}
          inputProps={{
            name: 'age'
          }}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Room Type</InputLabel>
        <Select
          //   value={state.age}
          //   onChange={handleChange}
          inputProps={{
            name: 'age'
          }}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField label='Name' {...bindName} />
      <TextField label='Description' {...bindDescription} />
      <TextField label='Number of Rooms' {...bindCount} />
    </div>
  );
};

export default NewRoom;
