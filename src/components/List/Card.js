import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		display: 'flex',
		width: '70vw',
		backgroundColor: '#f2e3bc',
		height: '21vh',
		overflow: 'hidden',
		lineHeight: '3vh',
		borderRadius: 8
	},
	img: {
		width: '16vw',
		height: 165
	},
	info: {
		width: '47vw',
		marginLeft: '10px',
		marginRight: '10px'
	},
	price: {
		width: '10vw'
	},
	btn: {
		background: theme.palette.accent.main
	}
});

const Card = props => {
	console.log(props);
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div>
				<img
					src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="hotel"
					className={classes.img}
				/>
			</div>
			<div className={classes.info}>
				{props.children}
			</div>
			<div className={classes.price}>
				<div>Selection</div>
				<div>
					{props.price}
				</div>
				<button className={classes.btn}>Select Hotel</button>
			</div>
		</div>
	);
};

export default withStyles(styles)(Card);
