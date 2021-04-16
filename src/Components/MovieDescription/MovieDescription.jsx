import { imageUrl} from '../../Services/ApiService'
const MovieDescription = ({movies}) => {
    return(<>
        <img
              src={imageUrl+ movies.poster_path}
              className="ImageGalleryItem-image"
              alt={movies.title}
              />

            <h2>{movies.title} {movies.release_date}</h2>
            <p>Rating: {movies.vote_average}</p>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            <h3>Genres добавить</h3>
            {/* {movies.genres.map(({id, name}) => <span key={id}>{name}</span>)}  */}
    </>)
}

export default MovieDescription;