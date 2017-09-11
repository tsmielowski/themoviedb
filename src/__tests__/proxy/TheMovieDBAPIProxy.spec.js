import * as theMovieDb from "themoviedb-javascript-library";
import search from "./../../proxy/TheMovieDBAPIProxy";
import MovieVO from "./../../proxy/vo/MovieVO";

describe( "TheMovieDBAPIProxy.search:", () => {
    test( "For empty \"query\" parameter an empty array is retunred", () => {
        expect( search( "" ) ).resolves.toEqual( [] );
    } );
    test( "If theMovieDb.search.getMulti calls \"onError\" callback", () => {
        const errorMessage = "Error message";
        const mockFn = jest.fn().mockImplementationOnce( ( options, onSuccess, onError ) => onError( errorMessage ) );

        theMovieDb.search.getMulti = mockFn;
        expect( search( "fake" ) ).rejects.toEqual( errorMessage );
    } );
    test( "If theMovieDb.search.getMulti calls \"onSuccess\" callback", () => {
        const response = '{"page":1,"total_results":1,"total_pages":1,"results":[{"id":1,"media_type":"movie","title":"Fake title","poster_path":"\/AqE126KXLcT3wwmeM3HtlKqyGze.jpg","overview":""}]}';
        const mockFn = jest.fn().mockImplementationOnce( ( options, onSuccess, onError ) => onSuccess( response ) );
        const data = [ new MovieVO( JSON.parse( response ).results[ 0 ] ) ];

        theMovieDb.search.getMulti = mockFn;
        expect( search( "fake" ) ).resolves.toEqual( data );
    } );
} );
