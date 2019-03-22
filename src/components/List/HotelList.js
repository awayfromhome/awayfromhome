import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInfo from "../Search/SearchInfo";
import HotelInfo from "../List/HotelInfo";
import { connect } from "react-redux";
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
  },
  ["@media (min-width: 750px) and (max-width: 1200px)"]: {
    card: { marginLeft: "10%" }
  }
});

const HotelList = props => {
  const { classes } = props;

  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    setHotelList(props.hotelList);
  }, [props.hotelList]);

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

const mapStateToProps = state => {
  console.log("redux", state);
  return {
    hotelList: state.hotelList
  };
};

export default connect(mapStateToProps)(withStyles(styles)(HotelList));
