INSERT INTO users (username, hash, email, number, owner) 
VALUES ($1, $2, $3, $4, $5)
returning *;