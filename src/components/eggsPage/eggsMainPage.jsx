import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import styles from './eggsPageStyles.module.css';
import EggMov from '../../media/video/2.webm';
import EggMov2 from '../../media/video/2.mp4';
import EggMovPoster from '../../media/video/EggMovPoster.jpg';


export default function EggsPage({data}) {
  const MainView = () => {
    const Background = styled.div`
      width: 100%;
      height: 100vh;
      background-color: #000;
      opacity: 0.5;
    `;
    const EggVideoBackground = styled.div`
      background-color: #efeff1;
      animation-duration: .5s;
      animation-name: showPic;
    `;
    return (
      <main className={styles.app__main__mainView}>
        <Background>
          <EggVideoBackground>
            <video className={styles.app__main__mainViewVideo}
                   muted autoPlay playsInline loop poster={EggMovPoster}>
              <source src={EggMov} type="video/webm"/>
              <source src={EggMov2} type="video/mp4"/>
            </video>
          </EggVideoBackground>
        </Background>

        <div className={styles.app__main__mainTitle}>
          {data.eggsTitles.map(title => <p key={title.id}>{title.word}</p>)}

          {/* <NavLink to={data.linkToEggPage}>
                <button className={styles.app__main__languageToggle}>
                  <h4>{data.switchTo}</h4>
                </button>
              </NavLink> */}
        </div>

        <NavLink to={data.linkToEggSlider}>
          <button className={styles.app__main__nextSlidePage}>
            <div className={styles.app__main__nextSlidePage_nextSlidePageArrow}/>
          </button>
        </NavLink>

        <NavLink to={data.linkToMainPage}>
          <button className={styles.app__main__EggsPage}>
            <div className={styles.app__main__EggsPage_nextPageArrow}/>
          </button>
        </NavLink>
      </main>
    );
  };
  return (
    <MainView/>
  )
}
