import { imageUrl} from '../../Services/ApiService'
import defaultImage from '../../images/no-image.jpeg';
import styles from './styles.module.scss'



const MovieDescription = ({movies}) => {
    return(<>
    <div className={styles.container}>
        <div className={styles.container_img}>

            {movies.poster_path ? (<img
              src={imageUrl+ movies.poster_path}
              className="ImageGalleryItem-image"
              alt={movies.title}
              />) : (<img src={defaultImage}
                  className={styles.img} alt='' />)}
              </div>
            <div>
            <h2>{movies.title}</h2>
            <h3>Rating</h3>
            <p>⭐️ {movies.vote_average}</p>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            <h3>Genres</h3><p className={styles.genres}>
            {movies.genres
                ? movies.genres
                    .map(genre => genre.name )
                    .join(' ')
                : null}
            </p>
            </div>
            </div>
    </>)
}

export default MovieDescription;