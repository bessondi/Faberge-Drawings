import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from "./components/main/main";
import Slider from "./components/slider/slider";
import LastSlide from "./components/slider/lastSlide/lastSlide";

import EngMain from "./components/main/engMain";
import EngSlider from "./components/slider/engSlider";
import LastSlideEng from "./components/slider/lastSlide/lastSlideEng";

import './App.css';

// import engSliderData from './components/englishVersion/engsliderData';
// import media from '../../css/media.module.css';


// TODO:
// Переработать плеер, работающий поверх слайдера - одна дорожка на 2 слайда без перезагрузки (сделать отдельный файл) - второй счетчик


function App() {
    return (
        <div className="app"
             // onContextMenu={ (e) => e.preventDefault() }
        >
            {/*header*/}
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/slider' component={Slider} />
                    <Route path='/lastSlide' component={LastSlide} />

                    <Route path='/eng' component={EngMain}/>
                    <Route path='/engSlider' component={EngSlider}/>
                    <Route path='/lastSlideEng' component={LastSlideEng} />
                </Switch>
            {/*footer*/}
        </div>
    );
}

export default App;