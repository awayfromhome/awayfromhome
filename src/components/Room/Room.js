import React, { useEffect, useState } from 'react';
import SearchInfo from '../Search/SearchInfo';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchInfo: {
		marginTop: '3%'
	},
	card: {
		marginTop: '2%',
		backgroundColor: '#f4f2ec',
		height: '1000px',
		width: '85%',
		borderRadius: 8,
		display: 'flex',
		justifyContent: 'center'
	},
	roomContainer: {
		border: '1px solid black',
		marginTop: '4%',
		backgroundColor: '#ffff',
		height: '25%',
		width: '85%',
		borderRadius: 8,
		display: 'flex',
		justifyContent: 'center'
	},
	imageHolder: {
		border: '1px solid black',
		borderRight: '1px solid lightgrey',
		width: '25%'
	},
	roomInfoholder: {
		border: '1px solid black',
		display: 'flex',
		flexDirection: 'column',
		width: '65%'
	},
	roomInfo: {
		border: '1px solid black',
		borderRight: '1px solid lightgrey',
		width: '60%',
		padding: '1.5%'
	},
	roomButtonHolder: {
		width: '15%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	roomButtonSize: {
		width: '60%'
	}
});

const Room = props => {
	const { classes } = props;

	// const [roomInfo, setRoomInfo] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get('/api/room')
	// 		.then(res => {
	// 			setRoomInfo(res.data);
	// 		})
	// 		.catch(err => console.log(err));
	// }, []);

	return (
		<div className={classes.root}>
			<div className={classes.searchInfo}>
				<SearchInfo />
			</div>
			<div className={classes.card}>
				<div className={classes.roomContainer}>
					<div className={classes.imageHolder}>
						<img alt="" />
					</div>
					<div className={classes.roomInfo}>
						<div className={classes.roomInfoholder}>
							<h1>some info haha this is more info</h1>
							<h1>more crap, i think this is good</h1>
							<h1>more stufff</h1>
							<h1>some info</h1>
							<h1>more crap, do you like this?</h1>
							<h1>more stufff</h1>
							<h1>some info think this looks good?</h1>
						</div>
					</div>
					<div className={classes.roomButtonHolder}>
						<div className={classes.roomButtonSize}>
							<div>
								<h1>Sup! here is some pricing stuff</h1>
							</div>
							<div>
								<button>Select Rate!</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default withStyles(styles)(Room);
