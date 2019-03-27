SELECT COUNT(re.date), to_char(re.date,'mm/dd/yyyy') as date, ro.price, ro.room_name, h.hotel_name, h.points
FROM reservation re
JOIN room ro ON re.room_id = ro.room_id
JOIN hotel h ON ro.hotel_id = h.hotel_id
WHERE re.user_id = $1
GROUP BY re.date, ro.price, ro.room_name, h.hotel_name, h.points
