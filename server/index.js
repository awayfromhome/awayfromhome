require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_Nv8iegkDSaolHLEsNJDRWmqf');
const { createTransport } = require('nodemailer');

const con = require('./controllers/controller');
const authCon = require('./controllers/authController');

app.use(bodyParser.json());
app.use(bodyParser.text());

//Database connection
massive(process.env.CONNECTION_STRING)
   .then(dbInstance => {
      app.set('db', dbInstance);
      console.log('db connected');
   })
   .catch(err => console.log(err));

//Before using gmail you must allow less secure apps access to the account aka don't use your primary gmail
let transporter = createTransport({
   service: 'gmail',
   auth: {
      user: 'stickly082@gmail.com', //gmail username
      pass: '746655643082Leed' //gmail password
   }
});

//POST handles stripe payment and nodemailer info to client
app.post('/charge', async (req, res) => {
   console.log(req.body);
   try {
      let { status } = await stripe.charges.create({
         amount: 50000,
         currency: 'usd',
         source: req.body
      });
      let message = {
         from: 'stickly082@gmail.com',
         to: 'csleedylan@gmail.com',
         subject: 'Test Message',
         html: '<p>Hello there fellow human</p>'
      };
      transporter.sendMail(message);
      res.json({ status });
   } catch (err) {
      console.log(err);
      res.status(500).end();
   }
});

//Auth endpoints
app.post('/auth/register', authCon.register);
app.post('/auth/login', authCon.login);

//Hotel and room endpoints
app.post('/api/hotel', con.get_hotel_list);
app.get('/api/roomlist/:id', con.get_room_list);

//Reservation endpoints
app.get('/api/reservation', con.get_reservation_list);
app.post('/api/reservation', con.create_reservation);

//Transaction endpoints
app.post('/api/transaction', con.new_transaction);

//User endpoints

app.listen(process.env.EXPRESS_PORT, () => {
   console.log(`Server - Listening on ${process.env.EXPRESS_PORT}`);
});
