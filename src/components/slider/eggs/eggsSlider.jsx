import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import EggsImageRender from "./eggsImageRender";
import styles from '../sliderStyles.module.css';
import styled from 'styled-components';
import Player from "../player/player";


export default function EggSlider({sliderData}) {
  const [slider, setSlider] = useState({
    slide: sliderData.slides[0],
    isCard1Showed: false,
    isCard2Showed: false,
    isCard3Showed: false,
    isCard4Showed: false,
    isCard5Showed: false,
    isCard6Showed: false
  })

  const totalSlides = sliderData.slides.length

  const prevImg = () => {
    let newIndex = slider.slide.index - 1;

    if (newIndex < 0) {
      setSlider({...slider, slide: sliderData.slides[0]})
    } else {
      setSlider({...slider, slide: sliderData.slides[newIndex]})
    }
  }
  const nextImg = () => {
    let newIndex = slider.slide.index + 1;

    if (newIndex < totalSlides) {
      setSlider({...slider, slide: sliderData.slides[newIndex]})
    } else {
      setSlider({...slider, slide: sliderData.slides[0]})
    }
  }

  const {soundtrack} = slider.slide.pictureData;

  const NavButtons = () => {
    return (
      <React.Fragment>
        {
          slider.slide.index === 0
            ?
            <NavLink to='/eggsPage'>
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
          slider.slide.index >= totalSlides - 1
            ?
            <NavLink to='/lastEggsSlide'>
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

  const AudioGuide = () => {
    const PlayBtn = styled.div`
      position: fixed;
      right: 33%;
      bottom: 40px;
      z-index: 10;
    `;
    return (
      <PlayBtn>
        {
          soundtrack ?
            <Player soundtrack={soundtrack.sound}/>
            : null
        }
      </PlayBtn>
    )
  };

  return (
    <React.Fragment>
      <NavButtons/>
      <AudioGuide/>

      <EggsImageRender
        slide={slider.slide}
        index={slider.index}
        isCard1Showed={slider.isCard1Showed}
        isCard2Showed={slider.isCard2Showed}
        isCard3Showed={slider.isCard3Showed}
        isCard4Showed={slider.isCard4Showed}
        isCard5Showed={slider.isCard5Showed}
        isCard6Showed={slider.isCard6Showed}
      />
    </React.Fragment>
  );
}
