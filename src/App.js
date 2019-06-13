import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from "./components/main/main";
import Slider from "./components/slider/slider";

import EngMain from "./components/englishVersion/engMain/engMain";
import EngSlider from "./components/englishVersion/engSlider/engSlider";

// import engSliderData from './components/englishVersion/engsliderData';


import './App.css';
// import media from '../../css/media.module.css';


function App() {
    return (

        <div className="app"
             // onContextMenu={ (e) => e.preventDefault() }
        >
            {/*header*/}
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/slider' component={Slider} />

                    <Route path='/eng' component={EngMain}/>
                    <Route path='/engSlider' component={EngSlider}/>
                </Switch>

            {/*footer*/}
        </div>

    );
}

export default App;