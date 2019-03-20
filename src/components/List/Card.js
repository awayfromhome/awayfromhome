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
    width: "30%"
  },
  btn: {
    background: theme.palette.accent.main
  },
  insidePriceDiv: {
    margin: "auto"
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
          <div>Selection</div>
          <div>{props.price}</div>
          <button className={classes.btn} onClick={() => props.onClick()}>
            {props.btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Card);
