import { imageUrl} from '../../Services/ApiService'
import styles from './styles.module.scss'
const MovieDescription = ({movies}) => {
    return(<>
    <div className={styles.container}>
        <div className={styles.container_img}>
        <img
              src={imageUrl+ movies.poster_path}
              className="ImageGalleryItem-image"
              alt={movies.title}
              />
              </div>
            <div>
            <h2>{movies.title} {movies.release_date}</h2>
            <p>Rating: {movies.vote_average}</p>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            <h3>Genres</h3>
            {movies.genres
                ? movies.genres
                    .map(genre => genre.name )
                    .join(' ')
                : null}
            </div>
            </div>
    </>)
}

export default MovieDescription;