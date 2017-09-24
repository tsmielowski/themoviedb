import React from "react";
import PropTypes from "prop-types";
import MovieVO from "./../proxy/vo/MovieVO";
import PersonVO from "./../proxy/vo/PersonVO";
/**
 * @public
 */
class TheMovieDBItemComponent extends React.Component {
    /**
     * Constructor
     * @constructs ItemComponent
     * @extends React.Component
     * @param {Object} props
     * @param {Function} props.onItemSelect Callback function triggered while user selects item in list to see detail
     * @param {Object} props.item Instance of MovieVO/PersonVO object
     */
    constructor( props ) {
        super( props );
        this.handleItemSelect = this.handleItemSelect.bind( this );
    }
    /**
     * Method handles item selection in list
     * @param {Object} e Event object
     * @public
     */
    handleItemSelect( e ) {
        e.preventDefault();
        this.props.onItemSelect( this.props.item.id );
    }
    /**
     * Method renders a single item in list returned by theMovieDB API
     * @public
     * @returns {Object} React element
     */
    render() {
        const item = this.props.item;
        const type = item instanceof PersonVO ? "person" : "movie/tv";

        return (
            <li>
                { item.name } ({ type }) <a href="#" onClick={ this.handleItemSelect }>more &raquo;</a>
            </li>
        );
    }
}

TheMovieDBItemComponent.PropTypes = {
    item: PropTypes.oneOfType( [
            PropTypes.instanceOf( MovieVO ),
            PropTypes.instanceOf( PersonVO )
        ] ),
    onItemSelect: PropTypes.func
};

export default TheMovieDBItemComponent;
