import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import TheMovieDB from "./TheMovieDBComponents";
import "./css/RootComponent.css";
import search from "./../proxy/TheMovieDBAPIProxy";

class RootComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            id: null,
            items: [],
            searchText: ""
        };
        this.handleItemSelect = this.handleItemSelect.bind( this );
        this.handleSearchTextChange = this.handleSearchTextChange.bind( this );
    }

    handleItemSelect( id ) {
        this.setState( { id } );
    }

    handleSearchTextChange( searchText ) {
        search( searchText )
            .then( items => {
                this.setState( { items } );
            } )
            .catch( data => {
                /**
                 * TODO: handle error in a "smart" way
                 */
                console.warn( "Error: %o", data );
                this.setState( { items: [] } );
            } );
        this.setState( { searchText } );
    }

    render() {
        const item = this.state.items
                  .find( item => item.id === this.state.id );

        return (
            <div className="the-movie-db">
                <HeaderComponent
                    header="The Movie DB"
                />
                <TheMovieDB.DetailComponent
                    item={ item }
                />
                <SearchComponent
                    onSearchTextChange={ this.handleSearchTextChange }
                    searchText={ this.state.searchText }
                />
                <TheMovieDB.ListComponent
                    items={ this.state.items }
                    onItemSelect={ this.handleItemSelect }
                />
            </div>
        );
    }
}

export default RootComponent;
