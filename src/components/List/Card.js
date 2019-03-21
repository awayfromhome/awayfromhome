import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    width: "65%",
    height: "25vh",
    backgroundColor: "#fff",
    overflow: "hidden",
    lineHeight: "3vh",
    borderRadius: 8,
    marginTop: "4vh"
  },
  img: {
    height: "25vh",
    width: "25%"
  },
  info: {
    width: "55%",
    fontFamily: theme.typography.fontFamily[2],
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
    borderRight: "1px solid black"
  },
  price: {
    width: "23%",
    margin: "auto"
  },
  insidePriceDiv: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  selectBtn: {
    background: theme.palette.accent.main
  },
  rate_fromtext: {
    textTransform: "uppercase",
    fontFamily: theme.typography.fontFamily[0],
    fontSize: 12
  },
  rate: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  priceDisplay: {
    fontSize: 35,
    paddingBottom: "20%",
    fontWeight: 550,
    width: "100%",
    height: "0.8em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  usd: {
    fontWeight: 400,
    fontSize: 12,
    marginLeft: "10%",
    height: "100%",
    marginBottom: "auto"
  }
});

const Card = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src={props.img} alt="hotel" className={classes.img} />

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
            <button
              className={classes.selectBtn}
              onClick={() => props.onClick()}
            >
              {props.btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Card);
