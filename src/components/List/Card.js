import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '65%',
    height: '30vh',
    backgroundColor: '#fff',
    overflow: 'hidden',
    lineHeight: '3vh',
    borderRadius: 8,
    marginTop: '4vh',
    border: '1px solid black'
  },
  img: {
    width: '25%'
  },
  info: {
    width: '55%',
    fontFamily: theme.typography.fontFamily[2],
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    borderRight: '1px solid black'
  },
  price: {
    width: '23%',
    margin: 'auto'
  },
  insidePriceDiv: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  selectBtn: {
    background: theme.palette.accent.main,
    fontFamily: theme.typography.fontFamily[1],
    textTransform: 'uppercase'
  },
  rate_fromtext: {
    textTransform: 'uppercase',
    fontFamily: theme.typography.fontFamily[0],
    fontSize: 12
  },
  rate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  priceDisplay: {
    fontSize: 35,
    paddingBottom: '20%',
    fontWeight: 700,
    width: '100%',
    height: '0.8em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily[1]
  },
  usd: {
    fontFamily: theme.typography.fontFamily[0],
    fontWeight: 400,
    fontSize: 12,
    marginLeft: '10%',
    height: '100%',
    marginBottom: 'auto'
  },
  ['@media (min-width: 750px) and (max-width: 1200px)']: {
    root: {
      width: '85%',
      height: '23vh'
    },
    img: {
      width: '38%'
    },
    info: {
      width: '65%'
    }
  },
  [theme.breakpoints.down('749')]: {
    root: {
      width: '100%',
      flexDirection: 'column',
      height: '65vh',
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },
    img: {
      width: 'auto',
      height: '30vh'
    },
    info: {
      width: '100%'
    },
    insidePriceDiv: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    price: {
      width: '90%'
    }
  }
}));

const Card = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.img} alt='hotel' className={classes.img} />
      <div className={classes.info}>{props.children}</div>
      <div className={classes.price}>
        <div className={classes.insidePriceDiv}>
          <div className={classes.rate}>
            <span className={classes.rate_fromtext}>FROM</span>
            <div className={classes.priceDisplay}>
              {props.price}
              <span className={classes.usd}>USD</span>
            </div>
          </div>
          <div className={classes.selectBtnDiv}>
            <button className={classes.selectBtn} onClick={() => props.onClick()}>
              {props.btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
