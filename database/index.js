// require driver for mysql
const mysql = require('mysql');

// create connection to db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie_list'
})

// connect to db
connection.connect((err) => {
  if (err) {
    return console.log('error', err);
  } else {
    console.log('Connected to DB!');
  }
});

// export connection
module.exports = connection;

// connect db
// npm mysql docs describe everything
// build a schema
// run schema
// create functions to interact w/ db

