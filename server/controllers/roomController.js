module.exports = {
   getRoomList: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
      db.get_room_list(id).then(rooms => {
         res.status(200).json(rooms);
      });
   },
   createRoom: (req, res) => {},
   updateRoom: (req, res) => {},
   deleteRoom: (req, res) => {}
};
