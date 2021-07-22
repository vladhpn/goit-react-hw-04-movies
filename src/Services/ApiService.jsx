import axios from 'axios'
const apiKey = '98e87da0e762537a8cb63c18dd13caee';
const imageUrl = 'https://image.tmdb.org/t/p/w300'

const fetchPopularMovies = () => {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(response => response.data.results)
}

const fetchByQuery = (query) =>{ 
   return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(response => response.data.results)
}

const fetchMovieDetails =(moviesId) => {
       return axios.get(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${apiKey}`)
        .then(response => response.data)
}

const fetchMovieReviews = (movieId) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`)
        .then(response => response.data.results)
}

const fetchMovieCast = (movieId) => {
        return   axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
        .then(response => response.data.cast)
}

const fetchMovieTrailer = (movieId) => {
        return   axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
        .then(response => response.data.results)
}

export  { fetchPopularMovies, fetchByQuery, fetchMovieDetails, fetchMovieReviews, fetchMovieCast, imageUrl, fetchMovieTrailer};