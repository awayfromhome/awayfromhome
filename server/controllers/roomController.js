module.exports = {
  getRoomList: async (req, res) => {
    const db = req.app.get('db');
    try {
      const rooms = await db.get_room_list(req.params.id);
      res.status(200).json(rooms);
    } catch (err) {
      res.sendStatus(500);
    }
  },
  getRoom: async (req, res) => {
    const db = req.app.get('db');
    try {
      const room = await db.get_room(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      res.sendStatus(500);
    }
  },
  createRoom: async (req, res) => {
    const db = req.app.get('db');
    const { count, type, name, description, hotel, price } = req.body;
    try {
      await db.create_room(count, type, name, description, hotel, price);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  },
  updateRoom: async (req, res) => {
    const db = req.app.get('db');
    const { count, type, name, description, hotel, price, id } = req.body;
    try {
      await db.update_room(count, type, name, description, hotel, price, id);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  },
  deleteRoom: async (req, res) => {
    const db = req.app.get('db');
    try {
      await db.delete_room(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  }
};
