import * as Configuration from "./../../constants/Configuration";
import TheMovieDBItemVO from "./TheMovieDBItemVO";

const MovieVO = function ( data ) {
    TheMovieDBItemVO.call( this, data );
    const poster_path = data.poster_path;

    this.image = poster_path ? Configuration.IMAGES_URI + Configuration.IMAGES_SIZE + poster_path : null;
    this.overview = data.overview || null;
};

export default MovieVO;
