import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.scss'


class SearchForm extends Component{
  state = {
    query: '',
  }
  handleChange = event => {
    this.setState({query: event.currentTarget.value})
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query)
    this.setState({query: ''})
    
  }

    render() {
      const {query} = this.state;

        return( 
          <>
          <h1 className={styles.title}>Movies search</h1>
          <div className={styles.Searchbar}>
            <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
              <button type="submit"  className={styles.SearchButton}>
              <span className={styles.SearchFormLabel}>Search</span>
              </button>
          
              <input
                value={query}
                onChange={this.handleChange}
                className={styles.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
              />
            </form>
            </div>
             </>
          )
    }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default SearchForm;