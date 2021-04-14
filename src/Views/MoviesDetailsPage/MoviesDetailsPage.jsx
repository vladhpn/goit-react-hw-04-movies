import {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import Cast from '../../Components/Cast'
import Reviews from '../../Components/Reviews'
import axios from 'axios';

class MoviesDetailsPage extends Component{

        state = {
            movies: []
        }

        componentDidMount(){
            const {moviesId} = this.props.match.params
            const apiKey = '98e87da0e762537a8cb63c18dd13caee';
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${apiKey}`)
            .then(response => this.setState({movies: response.data}))
        }

        render() {
             const {moviesId} = this.props.match.params
            const {movies} = this.state;
            const {match} = this.props
            const { url, path } = this.props.match;

            return(<>
            <h2>{movies.title} {movies.release_date}</h2>
            <p>Rating: {movies.vote_average}</p>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            <h3>Genres добавить</h3>
           {/* {movies.genres.map(({id}) => (<span key={id}>{id}</span>))} */}

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