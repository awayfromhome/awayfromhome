import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    width: "65%",
    backgroundColor: "#fff",
    overflow: "hidden",
    lineHeight: "3vh",
    borderRadius: 8,
    marginTop: "4vh"
  },
  img: {
    height: 165
  },
  info: {
    width: "55%"
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
    textTransform: "uppercase"
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
            <div>{props.price}</div>
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
