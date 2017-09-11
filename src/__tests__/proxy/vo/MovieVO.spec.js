import * as Configuration from "./../../../constants/Configuration";
import MovieVO from "./../../../proxy/vo/MovieVO";

describe( "MovieVO:", () => {
    test( "For given input data there should be defined properties \"id\", \"image\", \"name\", \"overview\"", () => {
        const data = {
            id: +new Date(),
            name: "fake name",
            overview: "fake overview",
            poster_path: "/fake_poster_path"
        };
        const instance = new MovieVO( data );

        expect( instance.id ).toBe( data.id );
        expect( instance.image ).toBe( Configuration.IMAGES_URI + Configuration.IMAGES_SIZE + data.poster_path );
        expect( instance.name ).toBe( data.name );
        expect( instance.overview ).toBe( data.overview );
    } );
    test( "For given input data there should be defined properties \"id\", \"image\", \"name\", \"overview\"", () => {
        const data = {
            id: +new Date(),
            overview: null,
            poster_path: null,
            title: "fake title"
        };
        const instance = new MovieVO( data );

        expect( instance.id ).toBe( data.id );
        expect( instance.image ).toBeNull();
        expect( instance.name ).toBe( data.title );
        expect( instance.overview ).toBeNull();
    } );
} );
