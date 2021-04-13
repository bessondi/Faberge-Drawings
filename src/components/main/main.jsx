import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import styles from './main.module.css';
import DrawMov from '../../media/video/Drawings.webm';
import DrawMov2 from '../../media/video/Drawings.mp4';
import DrawingsPoster from '../../media/video/DrawingsPoster.jpg';


export default function Main({data}) {
  const MainView = () => {
    const Background = styled.div`
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
    `;
    const EggVideoBackground = styled.div`
      background-color: #000;
      animation-duration: .5s;
      animation-name: showPic;
    `;
    return (
      <main className={styles.app__main__mainView}>
        <Background>
          <EggVideoBackground>
            <video className={styles.app__main__mainViewVideoDrawings}
                   muted autoPlay playsInline loop poster={DrawingsPoster}
            >
              <source src={DrawMov} type="video/webm"/>
              <source src={DrawMov2} type="video/mp4"/>
            </video>
          </EggVideoBackground>
        </Background>

        <div className={styles.app__main__mainTitle}>
          {data.title.map(title => <p key={title.id}>{title.word}</p>)}

          <NavLink to={data.linkToEng}>
            <button className={styles.app__main__languageToggle}>
              <h4>{data.switchTo}</h4>
            </button>
          </NavLink>
        </div>

        <NavLink to={data.linkToSlider}>
          <button className={styles.app__main__nextSlidePage}>
            <div className={styles.app__main__nextSlidePage_nextSlidePageArrow}/>
          </button>
        </NavLink>

        {
          data.linkToEggPage
          ? <NavLink to={data.linkToEggPage}>
              <button className={styles.app__main__EggsPage}>
                <div className={styles.app__main__EggsPage_nextPageArrow}/>
              </button>
            </NavLink>
          : null
        }
      </main>
    );
  };
  return (
    <MainView/>
  )
}
