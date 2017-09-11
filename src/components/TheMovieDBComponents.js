import React from "react";
import PersonVO from "./../proxy/vo/PersonVO";
import "./css/TheMovieDBComponents.css";

const TheMovieDB = {
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

class ItemComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.handleItemSelect = this.handleItemSelect.bind( this );
    }

    handleItemSelect( e ) {
        e.preventDefault();
        this.props.onItemSelect( this.props.item.id );
    }

    render() {
        const item = this.props.item;
        const type = item instanceof PersonVO ? "person" : "movie/tv";

        return (
            <li>
                { item.name } ({ type }) <a href="#" onClick={ this.handleMovieItemSelect }>more &raquo;</a>
            </li>
        );
    }
}

TheMovieDB.ItemComponent = ItemComponent;

export default TheMovieDB;
