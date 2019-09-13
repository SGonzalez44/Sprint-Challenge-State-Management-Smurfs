import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, compose } from 'redux';
import {Provider} from 'react-redux';

const composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
    );

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
