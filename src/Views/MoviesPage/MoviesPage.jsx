import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm'
import {fetchByQuery, imageUrl} from '../../Services/ApiService'



class MoviesPage extends Component{

    state = {
        movies: [],
    }


    onChangeQuery = query => {

        fetchByQuery(query).then(movies => this.setState({movies})).catch(error => console.log(error))

    }
    render(){

        const {movies} = this.state;
        // const { url } = this.props.match;

        return(<>
         <h1>Movies search</h1>
    
        <SearchForm  onSubmit={this.onChangeQuery}/>

      <div>
          <ul>{movies.map(({original_title, id, poster_path, title}) => <li key={id}>  
              <Link to={`/movies/${id}`}><h3>{original_title}</h3>
              <img
                src={imageUrl + poster_path}
                className="ImageGalleryItem-image"
                alt={title}
              /></Link>
         
           </li>)}</ul>
      </div>
         </>
           
        )
    }
}



export default MoviesPage;