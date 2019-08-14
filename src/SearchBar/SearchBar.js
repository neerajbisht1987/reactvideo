import React from 'react';
//import SearchBar from './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        searchText: ''
    }
    HandlingSubmit = (event) =>{
        event.preventDefault();
        this.props.searchTextHandler(this.state.searchText);


    }

    render() {
        return (
            <div className="ui massive segment" >
                <form className="ui form" onSubmit={this.HandlingSubmit}>
                    <div className="field">
                        <label> Video Search</label>
                        <input type="text" value = {this.state.searchText}  onChange={(event)=> this.setState({searchText:event.target.value})}  />                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;