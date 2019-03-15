require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { json } = require('body-parser');
const con = require('./controllers/controller');

app.use(json());

//Database connection
massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set('db', dbInstance);
		console.log('db connected');
	})
	.catch(err => console.log(err));

//Hotel and room endpoints
app.get('/api/hotel', con.get_hotel_list);
app.get('/api/roomlist', con.get_room_list);

//Reservation endpoints
app.get('/api/reservation', con.get_reservation_list);

//Transaction endpoints
app.post('./api/transaction', con.new_transaction);

//User endpoints

app.listen(process.env.EXPRESS_PORT, () => {
	console.log(`Server - Listening on ${process.env.EXPRESS_PORT}`);
});
