const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configure the MySQL database connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'username',
	password: 'password',
	database: 'authentication'
});

// Connect to the database
db.connect((err) => {
	if (err) throw err;
	console.log('Connected to database!');
});

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST requests to the '/login' endpoint
// app.post('/login', (req, res) => {
// 	const { username, password } = req.body;
// 	const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
// 	db.query(sql, [username, password], (err, result) => {
// 		if (err) throw err;
// 		if (result.length > 0) {
// 			res.send('Login successful!');
// 		} else {
// 			res.send('Invalid username or password');
// 		}
// 	});
// });

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const sql = `SELECT * FROM main WHERE username = ? AND password = ?`;
	db.query(sql, [username, password], (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.send(`<h1>Login successful!</h1><p>Welcome, ${username}!</p>`);
		} else {
			res.send('<h1>Invalid username or password</h1>');
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
