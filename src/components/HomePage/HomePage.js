import React, { useState } from "react";
import { connect } from "react-redux";

const HomePage = props => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>{props.name}</p>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HomePage);

// https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80
// use as background image
