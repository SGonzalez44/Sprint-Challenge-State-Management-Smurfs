import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from 'redux';
import {Provider} from 'react-redux';

function reducer() {
    return {
        title: "Reduc in Sals Mind"
    };
}



const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
