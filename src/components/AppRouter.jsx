import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "./main/main";
import Slider from "./slider/slider";
import LastSlide from "./slider/lastSlide/lastSlide";
import '../App.css';
import EggsPage from './eggsPage/eggsMainPage';
import EggsSlider from './slider/eggs/eggsSlider';

import data from "./main/mainData";
import {sliderData, sliderDataEng, lastSlideData, lastSlideDataEng} from './slider/sliderData';
import {eggsSliderData} from './slider/eggs/eggsSliderData';
import romanovImg from '../media/images/compressed/romanov_eggs.jpg';
import ammonImg from '../media/images/compressed/Ammon.jpg';


export default function AppRouter() {
  return (
    <div className="app"
      //  onContextMenu={ (e) => e.preventDefault() }
      //  onMouseDown={ (e) => e.preventDefault() }
    >
      <Switch>
        {/* rus drawings section */}
        <Route exact path={data.ru.linkToMainPage} render={ props => <Main data={data.ru} />} />
        <Route path={data.ru.linkToSlider} render={ props => <Slider data={data.ru} sliderData={sliderData} />} />
        <Route path={data.ru.linkToLastSlide} render={ props => <LastSlide img={ammonImg} lastSlideData={lastSlideData} pathToStart={data.ru.linkToSlider} pathToHome={data.ru.linkToMainPage} />} />

        {/* eng drawings section */}
        <Route path={data.en.linkToMainPage} render={ props => <Main data={data.en} />} />
        <Route path={data.en.linkToSlider} render={ props => <Slider data={data.en} sliderData={sliderDataEng} />} />
        <Route path={data.en.linkToLastSlide} render={ props => <LastSlide img={ammonImg} lastSlideData={lastSlideDataEng} pathToStart={data.en.linkToSlider} pathToHome={data.en.linkToMainPage} />} />


        {/* rus eggs section */}
        <Route path={data.ru.linkToEggPage} render={ props => <EggsPage data={data.ru} />} />
        <Route path={data.ru.linkToEggSlider} render={ props => <EggsSlider sliderData={eggsSliderData} />} />
        <Route path={data.ru.linkToLastEggSlide} render={ props => <LastSlide img={romanovImg} lastSlideData={lastSlideData} pathToStart={data.ru.linkToEggSlider} pathToHome={data.ru.linkToEggPage} />} />

        {/* eng eggs section */}
        {/* TODO: add english version */}
        {/* <Route path='/eggsPageEng' component={EggsPageEng} />
            <Route path='/eggsSliderEng' component={EggsSliderEng} />
            <Route path='/lastEggsSlideEng' component={LastEggsSlideEng} /> */}
      </Switch>
    </div>
  );
}
