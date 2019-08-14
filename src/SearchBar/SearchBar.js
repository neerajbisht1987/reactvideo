import React from 'react';
//import SearchBar from './SearchBar.css'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui massive segment" >
                <form className="ui form">
                    <div className="field">
                    <label> Video Search</label>
                        <input type="text" placeholder="Search..." />
                        </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;