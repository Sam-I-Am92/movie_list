const db = require('../../database/dbMethods.js');
// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

module.exports = {
  getAll: (req, res) => {
    db.getMovies(req, res);
  }
};