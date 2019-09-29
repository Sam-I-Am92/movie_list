import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import movies from './dummyData.js';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

ReactDOM.render(<App time={Date.now()}/>, document.getElementById('app'));

/*
this.props = {
  data: movies
}

movies = array of movies
*/