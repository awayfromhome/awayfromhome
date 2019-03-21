module.exports = {
	//1/2 Brute force, maybe use sql functions? We're dumb tho :)
	//Eventually go back through and delete on a timer all the old reservations
	getReservationList: async (req, res) => {
		const db = req.app.get('db');
		const { room_id, start_date, end_date } = req.body;
      const promisedFinal = await db.get_reservation();
      //Formats the database response in a usable way for front-end
		let final = room_id.map((e, i) => {
			let obj = { room_id: e };
         let innerObj = {};
         let min = Number.MIN_VALUE;
			promisedFinal.map((el, ind) => {
				if (el.room_id === e) {
					if (!innerObj[el.date]) {
						innerObj[el.date] = 1;
					} else {
						innerObj[el.date]++;
					}
				}
			});
			for (key in innerObj) {
				if (innerObj[key] > min) {
					min = innerObj[key];
				}
			}
			obj.reservations = min;
			return obj;
		});
		res.status(200).json(final);
	},
	createReservation: async (req, res) => {
		const db = req.app.get('db');
		const { dates, room_id } = req.body;
		try {
			dates.map((e, i) => {
				db.create_reservation(e, room_id);
			});
			console.log('We made it!!!');
			res.sendStatus(200);
		} catch (err) {
			console.log(err);
			res.sendStatus(500);
		}
	},
	updateReservation: (req, res) => {},
	deleteReservation: (req, res) => {}
};
