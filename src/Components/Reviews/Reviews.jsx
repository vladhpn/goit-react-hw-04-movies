import { Component } from "react";
import Review from '../Review';
import {fetchMovieReviews} from '../../Services/ApiService'


class Reviews extends Component{
    state = {
        reviews: []
    }

    componentDidMount(){
        const {movieId} = this.props
        fetchMovieReviews(movieId).then(reviews => this.setState({reviews}))
        .catch(error => console.log(error))
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