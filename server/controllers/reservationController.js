const isWithinInterval = require('date-fns/isWithinInterval');
const parseISO = require('date-fns/parseISO');
const toDate = require('date-fns/toDate');

module.exports = {
   //Brute force way :) Might come back and improve with putting it all in sql :(
   //Eventually go back through and delete on a timer all the old reservations
   getReservationList: async (req, res) => {
      const db = req.app.get('db');
      const { room_id, start_date, end_date } = req.body;
      //Maps over the room_id array
      let final = await room_id.map(async (elem, index) => {
         let inRangeReservations = await db.get_reservation(elem).then(reservations => {
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
         // console.log("first", inRangeReservations);
         return inRangeReservations;
      });
      // console.log("second", final);
      let promisedFinal = await Promise.all(final);
      let min = Number.MIN_VALUE;
      let finalArr = promisedFinal.map((el, i) => {
         let obj = {};
         let innerObj = {};
         el.map((e, i) => {
            if (e) {
               obj.room_name = e.room_id;
               if (innerObj[e.date]) {
                  innerObj[e.date]++;
               } else {
                  innerObj[e.date] = 1;
               }
            }
            for (key in innerObj) {
               if (innerObj[key] > min) {
                  min = innerObj[key];
               }
            }
         });
         obj.reservations = min;
         return obj;
      });
      console.log(finalArr);
      res.status(200).json(finalArr);
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
      } catch {
         res.sendStatus(500);
      }
   },
   updateReservation: (req, res) => {},
   deleteReservation: (req, res) => {}
};
