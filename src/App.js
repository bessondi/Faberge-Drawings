import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from "./components/main/main";
import Slider from "./components/slider/slider";

import EngMain from "./components/englishVersion/engMain/engMain";
import EngSlider from "./components/englishVersion/engSlider/engSlider";

import './App.css';

// import engSliderData from './components/englishVersion/engsliderData';
// import media from '../../css/media.module.css';



// TODO:
// 1. Переработать плеер, работающий поверх слайдера - одна дорожка на 2 слайда без перезагрузки (сделать отдельный файл) - второй счетчик
// 2. Отрефакторить скролл на позицию при смене слайда (сделать отдельный файл)
// 3. Добавить события на кнопку переключения слайда



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