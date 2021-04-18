import { Component } from "react";
import {fetchMovieCast, imageUrl} from '../../Services/ApiService'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'
import defaultImage from '../../images/no-image.jpeg';



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

        return(<><h4 className={styles.title}>CAST</h4>
        <ul className={styles.list}>{casts.map(({ name, id, profile_path }) => 
        <li key={id} className={styles.item}>

            {profile_path ? (<img
                src={imageUrl + profile_path}
                className={styles.img}
                alt={name}
              />) : (<img src={defaultImage}
                className={styles.img} alt='' />)}
            <p className={styles.name}>{name}</p></li>)}</ul>
        </>)
    }
}


Cast.propTypes = {
    casts: PropTypes.array,
}

export default Cast;