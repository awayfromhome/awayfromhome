INSERT INTO users (username, hash, email, number) 
VALUES ($1, $2, $3, $4)
returning *;