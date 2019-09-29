import React from 'react';
import List from './List.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.getMovies = this.getMovies.bind(this);
  }


getMovies() {
  Axios.get('/movies')
    .then((movies) => {
      console.log('Axios ', movies);
      this.setState({
        movies: movies.data // .data b/c from response object
      })
    });
};

componentDidMount() {
  this.getMovies();
}


/*
- render function
  - multitple line return statement requires parens

- only HTML or text allowed to be rendered onto page
*/

  render() {
    return (
      <div>
        <h1>{this.props.time}</h1>
        <div>
          {/* {this.props.data.map(movie => <li>{movie.title}</li>)} */}
          <List movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}



export default App;