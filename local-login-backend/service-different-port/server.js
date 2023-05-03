const http = require('http');
const fs = require('fs');
const app = require('./app');

// Create a server instance
const server = http.createServer((req, res) => {
	// Serve the index.html file
	if (req.url === '/') {
		fs.readFile('./index.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else {
		res.writeHead(404);
		res.end();
	}
});

// Start the server
server.listen(8000, () => {
	console.log('Server running on port 8000');
});
