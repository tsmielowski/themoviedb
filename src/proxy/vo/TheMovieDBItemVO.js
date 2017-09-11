const TheMovieDBItemVO = function ( data ) {
    this.id = data.id;
    this.name = data.name || data.title;
};

export default TheMovieDBItemVO;
