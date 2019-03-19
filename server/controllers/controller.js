const isWithinInterval = require("date-fns/isWithinInterval");
const parseISO = require("date-fns/parseISO");
const toDate = require("date-fns/toDate");
module.exports = {
  get_hotel_list: (req, res) => {
    const db = req.app.get("db");
    db.getHotel().then(list => {
      res.status(200).json(list);
    });
  },
  get_room_list: (req, res) => {},
  //Brute force way :) Might come back and improve with putting it all in sql :(
  get_reservation_list: async (req, res) => {
    const db = req.app.get("db");
    const { room_id, start_date, end_date } = req.body;
    //Maps over the room_id array
    let final = await room_id.map(async (elem, index) => {
      let inRangeReservations = await db
        .get_reservation(elem)
        .then(reservations => {
          //Maps over the array of reservations and checks to see if they are within the correct date range
          return (inRange = reservations.map((e, i) => {
            // console.log("In range date", e);
            if (
              isWithinInterval(e.date, {
                start: toDate(parseISO(start_date)),
                end: toDate(parseISO(end_date))
              })
            ) {
              return e;
            }
          }));
        });
      console.log("first", inRangeReservations);
      return inRangeReservations;
    });
    // console.log("second", final);
    let promisedFinal = await Promise.all(final);
    res.status(200).json(promisedFinal);
  },
  new_transaction: (req, res) => {},
  create_reservation: async (req, res) => {
    const db = req.app.get("db");
    const { dates, room_id } = req.body;
    try {
      dates.map((e, i) => {
        db.create_reservation(e, room_id);
      });
      console.log("We made it!!!");
      res.sendStatus(200);
    } catch {
      res.sendStatus(500);
    }
  }
};
