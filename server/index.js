require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');

const authCon = require('./controllers/authController');
const hotelCon = require('./controllers/hotelController');
const roomCon = require('./controllers/roomController');
const reservationCon = require('./controllers/reservationController');
const miscCon = require('./controllers/miscController');
const uploadCon = require('./controllers/uploadController');
const profileCon = require('./controllers/profileController');
app.use(express.static(`${__dirname}/../build`));
const upload = multer();
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
//Combine the two get hotellist calls into one usinging if statements in the controller
app.post('/api/hotel', hotelCon.getHotelList);
app.post('/api/createhotel', hotelCon.createHotel);
app.put('/api/hotel', hotelCon.updateHotel);
app.delete('/api/hotel', hotelCon.deleteHotel);

//Room endpoint
app.get('/api/room/:id', roomCon.getRoomList);
app.post('/api/room', roomCon.createRoom);
app.put('/api/room', roomCon.updateRoom);
app.delete('/api/room', roomCon.deleteRoom);

//Reservation endpoints
app.post('/api/wrong/reservation', reservationCon.getReservationList);
app.post('/api/reservation', reservationCon.createReservation);
app.put('/api/reservation', reservationCon.updateReservation);
app.delete('/api/reservation', reservationCon.deleteReservation);

//Misc. endpoints
//POST handles stripe payment and nodemailer info to client
app.post('/charge', miscCon.newCharge);
app.post('/api/uploadPic', upload.single('pic'), uploadCon.uploadPic);

// User Profile EndPoint
app.get('/api/accountActivity/:id', profileCon.accountActivity);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server - Listening on ${process.env.EXPRESS_PORT}`);
});
