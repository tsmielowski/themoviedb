import React from "react";
import TheMovieDBItemComponent from "./TheMovieDBItemComponent";

const TheMovieDBListComponent = props => (
    <ul>
        { props.items
            .map( item => <TheMovieDBItemComponent
                item={ item }
                key={ item.id.toString() }
                onItemSelect={ props.onItemSelect }
            /> ) }
    </ul>
);

export default TheMovieDBListComponent;
