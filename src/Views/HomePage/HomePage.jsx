import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomePage extends Component{

    state = {
        movies: []
    }

    componentDidMount(){
        const apiKey = '98e87da0e762537a8cb63c18dd13caee';
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(response => this.setState({movies:response.data.results}))
    }

    render(){
        const { movies } = this.state;
       
        return(
            <>
            <h1>Trending Today</h1>
          {movies.length > 0 &&   
            <ul>{movies.map(({title, id}) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link>
         </li>)}</ul>}
            </>
        )
    }
}

export default HomePage;