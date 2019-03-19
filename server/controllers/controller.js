module.exports = {
  get_hotel_list: (req, res) => {
    const db = req.app.get("db");
    db.getHotel().then(list => {
      res.status(200).json(list);
    });
  },
  get_room_list: (req, res) => {},
  get_reservation_list: (req, res) => {},
  new_transaction: (req, res) => {}
};
