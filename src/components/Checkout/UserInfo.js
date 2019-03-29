import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { useInput } from '../../hooks/input-hook';
import axios from 'axios';
import { setUser } from '../../ducks/auth/authSync';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  background: {
    background: 'fff',
    width: '35vw'
  },
  root: {
    margin: '1vw',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    fontSize: '1.5em',
    marginBottom: '2vh'
  },
  firstP: {
    marginBottom: '2vh'
  },
  check: {
    width: '5vw'
  },
  input: {
    padding: '10px',
    border: '1px solid grey',
    borderRadius: '5px'
  },
  submit: {
    height: '5vh',
    marginTop: '1vh',
    fontSize: '1.5em',
    background: theme.palette.accent.main,
    border: 'none',
    borderRadius: '5px'
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '1vh'
  },
  [theme.breakpoints.down('749')]: {
    background: {
      width: '100vw'
    },
    root: {
      margin: 'auto',
      width: '85%',
      marginTop: '5%'
    }
  }
}));

const UserInfo = props => {
  const { value: name, reset: resetName, bind: bindName } = useInput('');
  const { value: number, reset: resetNumber, bind: bindNumber } = useInput('');
  const { value: email, reset: resetEmail, bind: bindEmail } = useInput('');
  const { value: address, reset: resetAddress, bind: bindAddress } = useInput(
    ''
  );
  const { value: city, reset: resetCity, bind: bindCity } = useInput('');
  const {
    value: postalCode,
    reset: resetPostalCode,
    bind: bindPostalCode
  } = useInput('');
  const { value: country, reset: resetCountry, bind: bindCountry } = useInput(
    ''
  );
  const {
    value: username,
    reset: resetUsername,
    bind: bindUsername
  } = useInput('');
  const {
    value: password,
    reset: resetPassword,
    bind: bindPassword
  } = useInput('');
  const [check, setCheck] = useState(false);

  const reset = () => {
    resetName();
    resetNumber();
    resetEmail();
    resetAddress();
    resetCity();
    resetPostalCode();
    resetCountry();
    resetUsername();
    resetPassword();
  };

  const submit = async ev => {
    let { token } = await props.stripe.createToken({ name: name });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    });
    if (response.ok) console.log('Purchase Complete!');
  };

  const register = async () => {
    await submit();
    const user = await axios.post('/auth/extendedRegister', {
      name,
      number,
      email,
      address,
      city,
      postalCode,
      country,
      username,
      password,
      owner: false
    });
    setUser(user.data);
    reset();
    // props.history.push('/thanks')
  };

  const classes = useStyles();
  return (
    <Paper className={classes.background}>
      <div className={classes.root}>
        <h1 className={classes.header}>Guest Information</h1>
        <p className={classes.firstP}>
          Already an AFH Rewards Club member? Sign in to earn your points!
        </p>
        <p>* Indicates a required input field</p>

        <TextField
          label='Name*'
          margin='normal'
          variant='outlined'
          {...bindName}
        />
        <TextField
          label='Phone Number*'
          margin='normal'
          variant='outlined'
          {...bindNumber}
        />
        <TextField
          label='Email Address*'
          margin='normal'
          variant='outlined'
          {...bindEmail}
        />
        <TextField
          label='Address*'
          margin='normal'
          variant='outlined'
          {...bindAddress}
        />
        <TextField
          label='City/Town*'
          margin='normal'
          variant='outlined'
          {...bindCity}
        />
        <TextField
          label='Postal Code*'
          margin='normal'
          variant='outlined'
          {...bindPostalCode}
        />
        <TextField
          label='Country/Region*'
          margin='normal'
          variant='outlined'
          {...bindCountry}
        />
        <div>
          <h1>Register a new User?</h1>
          <Checkbox
            checked={check}
            onChange={() => setCheck(!check)}
            color='primary'
            className={classes.check}
          />
          {check ? (
            <div>
              <TextField
                label='Username*'
                margin='normal'
                variant='outlined'
                {...bindUsername}
              />
              <TextField
                label='Password*'
                margin='normal'
                variant='outlined'
                {...bindPassword}
              />
            </div>
          ) : null}
        </div>
        <p className={classes.title}>Card Information</p>

        <CardElement
          className={classes.input}
          style={{
            base: {
              lineHeight: '45px',
              fontWeight: 300,
              fontSize: '20px'
            }
          }}
        />

        {check ? (
          <button className={classes.submit} onClick={register}>
            Checkout
          </button>
        ) : (
          <button className={classes.submit} onClick={submit}>
            Checkout as Guest
          </button>
        )}
      </div>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default injectStripe(
  withRouter(
    connect(
      mapStateToProps,
      { setUser }
    )(UserInfo)
  )
);
