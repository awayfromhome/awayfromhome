module.exports = {
  getHotelListById: async (req, res) => {
    const db = req.app.get('db');
    const hotelList = await db.get_hotel_by_id(req.session.user.id);
    res.status(200).json(hotelList);
  },
  getHotelList: async (req, res) => {
    const db = req.app.get('db');
    const hotelList = await db.get_hotel();
    res.status(200).json(hotelList);
  },
  createHotel: (req, res) => {
    const db = req.app.get('db');
    const { name, address, url, reservationNum, frontDeskNum, amenityList } = req.body;
    db.create_hotel(name, address, url, reservationNum, frontDeskNum, amenityList, req.session.user.id).then(() => {
      res.sendStatus(200);
    });
  },
  updateHotel: (req, res) => {},
  deleteHotel: (req, res) => {}
};
