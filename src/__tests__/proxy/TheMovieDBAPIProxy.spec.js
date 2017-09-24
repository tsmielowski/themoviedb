import * as theMovieDb from "themoviedb-javascript-library";
import * as MediaTypes from "./../../constants/MediaTypes";
import { addToCollection, onError, onSuccess, search } from "./../../proxy/TheMovieDBAPIProxy";
import MovieVO from "./../../proxy/vo/MovieVO";
import PersonVO from "./../../proxy/vo/PersonVO";

describe( "TheMovieDBAPIProxy.addToCollection:", () => {
    test( "Nothing is added to the end of collection", () => {
        const collection = [];
        const item = {};

        expect( addToCollection( collection, item ) ).toEqual( collection );
    } );
    test( "MovieVO object is added to the end of collection", () => {
        const collection = [];
        const item = {
            id: +new Date(),
            media_type: MediaTypes.MOVIE,
            name: "fake name",
            overview: "fake overview",
            poster_path: "/fake_poster_path"
        };
        const result = [ ...collection ];

        result.push( new MovieVO( item ) );
        expect( addToCollection( collection, item ) ).toEqual( result );
    } );
    test( "PersonVO object is added to the end of collection", () => {
        const collection = [ "fake" ];
        const item = {
            id: +new Date(),
            media_type: MediaTypes.PERSON,
            name: "fake name",
            poster_path: "/fake_poster_path"
        };
        const result = [ ...collection ];

        result.push( new PersonVO( item ) );
        expect( addToCollection( collection, item ) ).toEqual( result );
    } );
} );
describe( "TheMovieDBAPIProxy.onError:", () => {
    test( "Input function is called once with input data", () => {
        const mockFn = jest.fn();
        const data = { fake: 1 };

        onError( mockFn, data );
        expect( mockFn.mock.calls.length ).toBe( 1 );
        expect( mockFn.mock.calls[ 0 ] ).toEqual( [ data ] );
    } );
} );
describe( "TheMovieDBAPIProxy.onSuccess:", () => {
    test( "Input function is called with ian empty array", () => {
        const mockFn = jest.fn();
        const data = "{ \"fake\": 1 }";

        onSuccess( mockFn, data );
        expect( mockFn.mock.calls.length ).toBe( 1 );
        expect( mockFn.mock.calls[ 0 ] ).toEqual( [ [] ] );
    } );
    test( "Input function is called once with collection, which contains two VO objects", () => {
        const mockFn = jest.fn();
        const data = {
            results: [ {
                id: +new Date(),
                media_type: MediaTypes.PERSON,
                name: "fake name",
                poster_path: "/fake_poster_path"
            }, {
                id: +new Date(),
                media_type: MediaTypes.MOVIE,
                name: "fake name",
                overview: "fake overview",
                poster_path: "/fake_poster_path"
            } ]
        };

        onSuccess( mockFn, JSON.stringify( data ) );
        expect( mockFn.mock.calls.length ).toBe( 1 );
        expect( mockFn.mock.calls[ 0 ] ).toEqual( [ [ new PersonVO( data.results[ 0 ] ), new MovieVO( data.results[ 1 ] ) ] ] );
    } );
} );
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
