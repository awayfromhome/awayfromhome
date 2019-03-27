import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	root: {
		height: '15%',
		fontSize: '4em',
		padding: '3%'
	}
}));

const OwnerProfile = props => {
	console.log('owner user', props.user);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			Username: {props.user.username}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.authReducer.user
	};
};

export default connect(mapStateToProps)(OwnerProfile);
