import React, { Fragment, useState } from 'react';
import { useInput } from '../hooks/input-hook';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAccountForm, getUser } from '../ducks/auth/authAsync';
import { updateAccountFormSide } from '../ducks/auth/authSync';
import NumberFormat from 'react-number-format';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Login = props => {
  const { value: username, reset: resetUsername, bind: bindUsername } = useInput('');
  const { value: password, reset: resetPassword, bind: bindPassword } = useInput('');
  const { value: email, reset: resetEmail, bind: bindEmail } = useInput('');
  const { value: number, reset: resetNumber, bind: bindNumber } = useInput('');
  const [error, setError] = useState('');

  //Login
  const handleLogin = async () => {
    if (username === '' || password === '') {
      setError('You are missing a required input field.');
    } else {
      try {
        await axios.post('/auth/login', { username, password });
        props.getUser();
        props.handleAccountForm();
        reset();
      } catch (err) {
        setError(err.response.data);
      }
    }
  };

  //Register
  const handleRegister = async type => {
    if (username === '' || password === '' || email === '' || number === '') {
      setError('You are missing a required input field.');
    } else {
      let regexp = /[0-9+]+/g;
      let num = number.match(regexp).join('');
      if (type === 'Owner') {
        try {
          await axios.post('/auth/register', { username, password, email, number: num, role: 'admin' });
          props.getUser();
          props.handleAccountForm();
          reset();
        } catch (err) {
          setError(err.response.data);
        }
      } else {
        try {
          await axios.post('/auth/register', { username, password, email, number: num, role: 'user' });
          props.getUser();
          props.handleAccountForm();
          reset();
        } catch (err) {
          setError(err.response.data);
        }
      }
    }
  };

  const reset = () => {
    resetUsername();
    resetEmail();
    resetNumber();
    resetPassword();
    setError('');
  };

  //This toggle's between the two sides of the form
  const handleFormInfo = () => {
    if (props.accountFormSide === 'Login') {
      return (
        <Fragment>
          {/* Login Side */}
          <DialogContent>
            <DialogContentText>
              Please enter your account information to login to your account. If you by chance have accidentally selected the login and wish to
              register simply select the register button at the bottom of the form.
            </DialogContentText>
            <TextField required margin='dense' label='username' type='text' fullWidth {...bindUsername} />
            <TextField required margin='dense' label='password' type='password' fullWidth {...bindPassword} />
            <DialogContentText>{error}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleLogin()} color='primary'>
              Login
            </Button>
            <Button
              onClick={() => {
                props.updateAccountFormSide('Register');
                reset();
              }}
              color='primary'>
              Register
            </Button>
          </DialogActions>
        </Fragment>
      );
    } else if (props.accountFormSide === 'Owner') {
      return (
        <Fragment>
          {/* Owner Side */}
          <DialogContent>
            <DialogContentText>
              If this is your first time here please fill out the information to create your account! If you already have an account please click down
              below to change to the login page.
            </DialogContentText>
            <TextField required margin='dense' label='Username' type='text' fullWidth {...bindUsername} />
            <TextField required margin='dense' label='Password' type='password' fullWidth {...bindPassword} />
            <NumberFormat
              required
              customInput={TextField}
              format='+1 (###) ###-####'
              margin='dense'
              label='Phone Number'
              type='text'
              fullWidth
              {...bindNumber}
            />
            <TextField margin='dense' label='Email' type='text' fullWidth {...bindEmail} />
            <DialogContentText>{error}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                props.updateAccountFormSide('Login');
                reset();
              }}
              color='primary'>
              Login
            </Button>
            <Button onClick={() => handleRegister('Owner')} color='primary'>
              Register
            </Button>
            <Button
              onClick={() => {
                props.updateAccountFormSide('Register');
                reset();
              }}
              color='primary'>
              Register User
            </Button>
          </DialogActions>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {/* Register Side */}
          <DialogContent>
            <DialogContentText>
              If this is your first time here please fill out the information to create your account! If you already have an account please click down
              below to change to the login page.
            </DialogContentText>
            <TextField required margin='dense' label='Username' type='text' fullWidth {...bindUsername} />
            <TextField required margin='dense' label='Password' type='password' fullWidth {...bindPassword} />
            <NumberFormat
              required
              customInput={TextField}
              format='+1 (###) ###-####'
              margin='dense'
              label='Phone Number'
              type='text'
              fullWidth
              {...bindNumber}
            />
            <TextField required margin='dense' label='Email' type='text' fullWidth {...bindEmail} />
            <DialogContentText>{error}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                props.updateAccountFormSide('Login');
                reset();
              }}
              color='primary'>
              Login
            </Button>
            <Button onClick={() => handleRegister()} color='primary'>
              Register
            </Button>
            <Button
              onClick={() => {
                props.updateAccountFormSide('Owner');
                reset();
              }}
              color='primary'>
              Register Owner
            </Button>
          </DialogActions>
        </Fragment>
      );
    }
  };

  return (
    <div>
      {/* Modal that pops up on click */}
      <Dialog
        open={props.accountFormToggle}
        onClose={() => {
          props.handleAccountForm();
          reset();
        }}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title' disableTypography={true}>
          {props.accountFormSide}
        </DialogTitle>
        {handleFormInfo()}
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    accountFormToggle: state.authReducer.accountFormToggle,
    accountFormSide: state.authReducer.accountFormSide
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { handleAccountForm, updateAccountFormSide, getUser }
  )(Login)
);
