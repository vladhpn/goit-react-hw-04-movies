import { Component } from 'react';
import {fetchPopularMovies} from '../../Services/ApiService'
import MoviesTrendList from '../../Components/MoviesTrendList'

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
            <MoviesTrendList movies={movies}/>
            </>
        )
    }
}

export default HomePage;