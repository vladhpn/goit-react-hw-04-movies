import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';
import MoviesDetailsPage from './Views/MoviesDetailsPage';
import NotFound from './Views/NotFound';
import AppBar from './Components/AppBar';
import routes from './routes';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
