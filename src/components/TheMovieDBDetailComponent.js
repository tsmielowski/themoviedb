import React from "react";

const TheMovieDBDetailComponent = props => {
    const item = props.item;

    return item ? (
        <div>
            { item.name }
        </div>
    ) : (
        <div></div>
    );
};

export default TheMovieDBDetailComponent;
