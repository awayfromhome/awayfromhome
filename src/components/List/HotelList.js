import React from 'react';
import SearchInfo from '../Search/SearchInfo';
import HotelInfo from '../List/HotelInfo';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchInfo: {
		marginTop: '17vh'
	},
	card: {
		marginTop: '4vh',
		paddingTop: '40px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f4f2ec',
		height: '500px',
		width: '85%',
		borderRadius: 8
	}
});

const HotelList = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.searchInfo}>
				<SearchInfo />
			</div>
			<div className={classes.card}>
				<HotelInfo />
			</div>
		</div>
	);
};
export default withStyles(styles)(HotelList);
