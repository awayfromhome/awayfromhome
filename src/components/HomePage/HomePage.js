import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';

const styles = theme => ({
  entireContainer: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '7%',
    width: '93%'
  },
  imgContainer: {
    position: 'absolute',
    zIndex: 3,
    background: 'rgba(0,0,0,0.60)',
    top: '0vh',
    height: '50vh',
    width: '93%'
  },
  background: {
    height: '50vh',
    width: '100%'
  },
  img: {
    height: '40%',
    width: '30%',
    margin: 'auto'
  },
  sectionContainer: {
    marginTop: '5%',
    width: '70%',
    margin: 'auto'
  },
  sections: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4%',
    margin: '5%'
  },
  paragraph: {
    width: '60%',
    margin: 'auto'
  },
  ['@media (min-width: 750px) and (max-width: 1200px)']: {
    entireContainer: {
      marginLeft: '10%'
    },
    background: {
      height: '30vh'
    },
    imgContainer: {
      height: '30vh'
    }
  },
  [theme.breakpoints.down('749')]: {
    entireContainer: {
      flexDirection: 'column',
      width: '100%',
      marginLeft: 0
    },
    imgContainer: {
      width: '100%',
      height: '40vh',
      marginTop: '10vh'
    },
    sections: {
      flexDirection: 'column'
    },
    background: {
      height: '40vh',
      width: '100%'
    },
    img: {
      width: '90%',
      height: '90%'
    },
    paragraph: {
      width: '90%'
    }
  }
});

const HomePage = props => {
  const { classes } = props;
  return (
    <div className={classes.entireContainer}>
      <div className={classes.imgContainer} />
      <img
        className={classes.background}
        src='https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        alt='main'
      />
      <SearchBar />
      <div className={classes.sectionContainer}>
        <div className={classes.sections}>
          <img
            className={classes.img}
            src='https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
            alt='main'
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
            src='https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
            alt='main'
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
