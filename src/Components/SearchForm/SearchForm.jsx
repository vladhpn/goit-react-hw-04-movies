import { Component } from "react";


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
          <h2>Movies search</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">
              <span>Search</span>
              </button>
          
              <input
                value={query}
                onChange={this.handleChange}
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
export default SearchForm;