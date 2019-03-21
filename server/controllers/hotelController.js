module.exports = {
   getHotelList: (req, res) => {
      const db = req.app.get('db');
      db.getHotel().then(list => {
         res.status(200).json(list);
      });
   },
   createHotel: (req, res) => {},
   updateHotel: (req, res) => {},
   deleteHotel: (req, res) => {}
};
