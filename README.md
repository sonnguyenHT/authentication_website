# authentication_website

## Installation

1. Install Node.js from https://nodejs.org/en/download
2. Clone the repository or download the source code from https://github.com/example/authentication_website
3. Open a terminal or command prompt and navigate to the project directory
4. Run the following command to install the project dependencies:
npm install express mysql

## Database Setup

1. Open a MySQL client (such as the MySQL command-line client or MySQL Workbench)
2. Create a new database called `authentication`:
CREATE DATABASE authentication;
3. Use the new `authentication` database:
USE authentication;
4. Create a new table called `main` with two columns, `username` and `password`:
CREATE TABLE main (
username VARCHAR(255),
password VARCHAR(255)
);
5. Insert some sample data into the `main` table:
INSERT INTO main (username, password) VALUES
('bard', '13245'),
('alice', 'password123'),
('bob', 'qwerty456');

## Running the Server

1. Open a terminal or command prompt and navigate to the project directory
2. Run the following command to start the server:
node server.js
3. Open a web browser and navigate to `http://localhost:8000`
4. Enter a valid username and password from the `main` table in the database and click "Login"
5. If the username and password are valid, a success message will be displayed. If the username and password are invalid, an error message will be displayed.
