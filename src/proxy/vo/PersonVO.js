import * as Configuration from "./../../constants/Configuration";
import TheMovieDBItemVO from "./TheMovieDBItemVO";

const PersonVO = function ( data ) {
    TheMovieDBItemVO.call( this, data );
    const profile_path = data.profile_path;

    this.image = profile_path ? Configuration.IMAGES_URI + Configuration.IMAGES_SIZE + profile_path : null;
};

export default PersonVO;
