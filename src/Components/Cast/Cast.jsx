import { Component } from "react";
import {fetchMovieCast} from '../../Services/ApiService'


class Cast extends Component{
    state ={
        casts: []
    }

    componentDidMount(){
        const {movieId} = this.props
        fetchMovieCast(movieId).then(casts => this.setState({casts}))
        .catch(error => console.log(error))
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