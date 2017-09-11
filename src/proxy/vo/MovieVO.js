import * as Configuration from "./../../constants/Configuration";
import TheMovieDBItemVO from "./TheMovieDBItemVO";
/**
 * Constructor of MovieVO
 * Data Value Object represents Moive or TV object form TheMovieDB
 * @author Tomasz Smiełowski <smielowski@gmail.com>
 * @constructs MovieVO
 * @extends TheMovieDBItemVO
 * @param {Object} data
 * @param {number} data.id Id
 * @param {string} data.name Name
 * @param {string} data.overview Overview
 * @param {null|string} data.poster_path Poster path
 * @param {string} data.title Title
 */
const MovieVO = function ( data ) {
    TheMovieDBItemVO.call( this, data );
    const poster_path = data.poster_path;

    this.image = poster_path ? Configuration.IMAGES_URI + Configuration.IMAGES_SIZE + poster_path : null;
    this.overview = data.overview || null;
};

export default MovieVO;
