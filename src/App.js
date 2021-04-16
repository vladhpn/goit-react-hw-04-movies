import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './Components/AppBar';
import routes from './routes';
import Loader from 'react-loader-spinner';
import 'modern-normalize/modern-normalize.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MoviesDetailsPage = lazy(() =>
  import(
    './Views/MoviesDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);
const NotFound = lazy(() =>
  import('./Views/NotFound' /* webpackChunkName: "not-found-page" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense
      fallback={<Loader type="Puff" color="#00BFFF" height={80} width={80} />}
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
