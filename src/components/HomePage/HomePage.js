import React, { useState } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";

const styles = theme => ({
  entireContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "7%"
  },
  imgContainer: {
    position: "absolute",
    zIndex: 3,
    background: "rgba(0,0,0,0.60)",
    top: "0vh",
    height: "60vh",
    width: "93%"
  },
  background: {
    height: "60vh",
    width: "100%"
  },
  img: {
    height: 500,
    width: 500
  },
  sectionContainer: {
    marginTop: 30
  },
  sections: {
    display: "flex",
    alignItems: "center",
    marginLeft: "7%"
  },
  paragraph: {
    width: 500,
    margin: 25
  },
  ["@media (min-width: 1000px) and (max-width: 1809px)"]: {
    background: {
      height: "60vh"
    },
    imgContainer: {
      height: "60vh"
    }
  }
});

//1809
// 1325

const HomePage = props => {
  const { classes } = props;
  return (
    <div className={classes.entireContainer}>
      <div className={classes.imgContainer} />
      <img
        className={classes.background}
        src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        alt="main"
      />
      <SearchBar />
      <div className={classes.sectionContainer}>
        <div className={classes.sections}>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt="main"
          />
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, et tale consequat reprehendunt quo. Amet
            dicunt nostrud ei duo, eu numquam referrentur qui. Liber perpetua in
            qui, mutat brute laudem et mea. Te forensibus adolescens nec. Nam at
            cetero epicuri, et dolores interesset est. Te vim assum aliquid
            delicatissimi. Nibh gubergren at sit, ius utinam suavitate an, cu
            ius illum propriae voluptua. Vix ea virtute quaeque tibique,
            efficiantur delicatissimi mei an, ignota mentitum suavitate his eu.
            Denique patrioque mediocritatem quo et, at vim quaeque percipit
            forensibus. At unum summo nec, cu regione signiferumque sit, eum
            aperiam appellantur ut.
          </p>
        </div>
        <div className={classes.sections}>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, et tale consequat reprehendunt quo. Amet
            dicunt nostrud ei duo, eu numquam referrentur qui. Liber perpetua in
            qui, mutat brute laudem et mea. Te forensibus adolescens nec. Nam at
            cetero epicuri, et dolores interesset est. Te vim assum aliquid
            delicatissimi. Nibh gubergren at sit, ius utinam suavitate an, cu
            ius illum propriae voluptua. Vix ea virtute quaeque tibique,
            efficiantur delicatissimi mei an, ignota mentitum suavitate his eu.
            Denique patrioque mediocritatem quo et, at vim quaeque percipit
            forensibus. At unum summo nec, cu regione signiferumque sit, eum
            aperiam appellantur ut.
          </p>
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            alt="main"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
