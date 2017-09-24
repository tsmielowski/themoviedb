import React from "react";
import PropTypes from "prop-types";
import "./css/SearchComponent.css";
/**
 * @public
 */
class SearchComponent extends React.Component {
    /**
     * Constructor
     * @constructs SearchComponent
     * @extends React.Component
     * @param {Object} props
     * @param {Function} props.onSearchTextChange Callback function triggered while user provides searching phrase
     * @param {string} props.searchText Search text
     */
    constructor( props ) {
        super( props );
        this.handleSearchTextChange = this.handleSearchTextChange.bind( this );
    }
    /**
     * Method handles text change in input field
     * @param {Object} e Event object
     * @public
     */
    handleSearchTextChange( e ) {
        /**
         * TODO: add timeout to prevent sending requests on every change
         */
        this.props.onSearchTextChange( e.target.value );
    }
    /**
     * Method renders search component
     * @public
     * @returns {Object} React element
     */
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

SearchComponent.propTypes = {
    onSearchTextChange: PropTypes.func,
    searchText: PropTypes.string
};

export default SearchComponent;
