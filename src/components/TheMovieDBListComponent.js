import React from "react";
import PropTypes from "prop-types";
import MovieVO from "./../proxy/vo/MovieVO";
import PersonVO from "./../proxy/vo/PersonVO";
import TheMovieDBItemComponent from "./TheMovieDBItemComponent";
import "./css/TheMovieDBListComponent.css";
/**
 * Method renders list of items returned by theMovieDB API
 * @param {Object} props
 * @param {Array.<Object>} props.items Array of elements which each of them is an instance of MovieVO/PersonVO object
 * @public
 * @returns {Object} React element
 */
const TheMovieDBListComponent = props => (
    <ul className="list">
        { props.items
            .map( item => <TheMovieDBItemComponent
                item={ item }
                key={ item.id.toString() }
                onItemSelect={ props.onItemSelect }
            /> ) }
    </ul>
);

TheMovieDBListComponent.PropTypes = {
    items: PropTypes.arrayOf( PropTypes.oneOfType( [
            PropTypes.instanceOf( MovieVO ),
            PropTypes.instanceOf( PersonVO )
        ] ) )
};

export default TheMovieDBListComponent;
