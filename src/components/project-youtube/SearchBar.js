import React from 'react';
import './VideoItem.css';

class SearchBar extends React.Component {
    state = {term: ''};
    
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term);
  ;      // TODO: make sure wo call callback from parent component
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="filed">
                        <label className="label">Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}   
                            onChange={this.onInputChange} 
                        />
                         <button type="submit" class="btn btn-outline-primary" style={{margin:"1rem"}}>Search</button>
                         
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;