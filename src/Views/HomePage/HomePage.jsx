import { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchPopularMovies, imageUrl} from '../../Services/ApiService'
import image from '../../images/no-image.jpeg'

class HomePage extends Component{

    state = {
        movies: []
    }

    componentDidMount(){
        fetchPopularMovies().then(movies => this.setState({movies}))
        .catch(error => console.log(error))
    }

    render(){
        const { movies } = this.state;
       
        return(
            <>
            <h1>Trending Today</h1>
          {movies.length > 0 &&   
            <ul>{movies.map(({title, id, poster_path}) => <li key={id}><Link to={`/movies/${id}`}>
                <h3>{title}</h3>
                {poster_path ? (<img
                src={imageUrl + poster_path}
                className="ImageGalleryItem-image"
                alt={title}
              />) : (<img src={image}
              alt='' />)}
                
                </Link>
         </li>)}</ul>}
            </>
        )
    }
}

export default HomePage;