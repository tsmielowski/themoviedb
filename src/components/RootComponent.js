import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import TheMovieDBListComponent from "./TheMovieDBListComponent";

class RootComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            searchText: ""
        };
        this.handleSearchTextChange = this.handleSearchTextChange.bind( this );
    }

    handleSearchTextChange( searchText ) {
        this.setState( { searchText } );
    }

    render() {

        return (
            <div>
                <HeaderComponent
                    header="The Movie DB"
                />
                <SearchComponent
                    onSearchTextChange={ this.handleSearchTextChange }
                    searchText={ this.state.searchText }
                />
                <TheMovieDBListComponent
                    items={ this.props.items.filter( item => item.name.indexOf( this.state.searchText ) > -1 ) }
                />
            </div>
       );
    }
}

export default RootComponent;
