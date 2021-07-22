import {Component} from 'react';
import {fetchMovieTrailer} from '../../Services/ApiService'
class Video extends Component{
    state = {
        movie: []
    }

componentDidMount(){
    const {movieId} = this.props
    fetchMovieTrailer(movieId).then(movie => this.setState({movie}))
    .catch(error => console.log(error))
}
    render(){
        const{movie} = this.state;
        return(<>
        <h3>Trailer</h3>
        <p>{movie.map(({id, name, key}) => <p key={id}>{name}  
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${key}`} 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe> </p>)}</p>
           </>)
     }
    }

   
   
    export default Video;