import React from "react";
import PropTypes from "prop-types";
import MovieVO from "./../proxy/vo/MovieVO";
import PersonVO from "./../proxy/vo/PersonVO";
import "./css/TheMovieDBDetailComponent.css";
/**
 * Method renders detail of item returned by theMovieDB API
 * @param {Object} props
 * @param {Object} props.item Instance of MovieVO/PersonVO object
 * @public
 * @returns {Object} React element
 */
const TheMovieDBDetailComponent = props => {
    const item = props.item;
    const image = item && item.image;
    const name = item && item.name;
    const overview = ( item && item.overview ) || null;
    const type = item instanceof PersonVO ? "person" : "movie/tv";

    return item ? (
        <div className="detail">
            { image !== null && <img alt={ name } src={ image } /> }
            <h4>{ name } ({ type })</h4>
            { overview !== null && <div>{ overview }</div> }
        </div>
    ) : (
        <div></div>
    );
};

TheMovieDBDetailComponent.PropTypes = {
    item: PropTypes.oneOfType( [
            PropTypes.instanceOf( MovieVO ),
            PropTypes.instanceOf( PersonVO )
        ] ),
    onItemSelect: PropTypes.func
};

export default TheMovieDBDetailComponent;
