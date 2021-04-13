import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
      </>
    );
  }
}

export default App;
