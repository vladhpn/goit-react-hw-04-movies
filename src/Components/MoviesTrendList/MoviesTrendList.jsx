import { Link } from 'react-router-dom';
import {imageUrl} from '../../Services/ApiService';
import image from '../../images/no-image.jpeg'


const MoviesTrendList = ({movies}) => {
    return( <div>{movies.length > 0 &&   
        <ul>{movies.map(({title, id, poster_path}) => <li key={id}>
            <Link to={`/movies/${id}`}>
            <h3>{title}</h3>
            {poster_path ? (<img
            src={imageUrl + poster_path}
            className="ImageGalleryItem-image"
            alt={title}
          />) : (<img src={image}
          alt='' />)}
            
            </Link>
     </li>)}</ul>}</div> )
}

export default MoviesTrendList;