import {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Cast from '../../Components/Cast'
import Reviews from '../../Components/Reviews'
import {fetchMovieDetails, imageUrl} from '../../Services/ApiService'


class MoviesDetailsPage extends Component{

        state = {
            movies: []
        }

        componentDidMount(){
            const {moviesId} = this.props.match.params

            fetchMovieDetails(moviesId).then(movies => this.setState({movies})).catch(error => console.log(error))
        }

        render() {
             const {moviesId} = this.props.match.params
            const {movies} = this.state;
            const {match} = this.props
            const { path } = this.props.match;
          

            return(<>

                <img
                src={imageUrl+ movies.poster_path}
                className="ImageGalleryItem-image"
                alt={movies.title}
              />

            <h2>{movies.title} {movies.release_date}</h2>
            <p>Rating: {movies.vote_average}</p>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            <h3>Genres добавить</h3>
            {/* {movies.genres.map(({id, name}) => (<span key={id}>{name}</span>))}  */}

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