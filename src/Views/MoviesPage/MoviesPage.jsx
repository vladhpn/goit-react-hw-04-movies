import { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm'
import {fetchByQuery} from '../../Services/ApiService'
import MoviesPageList from '../../Components/MoviesPageList';


class MoviesPage extends Component{

    state = {
        movies: [],
    }

    onChangeQuery = query => {
        fetchByQuery(query).then(movies => this.setState({movies}))
        .catch(error => console.log(error))
    }
    render(){
        const {movies} = this.state;
        // const { url } = this.props.match;
        return(<>
        <SearchForm  onSubmit={this.onChangeQuery}/>
        <MoviesPageList movies={movies}/>
         </>
        )
    }
}

export default MoviesPage;