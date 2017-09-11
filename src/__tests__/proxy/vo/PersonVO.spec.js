import * as Configuration from "./../../../constants/Configuration";
import PersonVO from "./../../../proxy/vo/PersonVO";

describe( "PersonVO:", () => {
    test( "For given input data there should be defined properties \"id\", \"image\", \"name\"", () => {
        const data = {
            id: +new Date(),
            name: "fake name",
            profile_path: "/fake_profile_path"
        };
        const instance = new PersonVO( data );

        expect( instance.id ).toBe( data.id );
        expect( instance.image ).toBe( Configuration.IMAGES_URI + Configuration.IMAGES_SIZE + data.profile_path );
        expect( instance.name ).toBe( data.name );
    } );
    test( "For given input data there should be defined properties \"id\", \"image\", \"name\"", () => {
        const data = {
            id: +new Date(),
            name: "fake name",
            profile_path: null
        };
        const instance = new PersonVO( data );

        expect( instance.id ).toBe( data.id );
        expect( instance.image ).toBeNull();
        expect( instance.name ).toBe( data.name );
    } );
} );
