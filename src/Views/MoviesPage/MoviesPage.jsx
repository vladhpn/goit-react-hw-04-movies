import { Component } from 'react';
import SearchForm from '../../Components/SearchForm'
import {fetchByQuery} from '../../Services/ApiService'
import MoviesTrendList from '../../Components/MoviesTrendList'
import styles from './styles.module.scss'


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
        return(<>
        <div className={styles.container}>
        <SearchForm  onSubmit={this.onChangeQuery}/>

        <MoviesTrendList movies={movies}/>
        </div>
         </>
        )
    }
}

export default MoviesPage;