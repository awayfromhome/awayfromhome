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
	const { classes, info } = props;
	console.log('info room list', info);
	const [roomList, setRoomList] = useState([]);
	const [standard, setStandard] = useState(true);
	const [deluxe, setDeluxe] = useState(false);

	useEffect(() => {
		axios
			.get(`/api/roomlist/${1}`)
			.then(res => {
				setRoomList(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const handleRoomSelect = name => {
		if (name === 'Standard') {
			setStandard(true);
			setDeluxe(false);
		} else if (name === 'Deluxe') {
			setDeluxe(true);
			setStandard(false);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.searchInfo}>
				<SearchInfo />
			</div>
			<div>
				<Paper className={classes.rootTabs}>
					<Tabs
						value={false}
						indicatorColor="primary"
						textColor="primary"
						centered
						variant="fullWidth">
						<Tab
							label="Standard"
							onClick={() => handleRoomSelect('Standard')}
						/>
						<Tab
							label="Deluxe"
							onClick={() => handleRoomSelect('Deluxe')}
						/>
					</Tabs>
				</Paper>
			</div>
			<div className={classes.card}>
				{roomList.map((e, i) => {
					console.log('roomlist', e);
					if (standard) {
						if (e.name === 'Standard') {
							return (
								<div>
									<RoomInfo key={i} info={e} />;
								</div>
							);
						}
					} else {
						if (e.name === 'Deluxe') {
							return (
								<div>
									<RoomInfo key={i} info={e} />;
								</div>
							);
						}
					}
				})}
			</div>
		</div>
	);
};

export default withStyles(styles)(RoomList);
