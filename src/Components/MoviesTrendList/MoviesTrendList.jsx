import { Link, withRouter } from 'react-router-dom';
import {imageUrl} from '../../Services/ApiService';
import image from '../../images/no-image.jpeg'
import styles from './styles.module.scss';


const MoviesTrendList = ({movies, location}) => {
    return( <div className={styles.container}> 
      
      {movies.length > 0 &&   
        <ul className={styles.list}>{movies.map(({title, id, poster_path}) => <li key={id} className={styles.item}>
            <Link className={styles.link} to={{
              pathname:`/movies/${id}`,
              state: {
                from: location,
              }
          }}>
            
            {poster_path ? (<img
            src={imageUrl + poster_path}
            className="ImageGalleryItem-image"
            alt={title}
          />) : (<img src={image}
          alt='' />)}
            <h3 className={styles.movie_title}>{title}</h3>
            </Link>
     </li>)}</ul>}</div> )
}

export default withRouter(MoviesTrendList);