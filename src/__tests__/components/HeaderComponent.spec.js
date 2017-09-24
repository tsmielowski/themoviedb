import React from "react";
import { shallow } from "enzyme";
import HeaderComponent from "./../../components/HeaderComponent";

describe( "HeaderComponent:", () => {
    it( "Renders without crashing", () => {
        shallow( <HeaderComponent /> );
    } );
    it( "Renders header", () => {
        const header = <h1 className="header">Fake</h1>;
        const wrapper = shallow( <HeaderComponent header="Fake" /> );

        expect( wrapper.contains( header ) ).toEqual( true );
    } );
} );
