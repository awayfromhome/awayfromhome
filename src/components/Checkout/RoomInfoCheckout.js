import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import CheckoutInfo from './CheckoutInfo';
import { connect } from 'react-redux';
import { getRoomList } from '../../ducks/lists/listAsync';

const useStyles = makeStyles(theme => ({
	container: {
		background: '#fff',
		width: '61vw',
		height: '18vh',
		fontFamily: theme.typography.fontFamily[1],
		margin: '2%',
		boxShadow:
			'0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
		borderRadius: 4
	},
	roomInfoCheckout: {
		padding: '20px 40px 30px 30px',
		width: '30vw',
		fontSize: '18px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	priceInfoCheckout: {
		borderTop: '1px solid black',
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: '2vh'
	},
	totalPrice: {
		padding: '0px 50px 20px 30px',
		width: '30vw',
		fontSize: '24px'
	},
	currency: {
		fontSize: '17px',
		textDecoration: 'underline',
		fontWeight: 400,
		marginTop: 'auto',
		paddingLeft: '2%'
	},
	totalpriceofstay: {
		fontWeight: 600
	},
	price: {
		fontWeight: 600,
		display: 'flex'
	},
	openArrow: {
		display: 'none'
	},
	closeArrow: {
		display: 'none'
	},
	'@media (min-width: 750px) and (max-width: 1200px)': {
		container: {
			height: 'auto'
		},
		totalPrice: {
			width: '50vw'
		},
		roomInfoCheckout: {
			width: '50vw'
		}
	},
	[theme.breakpoints.down('749')]: {
		container: {
			width: '100%',
			height: '100%',
			marginBottom: '3%'
		},
		roomInfoCheckout: {
			width: 'auto'
		},
		totalPrice: {
			width: 'auto',
			padding: 0,
			fontSize: '18px'
		},
		priceInfoCheckout: {
			width: 'auto',
			padding: '30px'
		},
		price: {
			width: '25%'
		},
		closeArrow: {
			display: 'block',
			width: '70px',
			paddingBottom: 8
		},
		openArrow: {
			transform: 'rotate(180deg)',
			display: 'block',
			width: '70px'
		}
	}
}));

const RoomInfoCheckout = props => {
	const [toggle, setToggle] = useState('true');
	const classes = useStyles();
	// console.log('roominfo checkout', props.roomList);
	// const { info } = props;
	return (
		<div className={classes.container}>
			{/* // INSERT ROOM INFO  */}
			<div className={classes.roomInfoCheckout}>
				<span>
					{' '}{props.roomList[0].room_name}
				</span>

				{/* {arrow up or down depending on toggle} */}
				<span>
					{toggle
						? <img
								src="https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png"
								alt="drop-down"
								className={classes.closeArrow}
								onClick={() => setToggle(!toggle)}
							/>
						: <img
								src="https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png"
								alt="drop-down"
								className={classes.openArrow}
								onClick={() => setToggle(!toggle)}
							/>}
				</span>
			</div>

			{/* {Drops down the rates and details in mobile view} */}
			<div>
				{toggle ? null : <CheckoutInfo />}
			</div>

			<div className={classes.totalPrice}>
				<div className={classes.priceInfoCheckout}>
					{/* INSERT PRICE OF ROOM */}
					<div className={classes.totalpriceofstay}>
						{' '}TOTAL PRICE OF STAY:{' '}
					</div>
					<div className={classes.price}>
						${props.roomList[0].price.toFixed(2)}
						<div className={classes.currency}> USD</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		searchInfo: state.listReducer.setSearchInfo,
		roomList: state.listReducer.roomList
	};
};

export default connect(mapStateToProps, { getRoomList })(RoomInfoCheckout);
