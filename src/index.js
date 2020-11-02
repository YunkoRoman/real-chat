import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/store";
import {BrowserRouter} from "react-router-dom";
import rootSaga from './sagas'
const store = configureStore();


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();