import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import TheMovieDBDetailComponent from "./TheMovieDBDetailComponent";
import TheMovieDBListComponent from "./TheMovieDBListComponent";

class RootComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            id: null,
            searchText: ""
        };
        this.handleItemSelect = this.handleItemSelect.bind( this );
        this.handleSearchTextChange = this.handleSearchTextChange.bind( this );
    }

    handleItemSelect( id ) {
        this.setState( { id } );
    }

    handleSearchTextChange( searchText ) {
        this.setState( { searchText } );
    }

    render() {
        const item = this.props.items.find( item => item.id === this.state.id );

        return (
            <div>
                <HeaderComponent
                    header="The Movie DB"
                />
                <TheMovieDBDetailComponent
                    item={ item }
                />
                <SearchComponent
                    onSearchTextChange={ this.handleSearchTextChange }
                    searchText={ this.state.searchText }
                />
                <TheMovieDBListComponent
                    items={ this.props.items.filter( item => item.name.indexOf( this.state.searchText ) > -1 ) }
                    onItemSelect={ this.handleItemSelect }
                />
            </div>
        );
    }
}

export default RootComponent;
