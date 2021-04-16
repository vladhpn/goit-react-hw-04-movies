import {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import MovieDescription from '../../Components/MovieDescription'
import Cast from '../../Components/Cast'
import Reviews from '../../Components/Reviews'
import {fetchMovieDetails} from '../../Services/ApiService'
import routes from '../../routes'
import styles from './styles.module.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class MoviesDetailsPage extends Component{

   state = {
      movies: []
    }

    componentDidMount(){
      const {moviesId} = this.props.match.params
        fetchMovieDetails(moviesId).then(movies => this.setState({movies}))
        .catch(error => console.log(error))
    }

    handleGoBack = () => {
      const {location, history} = this.props

      if(location.state && location.state.from){
        return history.push(location.state.from)
      }
      return history.push(routes.movies)
      
    }

    render() {
      const {moviesId} = this.props.match.params
      const {movies} = this.state;
      const {match} = this.props
      const { path } = this.props.match;
    
      return(<>
            <div className={styles.container}> 
          
         
            <ArrowBackIcon onClick={this.handleGoBack} /> 

          <MovieDescription movies={movies}/>
             
    
                <Link to={`${match.url}/cast`} className={styles.link}> Cast </Link>
                <Link to={`${match.url}/reviews`} className={styles.link}> Rewiews </Link>
           

          <Route
            path={`${path}/cast`}
            render={props => (<Cast {...props} movieId={moviesId}/>)}
        />

          <Route
            path={`${path}/reviews`}
            render={props => (<Reviews {...props} movieId={moviesId}/>)}
        />
           </div>
            </>)
        }


}

export default MoviesDetailsPage;