import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
// import createHashHistory from 'history/createHashHistory';
import {createHashHistory} from 'history';
import { Circle } from 'react-preloaders';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
    <Router history={hashHistory}>
        <App />
        <Circle color={'#f7f7f7'} background="#111" />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();