import { Component } from "react";
import axios from 'axios';

class Cast extends Component{
    state ={
        casts: []
    }

    componentDidMount(){
        const apiKey = '98e87da0e762537a8cb63c18dd13caee';
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=${apiKey}`)
        .then(response => this.setState({casts: response.data.cast}))
    }

    render(){
        const {casts} = this.state;
        const baseUrl = 'https://image.tmdb.org/t/p/w200'
        return(<><h1>CAST</h1>
        <ul>{casts.map(({ name, id, profile_path }) => <li key={id}>
        <img
                src={baseUrl + profile_path}
                className="ImageGalleryItem-image"
                alt={name}
              />
            <p>{name}</p></li>)}</ul>
        </>)
    }
}

export default Cast;