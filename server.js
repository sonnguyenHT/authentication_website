// const http = require('http');
// const fs = require('fs');
// const app = require('./app');

// // Create a server instance
// const server = http.createServer((req, res) => {
// 	// Serve the index.html file
// 	if (req.url === '/') {
// 		fs.readFile('./index.html', (err, data) => {
// 			if (err) throw err;
// 			res.writeHead(200, { 'Content-Type': 'text/html' });
// 			res.write(data);
// 			res.end();
// 		});
// 	} else {
// 		res.writeHead(404);
// 		res.end();
// 	}
// });

// // Start the server
// server.listen(8000, () => {
// 	console.log('Server running on port 8000');
// });

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 8000;

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

// Serve the index.html file
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Handle POST requests to the '/login' endpoint
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
