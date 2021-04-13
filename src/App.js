import { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import NotFound from './Views/NotFound';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
