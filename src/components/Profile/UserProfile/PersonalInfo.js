import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  card: {
    height: '15vh'
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
  }
}));

const AcountInfo = () => {
  const [edit, setEdit] = useState('true');
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.CardContent}>
          <div className={classes.cardContainer}>
            <div className={classes.address}>
              <span style={{ fontWeight: 800 }}> Address: </span>
              <div className={classes.addressInfo}>
                <p className={classes.addressdetails}>
                  {edit ? (
                    '233 Boardwalk Ave'
                  ) : (
                    <input type='text' placeholder='Street Name' />
                  )}
                </p>
                <p className={classes.addressdetails}>
                  {edit ? (
                    'Dallas, TX 75052'
                  ) : (
                    <input type='text' placeholder='City' />
                  )}
                </p>
                <p className={classes.addressdetails}>
                  {edit ? null : <input type='text' placeholder='State' />}
                </p>
                <p className={classes.addressdetails}>
                  {edit ? null : (
                    <input type='text' placeholder='Postal Code' />
                  )}
                </p>
              </div>
            </div>
            <div
              style={{
                marginBottom: 'auto',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
              onClick={() => setEdit(!edit)}
            >
              {edit ? 'Edit' : 'Cancel'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AcountInfo;
