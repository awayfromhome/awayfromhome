import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,

		width: '55vw'
	},
	barInfo: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	searchInfo: {
		marginLeft: 10
	},
	appBar: {
		borderRadius: 8
	}
});

const SearchInfo = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static">
				<Toolbar>
					<Typography
						className={classes.barInfo}
						variant="h6"
						color="inherit">
						<div>
							{/* {props.city} {props.state} {props.address}{' '} */}
							{/* {props.country} */}
							Dallas, Tx, United States
						</div>
						<div className={classes.searchInfo}>
							{/* {props.date.checkIn} {props.date.checkOut} | */}
							| 03/18/2019 - 03/19/2019
						</div>
						<div className={classes.searchInfo}>
							{/* {' '}{props.guests} */}
							| Guests: 2
						</div>
						<div className={classes.searchInfo}>
							{/* {props.numRooms}| */}
							| Rooms: 1
						</div>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

const mapStatetoProps = state => state;

export default connect(mapStatetoProps)(withStyles(styles)(SearchInfo));
