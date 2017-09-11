import React from "react";

class SearchComponent extends React.Component {
    render() {
        return (
            <form>
                <input
                    placeholder="Type to search TheMovieDB"
                    type="text"
                />
            </form>
        );
    }
}

export default SearchComponent;
