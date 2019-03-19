import React from "react";
import Card from "./Card";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const HotelInfo = props => {
  const { classes, info } = props;
  return (
    <Card
      price="$100"
      img={info.url}
      btnName="Select Hotel"
      onClick={() => props.history.push("/room")}
    >
      <div className={classes.root}>
        <div>
          <h1>{info.name}</h1>
          <h4>{info.address}</h4>
          <h4>Reservations: {info.reservation_num}</h4>
          <h4>Front Desk: {info.front_desk_num}</h4>
          <h4>Distance</h4>
        </div>
        <ul>
          {info.amenities.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </Card>
  );
};

export default withRouter(withStyles(styles)(HotelInfo));
