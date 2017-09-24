import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import TheMovieDBDetailComponent from "./TheMovieDBDetailComponent";
import TheMovieDBListComponent from "./TheMovieDBListComponent";
import "./css/RootComponent.css";
import { search } from "./../proxy/TheMovieDBAPIProxy";
/**
 * @public
 */
class RootComponent extends React.Component {
    /**
     * Constructor
     * @constructs RootComponent
     * @extends React.Component
     * @param {Object} props An empty object
     */
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
    /**
     * Method handles change of "id" property in state object after selecting by
     * user item in list of search result
     * @param {number} id Id
     * @public
     */
    handleItemSelect( id ) {
        this.setState( { id } );
    }
    /**
     * Method handles change of "items" property and "searchText" property in
     * state object after providing by user query string
     * @param {string} searchText Search text
     * @public
     */
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
    /**
     * Method renders root component
     * @public
     * @returns {Object} React element
     */
    render() {
        const item = this.state.items
                  .find( item => item.id === this.state.id );

        return (
            <div className="the-movie-db">
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
                    items={ this.state.items }
                    onItemSelect={ this.handleItemSelect }
                />
            </div>
        );
    }
}

export default RootComponent;
