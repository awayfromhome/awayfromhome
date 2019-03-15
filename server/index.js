require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { json } = require('body-parser');
const controller = require('./controllers/controller');

app.use(json());

//Database connection
massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set('db', dbInstance);
		console.log('db connected');
	})
	.catch(err => console.log(err));

//Hotel and toom endpoints
app.get('/api/hotel', controller.get_hotel);
app.get('/api/roomlist', controller.get_room);

//Reservation endpoints
app.get('/api/reservation', controller.get_reservation);

//Transaction endpoints
app.post('./api/transaction', controller.new_transaction);
//User endpoints

app.listen(process.env.EXPRESS_PORT, () => {
	console.log(`Server - Listening on ${process.env.EXPRESS_PORT}`);
});
