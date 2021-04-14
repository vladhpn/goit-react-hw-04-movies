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
    
  }

    render() {
      const {query} = this.state;

        return(     <header >
            <form>
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
          </header>)
    }
}
export default SearchForm;