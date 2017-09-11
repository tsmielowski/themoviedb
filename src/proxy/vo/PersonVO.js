import * as Configuration from "./../../constants/Configuration";
import TheMovieDBItemVO from "./TheMovieDBItemVO";
/**
 * Constructor of PersonVO
 * Data Value Object represents Person object form TheMovieDB
 * @author Tomasz Smiełowski <smielowski@gmail.com>
 * @constructs PersonVO
 * @extends TheMovieDBItemVO
 * @param {Object} data
 * @param {number} data.id Id
 * @param {string} data.name Name
 * @param {null|string} data.profile_path Profile path
 */
const PersonVO = function ( data ) {
    TheMovieDBItemVO.call( this, data );
    const profile_path = data.profile_path;

    this.image = profile_path ? Configuration.IMAGES_URI + Configuration.IMAGES_SIZE + profile_path : null;
};

export default PersonVO;
