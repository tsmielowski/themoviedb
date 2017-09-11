import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import TheMovieDB from "./TheMovieDBComponents";
import "./css/RootComponent.css";

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
                    items={ this.props.items.filter( item => item.name.indexOf( this.state.searchText ) > -1 ) }
                    onItemSelect={ this.handleItemSelect }
                />
            </div>
        );
    }
}

export default RootComponent;
