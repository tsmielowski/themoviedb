import React from "react";
import PersonVO from "./../proxy/vo/PersonVO";
import "./css/TheMovieDBComponents.css";

const TheMovieDB = {
    /**
     * Method renders detail of item returned by theMovieDB API
     * @param {Object} props
     * @param {Object} props.item Instance of MovieVO/PersonVO object
     * @returns {Object} React element
     */
    DetailComponent: props => {
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
    },
    /**
     * Method renders list of items returned by theMovieDB API
     * @param {Object} props
     * @param {Array.<Object>} props.items Array of elements which each of them is an instance of MovieVO/PersonVO object
     * @returns {Object} React element
     */
    ListComponent: props => (
        <ul className="list">
            { props.items
                .map( item => <TheMovieDB.ItemComponent
                    item={ item }
                    key={ item.id.toString() }
                    onItemSelect={ props.onItemSelect }
                /> ) }
        </ul>
    )
};
/**
 * @public
 */
class ItemComponent extends React.Component {
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

TheMovieDB.ItemComponent = ItemComponent;

export default TheMovieDB;
