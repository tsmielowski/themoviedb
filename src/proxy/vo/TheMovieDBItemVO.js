/**
 * Constructor of TheMovieDBItemVO
 * Data Value Object represents general object form TheMovieDB
 * @author Tomasz Smiełowski <smielowski@gmail.com>
 * @constructs TheMovieDBItemVO
 * @param {Object} data
 * @param {number} data.id Id
 * @param {string} data.name Name
 * @param {string} data.title Title
 */
const TheMovieDBItemVO = function ( data ) {
    this.id = data.id;
    this.name = data.name || data.title;
};

export default TheMovieDBItemVO;
