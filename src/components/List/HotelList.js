import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInfo from "../Search/SearchInfo";
import HotelInfo from "../List/HotelInfo";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  searchInfo: {
    marginTop: "5%"
  },
  card: {
    marginTop: "1%",
    paddingTop: "3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.second,
    height: "100%",
    width: "100%",
    borderRadius: 8
  }
});

const HotelList = props => {
  const { classes } = props;

  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/hotel")
      .then(res => {
        setHotelList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.searchInfo}>
        <SearchInfo />
      </div>
      <div className={classes.card}>
        {hotelList.map((e, i) => {
          return <HotelInfo key={i} info={e} />;
        })}
      </div>
    </div>
  );
};
export default withStyles(styles)(HotelList);
