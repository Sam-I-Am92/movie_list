// import express framework
const express = require('express');
const path = require('path');
const controller = require('./controller/controller.js');
// const movies = require('..client/src/dummyData.js');

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

const PORT = 3000;

// create server
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', controller.getAll);

// start server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})