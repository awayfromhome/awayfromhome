-- SET timezone = 'America/Chicago';
-- SELECT * FROM reservation WHERE room_id = $1

SELECT reservation.reservation_id, reservation.date, reservation.room_id
FROM reservation
JOIN room ON reservation.room_id = room.room_id 
WHERE reservation.date >= $2 AND reservation.date <= $3 AND room.room_id = ANY ($1)