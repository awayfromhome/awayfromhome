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
    marginTop: "17vh"
  },
  card: {
    marginTop: "2vh",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f4f2ec",
    height: "1000px",
    width: "85%",
    borderRadius: 8
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
