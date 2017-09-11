import React from "react";

class TheMovieDBItemComponent extends React.Component {
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

export default TheMovieDBItemComponent;
