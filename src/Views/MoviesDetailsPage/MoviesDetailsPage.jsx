import {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import MovieDescription from '../../Components/MovieDescription'
import Cast from '../../Components/Cast'
import Reviews from '../../Components/Reviews'
import {fetchMovieDetails} from '../../Services/ApiService'


class MoviesDetailsPage extends Component{

   state = {
      movies: []
    }

    componentDidMount(){
      const {moviesId} = this.props.match.params
        fetchMovieDetails(moviesId).then(movies => this.setState({movies}))
        .catch(error => console.log(error))
    }

    render() {
      const {moviesId} = this.props.match.params
      const {movies} = this.state;
      const {match} = this.props
      const { path } = this.props.match;
          
      return(<>

          <MovieDescription movies={movies}/>
             
           <ul>
               <li> <Link to={`${match.url}/cast`}> Cast </Link></li>
               <li> <Link to={`${match.url}/reviews`}> Rewiews </Link></li>
            </ul>

          <Route
            path={`${path}/cast`}
            render={props => (<Cast {...props} movieId={moviesId}/>)}
        />

          <Route
            path={`${path}/reviews`}
            render={props => (<Reviews {...props} movieId={moviesId}/>)}
        />
           
            </>)
        }


}

export default MoviesDetailsPage;