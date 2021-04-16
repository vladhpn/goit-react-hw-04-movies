import { Component } from "react";
import Review from '../Review';
import {fetchMovieReviews} from '../../Services/ApiService'
import styles from './styles.module.scss';


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
        <h3 className={styles.title}>Reviews</h3>
        <ul className={styles.list}>{reviews.map(({author, id, content}) => <li key={id}> 
            <Review author={author} content={content}/>
        </li>)}</ul>
        </>)
    }
}

export default Reviews;