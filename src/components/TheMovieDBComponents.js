import React from "react";
import "./css/TheMovieDBComponents.css";

const TheMovieDB = {
    DetailComponent: props => {
        const item = props.item;

        return item ? (
            <div>
                { item.name }
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
        const name = this.props.item.name;

        return (
            <li>
                { name } <a alt={ name } href="#" onClick={ this.handleItemSelect }>more &raquo;</a>
            </li>
        );
    }
}

TheMovieDB.ItemComponent = ItemComponent;

export default TheMovieDB;
