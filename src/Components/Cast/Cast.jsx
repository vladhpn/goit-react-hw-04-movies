import { Component } from "react";
import axios from 'axios';

class Cast extends Component{
    state ={
        casts: []
    }


    componentDidMount(){
        // const {moviesId} = this.props.match.params
        const apiKey = '98e87da0e762537a8cb63c18dd13caee';
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=${apiKey}`)
        .then(response => this.setState({casts: response.data.cast}))
        // this.setState({casts: response.data.results})
    }

    render(){
        const {casts} = this.state;
        return(<><h1>CAST</h1>
        <ul>{casts.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>
        </>)
    }
}

export default Cast;