// import connection
// npm mysql docs describe everything

const db = require('./index.js');

// export the functions to execute queries
module.exports = {
  getMovies: (req, res) => {
    
    const queryString = `SELECT * FROM movies`;
    
    db.query(queryString, (err, data) => {
      if (err) {
        console.log('QUERY ERROR!');
        res.status(500).send(err);
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}