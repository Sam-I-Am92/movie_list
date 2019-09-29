import React from 'react';
import Movie from './Movie.jsx';

// console log above return statement
// w/in return may cause invariant error

var List = (props) => {
  // const movies = props.data;
  return (
    <ul>
      {props.movies.map(movie => <Movie movie={movie} />)}
    </ul>
  )
}

export default List;