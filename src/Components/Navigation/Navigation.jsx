import { NavLink} from 'react-router-dom';
import routes from '../../routes';
import styles from './styles.module.scss'

const Navigation = () => {
    return(
        <nav className={styles.navigation}>
         <NavLink exact to={routes.home} className={styles.link} activeClassName={styles.active_link}>
            Home
          </NavLink>
          <NavLink to={routes.movies} className={styles.link} activeClassName={styles.active_link}>
              Movies</NavLink>
          </nav>
    )
}

export default Navigation;