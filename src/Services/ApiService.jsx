import axios from 'axios'
const apiKey = '98e87da0e762537a8cb63c18dd13caee';

const fetchByQuery = () =>{ 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=batman`)
    .then((res) => res.json())
    .then(({ results }) => results);
}

const getImgUrl = () => {
    
}

export default fetchByQuery;