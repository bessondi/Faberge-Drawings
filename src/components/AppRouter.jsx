import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from "./main/main";
import Slider from "./slider/slider";
import LastSlide from "./slider/lastSlide/lastSlide";

import EngMain from "./main/engMain";
import EngSlider from "./slider/engSlider";
import LastSlideEng from "./slider/lastSlide/lastSlideEng";

import '../App.css';
import EggsPage from './eggsPage/eggsMainPage';
import EggsSlider from './slider/eggs/eggsSlider';
import LastEggsSlide from './slider/eggs/lastEggsSlide/lastEggsSlide';

function AppRouter() {
    return (
        <div className="app"
            //  onContextMenu={ (e) => e.preventDefault() }
            //  onMouseDown={ (e) => e.preventDefault() }
        >
            {/*header*/}
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/slider' component={Slider} />
                <Route path='/lastSlide' component={LastSlide} />

                <Route path='/eng' component={EngMain}/>
                <Route path='/engSlider' component={EngSlider}/>
                <Route path='/lastSlideEng' component={LastSlideEng} />


                <Route path='/eggsPage' component={EggsPage} />
                <Route path='/eggsSlider' component={EggsSlider} />
                <Route path='/lastEggsSlide' component={LastEggsSlide} />

                {/* <Route path='/eggsPageEng' component={EggsPageEng} />
                <Route path='/eggsSliderEng' component={EggsSliderEng} />
                <Route path='/lastEggsSlideEng' component={LastEggsSlideEng} /> */}
            </Switch>
            {/*footer*/}
        </div>
    );
}

export default AppRouter;