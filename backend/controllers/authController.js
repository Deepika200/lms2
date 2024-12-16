const db = require('../models/db');
const bcrypt = require('bcryptjs');

const signup = (req, res) => {
    const { username, email, password } = req.body;
    console.log('Request body:', req.body);  // Log the request body

    // Hash password before storing in the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: 'Error hashing password' });
        }

        // SQL query to insert a new user
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error creating user' });
            }

            res.status(201).json({
                message: 'User registered successfully',
                userId: result.insertId
            });
        });
    });
};


const login = (req, res) => {
    const { username, password } = req.body;
    console.log('Request body:', req.body); // Log the request body

    // Query to find user by username
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching user' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare hashed password with the stored password
        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: 'Error comparing password' });
            }
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Successfully logged in
            res.status(200).json({
                message: 'Login successful',
                userId: result[0].id,
                username: result[0].username
            });
        });
    });
};
module.exports = { signup, login };
