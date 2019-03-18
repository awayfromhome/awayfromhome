import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    display: "flex",
    width: "70vw"
  },
  img: {
    width: "15vw",
    height: 180
  },
  info: {
    width: "35vw"
  },
  price: {
    width: "15vw"
  },
  btn: {
    background: theme.palette.accent.main
  }
});

const Card = props => {
  console.log(props);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img
        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="hotel"
        className={classes.img}
      />
      <Paper className={classes.info}>{props.children}</Paper>
      <Paper className={classes.price}>
        <div>Selection</div>
        <div>{props.price}</div>
        <button className={classes.btn}>Select Hotel</button>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Card);
