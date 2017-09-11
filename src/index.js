import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootComponent from "./components/RootComponent";
//import registerServiceWorker from './registerServiceWorker';
const items = [ {
        id: 1,
        name: "fake one"
    }, {
        id: 2,
        name: "fake two"
    }, {
        id: 3,
        name: "fake three"
    }, {
        id: 4,
        name: "fake four"
    } ];

ReactDOM.render( <RootComponent items={items} />, document.getElementById( "root" ) );
//registerServiceWorker();
