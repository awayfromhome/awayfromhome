import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { useInput } from '../../../hooks/input-hook';
const useStyles = makeStyles(theme => ({
  card: {
    height: '14vh'
  },
  cardOpen: {
    height: '50vh'
  },
  CardContent: {
    width: '25vw'
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    width: '25vw',
    height: '100%',
    fontSize: '20px',
    marginLeft: 40,
    fontStyle: 'italic'
  },
  addressInfo: {
    marginTop: 20,
    fontFamily: theme.typography.fontFamily[2]
  },
  inputs: {
    padding: '10px 150px 10px 8px'
  },
  phoneContainer: {
    display: 'flex',
    paddingTop: '10px',
    justifyContent: 'space-between',
    paddingLeft: '40px'
  },
  phoneNumber: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    width: '25vw',
    fontStyle: 'italic',
    fontSize: '20px',
    fontWeight: 800
  },
  [theme.breakpoints.down('749')]: {
    addressdetails: {
      width: '62vw'
    },
    phoneContainer: {
      width: '100vw',
      paddingLeft: 0
    },
    address: {
      width: '73vw'
    },
    cardContainer: {
      width: '100vw'
    },
    phoneNumber: {
      flexDirection: 'column',
      width: '60vw'
    },
    PNedit: {
      marginRight: 36
    },
    ADedit: {
      marginRight: 35
    },
    phoneNumberField: {
      marginLeft: 200,
      width: '73vw'
    }
  }
}));

const AcountInfo = () => {
  const [edit, setEdit] = useState('true');
  const [phoneEdit, setPhoneEdit] = useState('true');
  const { bind: bindNumber } = useInput('');
  const { bind: bindAddress } = useInput('');
  const { bind: bindCity } = useInput('');
  const { bind: bindPostalCode } = useInput('');
  const classes = useStyles();

  return (
    <div>
      <Card className={edit ? classes.card : classes.cardOpen}>
        <CardContent className={classes.CardContent}>
          <div className={classes.cardContainer}>
            <div className={classes.address}>
              <span style={{ fontWeight: 800 }}>Address:</span>
              <div className={classes.addressInfo}>
                <p className={classes.addressdetails}>
                  {edit ? (
                    '233 Boardwalk Ave'
                  ) : (
                    <TextField
                      label='Street Name*'
                      margin='normal'
                      variant='outlined'
                      {...bindAddress}
                    />
                  )}
                </p>
                <p className={classes.addressdetails}>
                  {edit ? (
                    'Dallas, TX 75052'
                  ) : (
                    <TextField
                      label='City*'
                      margin='normal'
                      variant='outlined'
                      {...bindCity}
                    />
                  )}
                </p>
                <p className={classes.addressdetails}>
                  {edit ? null : (
                    <TextField
                      label='State*'
                      margin='normal'
                      variant='outlined'
                    />
                  )}
                </p>
                <p className={classes.addressdetails}>
                  {edit ? null : (
                    <TextField
                      label='Postal Code*'
                      margin='normal'
                      variant='outlined'
                      {...bindPostalCode}
                    />
                  )}
                </p>
              </div>
            </div>
            <div
              style={{
                marginBottom: 'auto',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: 400,
                fontSize: '17px'
              }}
              className={classes.ADedit}
              onClick={() => setEdit(!edit)}
            >
              {edit ? 'Edit' : 'Cancel'}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className={classes.CardContent}>
          <div className={classes.phoneContainer}>
            <span className={classes.phoneNumber}>
              Phone Number:
              <br />
              {phoneEdit ? (
                '+1-800-555-555'
              ) : (
                <TextField
                  label='Phone Number*'
                  margin='normal'
                  variant='outlined'
                  className={classes.phoneNumberField}
                  {...bindNumber}
                />
              )}
            </span>
            <div
              style={{
                marginBottom: 'auto',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: 400,
                fontSize: '17px'
              }}
              className={classes.PNedit}
              onClick={() => setPhoneEdit(!phoneEdit)}
            >
              {phoneEdit ? 'Edit' : 'Cancel'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AcountInfo;
