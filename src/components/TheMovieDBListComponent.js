import React from "react";
import TheMovieDBItemComponent from "./TheMovieDBItemComponent";

const TheMovieDBListComponent = props => (
    <ul>
        { props.items
            .map( item => <TheMovieDBItemComponent
                item={ item }
                key={ item.id.toString() }
            /> ) }
    </ul>
);

export default TheMovieDBListComponent;
