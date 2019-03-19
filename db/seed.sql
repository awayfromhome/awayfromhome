DROP TABLE reservation;
DROP TABLE room_type;
DROP TABLE hotel; 
DROP TABLE transactions;

CREATE TABLE hotel (
	hotel_id SERIAL PRIMARY KEY,
	name VARCHAR(64),
	address VARCHAR(128),
  url VARCHAR(2048),
  reservation_num VARCHAR(20),
  front_desk_num VARCHAR(20),
  amenities TEXT []
);

CREATE TABLE room_type (
	room_id SERIAL PRIMARY KEY,
	number_of_rooms INTEGER,
	name VARCHAR(64),
	hotel_id INTEGER REFERENCES hotel(hotel_id)
);

CREATE TABLE reservation (
	reservation_id SERIAL PRIMARY KEY,
	date TIMESTAMPTZ,
	room_id INTEGER REFERENCES room_type(room_id)
);

CREATE TABLE transactions (
  transaction_id SERIAL PRIMARY KEY,
  price INTEGER, 
  reservation_length INTEGER
);

INSERT INTO hotel (name, address, url, reservation_num, front_desk_num, amenities)
VALUES ('Holiday Inn', '100 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Wireless Internet', 'Buisness Center', 'Airport Shuttle', 'Area Shuttle']),
('Hotel 1', '200 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Wireless Internet', 'Buisness Center', 'Health/Fitness Center', 'Free Breakfast']),
('Hotel 2', '300 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Wireless Internet', 'Kids Eat Free', 'Buisness Center', 'Area Shuttle']),
('Hotel 3', '400 Street Dr', 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png', '5127798567', '4577899856', ARRAY ['Health/Fitness Center', 'Buisness Center', 'Airport Shuttle', 'Area Shuttle']);

INSERT INTO room_type (number_of_rooms, name, hotel_id)
VALUES (5, 'Standard', 1),
    (5, 'Standard', 2),
    (5, 'Standard', 3),
    (5, 'Standard', 4),
    (5, 'Deluxe', 1),
    (5, 'Deluxe', 2),
    (5, 'Deluxe', 3),
    (5, 'Deluxe', 4);



