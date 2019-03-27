import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	root: {
		height: '15%',
		fontSize: '2em',
		padding: '1%',
		textDecoration: 'underline',
		lineHeight: '1em',
		fontFamily: theme.typography.fontFamily[0],
	}
}));

const OwnerProfile = props => {
	console.log('owner user', props.user);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.root}>
				{' '}{props.user.username}'s Admin Page
			</div>
			<div className={classes.root} />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.authReducer.user
	};
};

export default connect(mapStateToProps)(OwnerProfile);
