DROP TABLE reservation;
DROP TABLE room;
DROP TABLE hotel; 
DROP TABLE transactions;
DROP TABLE users; 

SET timezone = 'America/Chicago';

CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(64),
  hash VARCHAR(75),
  email VARCHAR(100),
  number VARCHAR(15),
  owner BOOLEAN,
  address VARCHAR(128),
  city VARCHAR(50),
  postalcode INTEGER,
  country VARCHAR(200),
  name VARCHAR(100)
);

CREATE TABLE hotel (
	hotel_id SERIAL PRIMARY KEY,
	name VARCHAR(64),
	address VARCHAR(128),
  url VARCHAR(2048),
  reservation_num VARCHAR(20),
  front_desk_num VARCHAR(20),
  amenities TEXT [],
  owner_id INTEGER
);

CREATE TABLE room (
	room_id SERIAL PRIMARY KEY,
	number_of_rooms INTEGER,
	name VARCHAR(64),
  room_type VARCHAR(25),
  description VARCHAR(512),
	hotel_id INTEGER REFERENCES hotel(hotel_id)
);

CREATE TABLE reservation (
	reservation_id SERIAL PRIMARY KEY,
	date TIMESTAMPTZ,
	room_id INTEGER REFERENCES room(room_id)
);

CREATE TABLE transactions (
  transaction_id SERIAL PRIMARY KEY,
  price INTEGER, 
  reservation_length INTEGER
);

INSERT INTO hotel (owner_id, name, address, url, reservation_num, front_desk_num, amenities)
VALUES (1, 'Holiday Inn', '100 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Wireless Internet', 'Buisness Center', 'Airport Shuttle', 'Area Shuttle']),
(1, 'Hotel 1', '200 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Wireless Internet', 'Buisness Center', 'Health/Fitness Center', 'Free Breakfast']),
(2, 'Hotel 2', '300 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Wireless Internet', 'Kids Eat Free', 'Buisness Center', 'Area Shuttle']),
(3, 'Hotel 3', '400 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Health/Fitness Center', 'Buisness Center', 'Airport Shuttle', 'Area Shuttle']);

INSERT INTO room (number_of_rooms, name, room_type, description, hotel_id)
VALUES (5, '2 Queen Beds', 'Standard', 'This is an absolutely amazing room, 2 queens stayed in this very room 200 years ago.', 1),
    (5, '1 King bed', 'Standard', 'What a terrible room, I heard the mad king stayed here and there is wildfire hidden beneath', 2),
    (5, '2 Queen Beds', 'Standard', 'This is an absolutely amazing room, 2 queens stayed in this very room 200 years ago.', 3),
    (5, '1 King bed','Standard', 'What a terrible room, I heard the mad king stayed here and there is wildfire hidden beneath', 4),
    (5, '2 Queen Beds', 'Deluxe', 'This is an absolutely amazing room, 2 queens stayed in this very room 200 years ago.', 1),
    (5, '1 King bed', 'Deluxe', 'What a terrible room, I heard the mad king stayed here and there is wildfire hidden beneath', 2),
    (5, '2 Queen Beds', 'Deluxe', 'This is an absolutely amazing room, 2 queens stayed in this very room 200 years ago.', 3),
    (5, '1 King bed','Deluxe', 'What a terrible room, I heard the mad king stayed here and there is wildfire hidden beneath', 4);

INSERT INTO reservation (date, room_id)
VALUES('2019-08-04', 1),
    ('2019-08-05', 1),
    ('2019-08-06', 1),
    ('2018-03-15', 1),
    ('2018-03-16', 1),
    ('2018-03-17', 1),
    ('2019-08-04', 2),
    ('2019-08-05', 2),
    ('2019-08-06', 2),
    ('2019-08-05', 2),
    ('2019-08-06', 2),
    ('2019-08-06', 2),
    ('2019-08-07', 2),
    ('2019-08-06', 2);








