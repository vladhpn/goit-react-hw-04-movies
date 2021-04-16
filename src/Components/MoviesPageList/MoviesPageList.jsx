import { Link } from 'react-router-dom';
import {imageUrl} from '../../Services/ApiService';

const MoviesPageList = ({movies}) =>{
    return(<div>
        <ul>{movies.map(({original_title, id, poster_path, title}) => <li key={id}>  
            <Link to={`/movies/${id}`}><h3>{original_title}</h3>
            <img
              src={imageUrl + poster_path}
              className="ImageGalleryItem-image"
              alt={title}
            /></Link>
       
         </li>)}</ul>
    </div>)
}

export default MoviesPageList;