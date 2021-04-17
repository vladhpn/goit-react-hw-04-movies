import { Component } from "react";
import {fetchMovieCast} from '../../Services/ApiService'
import styles from './styles.module.scss'
import image from '../../images/no-image.jpeg';


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
        return(<><h4 className={styles.title}>CAST</h4>
        <ul className={styles.list}>{casts.map(({ name, id, profile_path }) => 
        <li key={id} className={styles.item}>

            {profile_path ? (<img
                src={baseUrl + profile_path}
                className={styles.img}
                alt={name}
              />) : (<img src={image}
                className={styles.img} alt='' />)}
        {/* <img
                src={baseUrl + profile_path}
                className={styles.img}
                alt={name}
              /> */}
            <p className={styles.name}>{name}</p></li>)}</ul>
        </>)
    }
}

//  {poster_path ? (<img
// src={imageUrl + poster_path}
// className="ImageGalleryItem-image"
// alt={title}
// />) : (<img src={image}
// alt='' />)}

export default Cast;