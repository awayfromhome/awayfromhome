import React from "react";
import Card from "./Card";
import { withStyles } from "@material-ui/core/styles";

const Amenities = [
  "Wireless Internet",
  "Buisness Center",
  "Airport Shuttle",
  "Area Shuttle",
  "Health/Fitness Center"
];

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const HotelInfo = props => {
  const { classes } = props;
  return (
    <Card price="$100">
      <div className={classes.root}>
        <div>
          <h1>Holday Inn Dallas Market Center</h1>
          <h4>4500 Harry Hines Boulevard Dallas, Texas 75219 United States</h4>
          <h4>Reservations 800 439 4745</h4>
          <h4>Front Desk 1-214-2193333</h4>
          <h4>Distance</h4>
        </div>
        <ul>
          {Amenities.map((e, i) => {
            return <li>{e}</li>;
          })}
          <li>Show more Amenities</li>
        </ul>
      </div>
    </Card>
  );
};

export default withStyles(styles)(HotelInfo);
