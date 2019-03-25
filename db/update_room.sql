UPDATE room 
SET number_of_rooms = $1,
    name = $2,
    room_type = $3,
    description = $4,
    price = $5,
    hotel_id = $6
WHERE room_id = $7