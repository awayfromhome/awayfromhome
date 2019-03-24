require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');

const authCon = require('./controllers/authController');
const hotelCon = require('./controllers/hotelController');
const roomCon = require('./controllers/roomController');
const reservationCon = require('./controllers/reservationController');
const miscCon = require('./controllers/miscController');

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

//Database connection
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
  })
  .catch(err => console.log(err));

//Auth endpoints
app.get('/auth/user', authCon.getUser);
app.post('/auth/register', authCon.register);
app.post('/auth/extendedRegister', authCon.extendedRegister);
app.post('/auth/login', authCon.login);
app.get('/auth/logout', authCon.logout);

//Hotel and room endpoints
//NEED to make the get hotel request into a get with req.query parameters instead of a post
app.get('/api/admin/hotel', hotelCon.getHotelListById);
app.post('/api/hotel', hotelCon.getHotelList);
app.post('/api/createhotel', hotelCon.createHotel);
app.put('/api/hotel', hotelCon.updateHotel);
app.delete('/api/hotel', hotelCon.deleteHotel);

//Room endpoint
app.get('/api/roomlist/:id', roomCon.getRoomList);
app.get('/api/room/:id', roomCon.getRoom);
app.post('/api/room', roomCon.createRoom);
app.put('/api/room', roomCon.updateRoom);
app.delete('/api/room', roomCon.deleteRoom);

//Reservation endpoints
app.get('/api/reservation', reservationCon.getReservationList);
app.post('/api/reservation', reservationCon.createReservation);
app.put('/api/reservation', reservationCon.updateReservation);
app.delete('/api/reservation', reservationCon.deleteReservation);

//Misc. endpoints
//POST handles stripe payment and nodemailer info to client
app.post('/charge', miscCon.newCharge);
app.post('/api/transaction', miscCon.newTransaction);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server - Listening on ${process.env.EXPRESS_PORT}`);
});
