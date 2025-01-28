const sqlite3 = require('sqlite3').verbose();

// Create and open a database
let db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the mydatabase.db SQlite database.');
});

// Create a new table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
)`, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Created users table.');
});

// Insert a new user
db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['John Doe', 'john.doe@example.com'], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// Query the users table
db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});
