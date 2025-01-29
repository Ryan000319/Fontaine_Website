const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');

    // Create database if it doesn't exist
    db.query("CREATE DATABASE IF NOT EXISTS genshin_impact", (err, result) => {
        if (err) throw err;
        console.log("Database created or already exists.");
        
        // Use the newly created database
        db.changeUser({database : 'genshin_impact'}, function(err) {
            if (err) throw err;
            
            // Create table if it doesn't exist
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS inquiries (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    lastName VARCHAR(255) NOT NULL,
                    username VARCHAR(255) NOT NULL,
                    phoneNumber VARCHAR(255),
                    email VARCHAR(255) NOT NULL,
                    streetAddress VARCHAR(255),
                    city VARCHAR(255),
                    subject VARCHAR(255) NOT NULL,
                    category VARCHAR(255) NOT NULL,
                    enquiry TEXT NOT NULL
                );`;
                
            db.query(createTableQuery, (err, result) => {
                if (err) throw err;
                console.log("Table 'inquiries' created or already exists.");
            });
        });
    });
});

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, lastName, username, phoneNumber, email, streetAddress, city, subject, category, enquiry } = req.body;
    const sql = 'INSERT INTO inquiries (name, lastName, username, phoneNumber, email, streetAddress, city, subject, category, enquiry) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, lastName, username, phoneNumber, email, streetAddress, city, subject, category, enquiry], (err, result) => {
        if (err) {
            console.error('Failed to insert data:', err);
            res.status(500).json({ error: 'Failed to insert data into database' });
            return;
        }
        res.json({ message: 'Inquiry submitted successfully' });
    });
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
