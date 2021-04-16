import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import ImageRender from "./imageRender";
import styles from './sliderStyles.module.css';


export default function Slider({data, sliderData}) {
  const [slider, setSlider] = useState(sliderData.slides[0])
  const totalSlides = sliderData.slides.length // последний n-слайд + 1  файла дата

  const prevImg = () => {
    let newIndex = slider.index - 1;

    if (newIndex < 0) {
      setSlider(sliderData.slides[0])
    } else {
      setSlider(sliderData.slides[newIndex])
    }
  }
  const nextImg = () => {
    let newIndex = slider.index + 1;

    if (newIndex < totalSlides) {
      setSlider(sliderData.slides[newIndex])
    } else {
      setSlider(sliderData.slides[0])
    }
  }

  const NavButtons = () => {
    return (
      <React.Fragment>
        {
          slider.index === 0
            ?
            <NavLink to={data.linkToMainPage}>
              <button className={styles.app__slider__prevSlidePageLeft}>
                <div className={styles.app__slider_prevSlidePageArrowLeft}/>
              </button>
            </NavLink>
            :
            <button onClick={() => prevImg()}
                    className={styles.app__slider__prevSlidePageLeft}>
              <div className={styles.app__slider_prevSlidePageArrowLeft}/>
            </button>
        }

        {
          slider.index >= totalSlides - 1  // для n-слайдов файла дата
            ?
            <NavLink to={data.linkToLastSlide}>
              <button className={styles.app__slider__nextSlidePageRight}>
                <div className={styles.app__slider_nextSlidePageArrowRight}/>
              </button>
            </NavLink>
            :
            <button onClick={() => nextImg()}
                    className={styles.app__slider__nextSlidePageRight}>
              <div className={styles.app__slider_nextSlidePageArrowRight}/>
            </button>
        }
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <ImageRender slide={slider} />
      <NavButtons/>
    </React.Fragment>
  );
}
