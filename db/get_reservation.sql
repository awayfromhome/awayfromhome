-- SET timezone = 'America/Chicago';
-- SELECT * FROM reservation WHERE room_id = $1

SELECT reservation.reservation_id, reservation.date, reservation.room_id
FROM reservation
JOIN room_type ON reservation.room_id = room_type.room_id 
WHERE reservation.date >= $2 AND reservation.date <= $3 AND room_type.room_id IN ($1);