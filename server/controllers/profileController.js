module.exports = {
  accountActivity: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.get_accountActivity(id).then(response => {
      res.status(200).json(response);
    });
  }
};

///DATA I NEED

// -- Date   -- RESERVATION
// -- Room Price - ROOM
// -- Room Name  - ROOM
// -- HotelName -- Hotel
// -- Points  - ROOM
// -- Number of Nights - Reservations

// Locate user_id in reservation (get the dates and number of Nights)

// HOW TO GET THERE

// Find the room_id join with room_id in room
// Get Room Name
// Get Room Price
// Get Room Points
// Connect Hotel id associated with room
// Join with hotel_id in Hotel and get Name
