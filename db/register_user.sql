INSERT INTO users (username, hash, email, number, role) 
VALUES ($1, $2, $3, $4, $5)
returning *;