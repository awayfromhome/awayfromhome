import React from "react";
import Card from "./Card";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  insideInfo: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    borderRight: "1px solid black"
  },
  hotelInfo: {
    width: "80%",
    margin: "auto",
    paddingLeft: "5%"
  },
  amenities: {
    paddingRight: "1%",
    width: "40%",
    margin: "auto",
    paddingRight: "5%"
  }
});

const HotelInfo = props => {
  const { classes, info } = props;
  console.log(info);
  return (
    <Card
      price="100"
      img={info.url}
      btnName="Select Hotel"
      onClick={() => props.history.push(`/roomlist/${info.hotel_id}`)}
    >
      <div className={classes.insideInfo}>
        <div className={classes.hotelInfo}>
          <h1>{info.name}</h1>
          <h4>{info.address}</h4>
          <h4>Reservations: {info.reservation_num}</h4>
          <h4>Front Desk: {info.front_desk_num}</h4>
          <h4>Distance</h4>
        </div>
        <ul className={classes.amenities}>
          {info.amenities.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </Card>
  );
};

export default withRouter(withStyles(styles)(HotelInfo));
