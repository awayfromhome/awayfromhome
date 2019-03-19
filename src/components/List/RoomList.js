import React, { useEffect, useState } from 'react';
import SearchInfo from '../Search/SearchInfo';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RoomInfo from '../List/RoomInfo';
import axios from 'axios';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	rootTabs: {
		flexGrow: 1,
		marginTop: '10vh',
		width: '50vw',
		fontWeight: '700'
	},
	searchInfo: {
		marginTop: '17vh'
	},
	card: {
		marginTop: '1.5vh',
		
		paddingTop: '40px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f4f2ec',
		height: '500px',
		width: '85%',
		borderRadius: '8px'
	}
});

const RoomList = props => {
	const { classes } = props;

	const [roomList, setRoomList] = useState([]);

	useEffect(() => {
		axios
			.get(`/api/roomlist/${1}`)
			.then(res => {
				setRoomList(res.data);
			})
			.catch(err => console.log(err));
	}, []);
	
	return (
		<div className={classes.root}>
			<div className={classes.searchInfo}>
				<SearchInfo />
			</div>
			<div>
				<Paper className={classes.rootTabs}>
					<Tabs
						//   value={value}
						//   onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						centered
						variant="fullWidth">
						<Tab label="Standard" />
						<Tab label="Deluxe" />
					</Tabs>
				</Paper>
			</div>
			<div className={classes.card}>
				{roomList.map((e, i) => {
					return <RoomInfo key={i} info={e} />;
				})}
			</div>
		</div>
	);
};

export default withStyles(styles)(RoomList);
