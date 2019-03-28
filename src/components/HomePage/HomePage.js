import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import SearchBar from './SearchBar';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
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
    width: '60%',
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
  list: {
    listStyleType: 'square',
    margin: '10%',
    marginLeft: '30%'
  },
  '@media (min-width: 750px) and (max-width: 1200px)': {
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
      height: '27vh',
      marginTop: '13vh',
      zIndex: -1
    },
    sections: {
      flexDirection: 'column',
      margin: 'auto'
    },
    background: {
      height: '40vh',
      width: '100%',
      zIndex: -2
    },
    img: {
      width: '100%',
      height: '90%',
      marginTop: '15%'
    },
    paragraph: {
      width: '80%',
      margin: '10%'
    },
    secondparagraph: {
      display: 'flex',
      flexDirection: 'column-reverse'
    }
  }
}));

const HomePage = props => {
  const classes = useStyles();
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
            <ul>
              <li className={classes.list}>
                Stay in Luxrious Hotels with Comfort & Safety
              </li>
              <li className={classes.list}>
                Local Resturants and Shopping Areas
              </li>
              <li className={classes.list}>Easy Transportation Hubs</li>
              <li className={classes.list}>Year-Round Enteratinment</li>
            </ul>
          </p>
        </div>
        <div className={classNames(classes.sections, classes.secondparagraph)}>
          <p className={classes.paragraph}>
            <ul>
              <li className={classes.list}>Find Deals Everyday with Us!</li>
              <li className={classes.list}>Discounted Programs and Packages</li>
              <li className={classes.list}>Bussiness Friendly Rooms </li>
              <li className={classes.list}>Earn Points and Save!</li>
            </ul>
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

export default connect(mapStateToProps)(HomePage);
