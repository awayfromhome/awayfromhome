SET timezone = 'America/Chicago';
INSERT INTO reservation (date, room_id)
VALUES ($1, $2);