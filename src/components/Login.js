import React, { Fragment } from 'react';
import { useInput } from '../hooks/input-hook';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAccountForm } from '../ducks/async';
import { updateAccountFormSide } from '../ducks/sync';
import NumberFormat from 'react-number-format';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
   button: {
      color: 'white',
      fontSize: '.8em'
   },
   linkbtn: {
      margin: '0',
      padding: '0'
   }
});

const Login = props => {
   const { value: username, reset: resetUsername, bind: bindUsername } = useInput('');
   const { value: password, reset: resetPassword, bind: bindPassword } = useInput('');
   const { value: email, reset: resetEmail, bind: bindEmail } = useInput('');
   const { value: number, reset: resetNumber, bind: bindNumber } = useInput('');

   //Login
   const handleLogin = () => {
      //  axios
      //     .post('/auth/login', this.state)
      //     .then(res => {
      //        this.props.getUser();
      //        this.props.history.push('/main/tasks');
      //        this.props.loginFormToggle(this.props.loginForm);
      //     })
      //     .catch(err => console.log(err));
   };

   //Register
   const handleRegister = () => {
      //  let regexp = /[0-9+]+/g;
      //  let num = this.state.number.match(regexp).join('');
      //  axios
      //     .post('/auth/register', { ...this.state, number: num })
      //     .then(res => {
      //        this.props.history.push('/main/tasks');
      //        this.props.getUser();
      //        this.props.loginFormToggle(this.props.loginForm);
      //     })
      //     .catch(err => console.log(err));
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
                  <TextField margin="dense" label="username" type="text" fullWidth {...bindUsername} />
                  <TextField margin="dense" label="password" type="password" fullWidth {...bindPassword} />
               </DialogContent>
               <DialogActions>
                  <Button onClick={() => handleLogin()} color="primary">
                     Login
                  </Button>
                  <Button onClick={() => props.updateAccountFormSide('Register')} color="primary">
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
                     If this is your first time here please fill out the information to create your account! If you already have an account please
                     click down below to change to the login page.
                  </DialogContentText>
                  <TextField margin="dense" label="Username" type="text" fullWidth {...bindUsername} />
                  <TextField margin="dense" label="Password" type="password" fullWidth {...bindPassword} />
                  <NumberFormat
                     customInput={TextField}
                     format="+1 (###) ###-####"
                     margin="dense"
                     label="Phone Number"
                     type="text"
                     fullWidth
                     {...bindNumber}
                  />
                  <TextField margin="dense" label="Email" type="text" fullWidth {...bindEmail} />
               </DialogContent>
               <DialogActions>
                  <Button onClick={() => props.updateAccountFormSide('Login')} color="primary">
                     Login
                  </Button>
                  <Button onClick={() => props.updateAccountFormSide('Register')} color="primary">
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
                     If this is your first time here please fill out the information to create your account! If you already have an account please
                     click down below to change to the login page.
                  </DialogContentText>
                  <TextField margin="dense" label="Username" type="text" fullWidth {...bindUsername} />
                  <TextField margin="dense" label="Password" type="password" fullWidth {...bindPassword} />
                  <NumberFormat
                     customInput={TextField}
                     format="+1 (###) ###-####"
                     margin="dense"
                     label="Phone Number"
                     type="text"
                     fullWidth
                     {...bindNumber}
                  />
                  <TextField margin="dense" label="Email" type="text" fullWidth {...bindEmail} />
               </DialogContent>
               <DialogActions>
                  <Button onClick={() => props.updateAccountFormSide('Login')} color="primary">
                     Login
                  </Button>
                  <Button onClick={() => handleRegister()} color="primary">
                     Register
                  </Button>
                  <Button onClick={() => props.updateAccountFormSide('Owner')} color="primary">
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
         <Dialog open={props.accountFormToggle} onClose={() => props.handleAccountForm('')} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" disableTypography={true}>
               {props.accountFormSide}
            </DialogTitle>
            {handleFormInfo()}
         </Dialog>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      accountFormToggle: state.accountFormToggle,
      accountFormSide: state.accountFormSide
   };
};

export default withRouter(
   connect(
      mapStateToProps,
      { handleAccountForm, updateAccountFormSide }
   )(withStyles(styles)(Login))
);
