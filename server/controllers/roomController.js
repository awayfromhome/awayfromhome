module.exports = {
	getRoomList: (req, res) => {
		const db = req.app.get('db');
		const { id } = req.params;
		db.get_room_list(id).then(rooms => {
			res.status(200).json(rooms);
		});
	},
	getRoom: (req, res) => {
		const db = req.app.get('db');
		const { id } = req.params;
		db.get_room(id).then(room => {
			res.status(200).json(room);
		});
	},
	createRoom: (req, res) => {},
	updateRoom: (req, res) => {},
	deleteRoom: (req, res) => {}
};
