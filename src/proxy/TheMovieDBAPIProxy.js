import * as Configuration from "./../constants/Configuration";
import * as MediaTypes from "./../constants/MediaTypes";
import * as theMovieDb from "themoviedb-javascript-library";
import MovieVO from "./vo/MovieVO";
import PersonVO from "./vo/PersonVO";

theMovieDb.common.api_key = Configuration.API_KEY;
theMovieDb.common.base_uri = Configuration.BASE_URI;
theMovieDb.common.images_uri = Configuration.IMAGES_URI;
/**
 * Provide to the themoviedb missing method
 */
theMovieDb.search.getMulti = ( options, success, error ) => {
    theMovieDb.common.validateRequired( arguments, 3, options, [ "query" ] );
    theMovieDb.common.validateCallbacks( [ success, error ] );
    theMovieDb.common.client( {
        url: "search/multi" + theMovieDb.common.generateQuery( options )
    }, success, error );
};
/**
 * Method adds objects to collection
 * @param {Array.<Object>} collection Array of objects of one of the type MovieVO/PersonVO
 * @param {Object} item Object which contains data for detail of movie/tv/person
 * @private
 */
export const addToCollection = ( collection, item ) => {
    if ( item.id && ( item.name || item.title ).trim() ) {
        switch ( item.media_type ) {
            case MediaTypes.MOVIE:
            case MediaTypes.TV:
                collection.push( new MovieVO( item ) );
                break;
            case MediaTypes.PERSON:
                collection.push( new PersonVO( item ) );
                break;
            default:
                break;
        }
    }

    return collection;
};
/**
 * Error callback for search method
 * @param {Function} reject Reject function from Promise
 * @param {Obejct} data Object with error informations
 * @private
 */
export const onError = ( reject, data ) => {
    reject( data );
};
/**
 * Success callback for search method
 * @param {Function} resolve Resolve function from Promise
 * @param {string} data Object with response
 * @private
 */
export const onSuccess = ( resolve, data ) => {
    data = JSON.parse( data );
    resolve( ( data.results || [] ).reduce( addToCollection, [] ) );
};
/**
 * Method searches for movies/tvs/persons in theMovieDB by string query
 * @param {string} query String to searcg for
 * @public
 * @returns {Object} Promise object
 */
export const search = query => new Promise( ( resolve, reject ) => {
    /**
     * TODO: add support for pagination
     */
    query = query.trim();

    if ( query === "" ) {
        resolve( [] );
    } else {
        query = encodeURIComponent( query )
        theMovieDb.search.getMulti( { query }, onSuccess.bind( null, resolve ), onError.bind( null, reject ) );
    }
} );
