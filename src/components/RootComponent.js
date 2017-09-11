import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import TheMovieDBListComponent from "./TheMovieDBListComponent";

class RootComponent extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent
                    header="The Movie DB"
                />
                <SearchComponent />
                <TheMovieDBListComponent
                    items={ this.props.items }
                />
            </div>
       );
    }
}

export default RootComponent;
