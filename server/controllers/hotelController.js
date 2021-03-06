module.exports = {
  getHotelList: async (req, res) => {
    const db = req.app.get('db');
    let hotelList;
    try {
      if (req.query.byId) {
        hotelList = await db.get_hotel_by_id(req.session.user.id);
      } else {
        hotelList = await db.get_hotel();
      }
      res.status(200).json(hotelList);
    } catch (err) {
      res.sendStatus(500);
    }
  },
  createHotel: async (req, res) => {
    const db = req.app.get('db');
    const { name, address, reservationNum, frontDeskNum, amenityList, location } = req.body;
    try {
      await db.create_hotel(name, address, location, reservationNum, frontDeskNum, amenityList, req.session.user.id);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  updateHotel: async (req, res) => {
    const db = req.app.get('db');
    const { name, address, url, reservationNum, frontDeskNum, amenityList } = req.body;
    try {
      await db.update_hotel(name, address, url, reservationNum, frontDeskNum, amenityList);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  },
  deleteHotel: async (req, res) => {
    const db = req.app.get('db');
    try {
      await db.delete_hotel(req.params.id);
    } catch (err) {
      res.sendStatus(500);
    }
  }
};
