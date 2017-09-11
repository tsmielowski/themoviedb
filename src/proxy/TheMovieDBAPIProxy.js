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

const search = query => new Promise( ( resolve, reject ) => {
    /**
     * TODO: add support for pagination
     */
    query = query.trim();

    const onError = data => {
        reject( data );
    };
    const onSuccess = data => {
        data = JSON.parse( data );

        const items = [];

        ( data.results || [] ).forEach( item => {
            if ( item.id && ( item.name || item.title ).trim() ) {
                switch ( item.media_type ) {
                    case MediaTypes.MOVIE:
                    case MediaTypes.TV:
                        items.push( new MovieVO( item ) );
                        break;
                    case MediaTypes.PERSON:
                        items.push( new PersonVO( item ) );
                        break;
                    default:
                        break;
                }
            }
        } );
        resolve( items );
    };

    if ( query === "" ) {
        resolve( [] );
    } else {
        theMovieDb.search.getMulti( { query: encodeURIComponent( query ) }, onSuccess, onError );
    }
} );

export default search;
