import { Component } from "react";
import Review from '../Review';
import axios from 'axios'


class Reviews extends Component{
    state = {
        reviews: []
    }

    componentDidMount(){
        
        const apiKey = '98e87da0e762537a8cb63c18dd13caee';
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=${apiKey}`)
        .then(response => this.setState({reviews: response.data.results}))
    }

    render(){
        const {reviews} = this.state;

        return(<>
        <h2>Reviews</h2>
        <ul>{reviews.map(({author, id, content}) => <li key={id}> 
        <Review author={author} content={content}/>
        </li>)}</ul>
        </>)
    }
}

export default Reviews;