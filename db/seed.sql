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
  role VARCHAR (30),
  address VARCHAR(128),
  city VARCHAR(50),
  postalcode INTEGER,
  country VARCHAR(200),
  name VARCHAR(100)
);

CREATE TABLE hotel (
	hotel_id SERIAL PRIMARY KEY,
	address VARCHAR(50),
	city VARCHAR(50),
	postalcode VARCHAR(50),
	country VARCHAR(50),
	hotel_name VARCHAR(50),
	reservation_num VARCHAR(50),
	front_desk_num VARCHAR(50),
	points INT,
	url VARCHAR(100),
	amenities VARCHAR(150),
  owner_id INTEGER REFERENCES users(users_id)
);

CREATE TABLE room (
	room_id SERIAL PRIMARY KEY,
 number_of_rooms INT,
	room_name VARCHAR(20),
	room_type VARCHAR(8),
	url VARCHAR(150),
	price INT,
  description TEXT,
	hotel_id INTEGER REFERENCES hotel(hotel_id)
);

CREATE TABLE reservation (
	reservation_id SERIAL PRIMARY KEY,
	date TIMESTAMPTZ,
	room_id INTEGER REFERENCES room(room_id),
  user_id INTEGER
);

CREATE TABLE transactions (
  transaction_id SERIAL PRIMARY KEY,
  price INTEGER, 
  reservation_length INTEGER
);

insert into hotel (address, city, postalcode, country, hotel_name, reservation_num, front_desk_num, points, url, owner_id, amenities) values ('81662 Hansons Road', 'Naples', '34108', 'United States', 'Corkery, Legros and Hegmann', '9413053484', '3196608463', 654, 'https://s3.us-east-2.amazonaws.com/awayfromhome/where_to_stay_60cae857-eb03-42.jpg', null, '[{"one":"Pool","two":"Health/Fitness Center","three":"Health/Fitness Center","four":"Valet Service"}]');
insert into hotel (address, city, postalcode, country, hotel_name, reservation_num, front_desk_num, points, url, owner_id, amenities) values ('0 Vidon Plaza', 'Jamaica', '11480', 'United States', 'Wisozk, Farrell and Boehm', '2128149106', '8047247012', 828, 'https://s3.us-east-2.amazonaws.com/awayfromhome/even-hotels-eugene-5405616297-.jpg', null, '[{"one":"Valet Service","two":"Kitchens","three":"Airport Shuttle","four":"Wireless Internet"}]');
insert into hotel (address, city, postalcode, country, hotel_name, reservation_num, front_desk_num, points, url, owner_id, amenities) values ('31 Quincy Place', 'Washington', '20067', 'United States', 'Howell-Batz', '2023635966', '6786979607', 891, 'https://s3.us-east-2.amazonaws.com/awayfromhome/533807_3978162951454_853339659.jpg', null, '[{"one":"Spa","two":"Pool","three":"Business Center","four":"Spa"}]');
insert into hotel (address, city, postalcode, country, hotel_name, reservation_num, front_desk_num, points, url, owner_id, amenities) values ('88 Hanover Street', 'Miami', '33147', 'United States', 'Klein, Schultz and White', '7865368975', '4029288190', 739, 'https://s3.us-east-2.amazonaws.com/awayfromhome/run-down-house1+(1).jpg', null, '[{"one":"Kitchens","two":"Business Center","three":"Kids Eat Free","four":"Health/Fitness Center"}]');
insert into hotel (address, city, postalcode, country, hotel_name, reservation_num, front_desk_num, points, url, owner_id, amenities) values ('1240 Lakeland Avenue', 'Valdosta', '31605', 'United States', 'Windler Group', '2298152013', '2098049551', 756, 'https://s3.us-east-2.amazonaws.com/awayfromhome/swimming-pool+(1).jpg', null, '[{"one":"Business Center","two":"Health/Fitness Center","three":"Spa","four":"Kitchens"}]');
insert into hotel (address, city, postalcode, country, hotel_name, reservation_num, front_desk_num, points, url, owner_id, amenities) values ('52350 Harbort Point', 'Tucson', '85743', 'United States', 'Hickle Group', '5205916275', '6024785279', 903, 'https://s3.us-east-2.amazonaws.com/awayfromhome/top10-luxury-hotels-in-bangkok.jpg', null, '[{"one":"Kids Eat Free","two":"Pool","three":"Valet Service","four":"Continental Breakfast"}]');

insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (6, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 305, null, 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (8, '2 queen room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 263, null, 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (9, '2 queen room', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 430, null, 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (10, '2 queen room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 376, null, 'Pellentesque ultrices mattis odio. Donec vitae nisi.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (9, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 284, null, 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 233, null, 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (7, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 480, null, 'Nulla mollis molestie lorem. Quisque ut erat.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (10, '2 queen 1 king suite', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 237, null, 'Duis bibendum. Morbi non quam nec dui luctus rutrum.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '1 king room', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 234, null, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (10, '2 queen 1 king suite', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 370, null, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 127, null, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 106, null, 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (8, '1 king room', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 340, null, 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (8, '2 queen 1 king suite', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 384, null, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (9, '2 queen room', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 187, null, 'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen 1 king suite', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 305, null, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (9, '1 king room', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 131, null, 'Proin at turpis a pede posuere nonummy. Integer non velit.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '1 king room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 204, null, 'Vivamus tortor. Duis mattis egestas metus.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (10, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 409, null, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (7, '2 queen room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 395, null, 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (10, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 467, null, 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen 1 king suite', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 133, null, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen 1 king suite', 'standard', 'https://s3.us-east-2.amazonaws.com/awayfromhome/7312_16021610210039879076+(1).jpg', 109, null, 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.');
insert into room (number_of_rooms, room_name, room_type, url, price, hotel_id, description) values (5, '2 queen room', 'deluxe', 'https://s3.us-east-2.amazonaws.com/awayfromhome/deluxe-king.jpg', 122, null, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.');

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








