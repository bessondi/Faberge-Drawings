import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from "./components/main/main";
import Slider from "./components/slider/slider";

import './App.css';


function App() {
    return (
        <div className="App" onContextMenu={(e) => e.preventDefault()}>
            {/*header*/}
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/slider' component={Slider}/>
            </Switch>
            {/*footer*/}
        </div>
    );
}

export default App;
