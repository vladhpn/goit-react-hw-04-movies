import { Component } from 'react';
import axios from 'axios';
import SearchForm from '../../Components/SearchForm'



class MoviesPage extends Component{

    state = {
        movies: [],
    }
    
    componentDidMount(){
        const apiKey = '98e87da0e762537a8cb63c18dd13caee';
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=batman`)
        .then(response => this.setState({movies:response.data.results}))
    }
    fetchMovies = () => {
       
    }

    onChangeQuery = query => {
       
    }
    render(){

        const {movies} = this.state;

        return(<>
         <h1>Movies search</h1>
    
        <SearchForm  onSubmit={this.onChangeQuery}/>

      <div>
          <ul>{movies.map(({original_title, id}) => <li key={id}> <span>{original_title}</span>
         
           </li>)}</ul>
      </div>
         </>
           
        )
    }
}

{/* <img src={result.poster_path} /> */}

export default MoviesPage;