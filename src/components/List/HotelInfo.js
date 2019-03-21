import React from "react";
import Card from "./Card";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  hotelInfo: {
    width: "80%",
    margin: "auto",
    paddingLeft: "5%"
  },
  hotelname: {
    marginBottom: "auto",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    margin: "1%"
  },
  hotelavatar: {
    borderRadius: "50%",
    border: "1px solid black",
    width: 50,
    height: 50
  },
  amenities: {
    paddingRight: "1%",
    width: "40%",
    margin: "auto",
    paddingRight: "5%",
    listStyleType: "square",
    textAlign: "left"
  },
  bodytext: {
    display: "flex",
    marginBottom: "auto"
  },
  infoname: {
    paddingLeft: "2%",
    width: "80%",
    fontSize: 30
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
      <div className={classes.hotelname}>
        <div className={classes.hotelavatar} />
        <h1 className={classes.infoname}>{info.name}</h1>
      </div>
      <div className={classes.bodytext}>
        <div className={classes.hotelInfo}>
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
