import React from "react";
import "./css/SearchComponent.css";

class SearchComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.handleSearchTextChange = this.handleSearchTextChange.bind( this );
    }

    handleSearchTextChange( e ) {
        this.props.onSearchTextChange( e.target.value );
    }

    render() {
        return (
            <form className="search">
                <input
                    onChange={ this.handleSearchTextChange }
                    placeholder="Type to search TheMovieDB"
                    type="text"
                    value={ this.props.searchText }
                />
            </form>
        );
    }
}

export default SearchComponent;
