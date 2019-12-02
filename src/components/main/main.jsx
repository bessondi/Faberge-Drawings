import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import styles from './main.module.css';
import DrawMov from '../../media/video/Drawings.webm';
import DrawMov2 from '../../media/video/Drawings.mp4';
import DrawingsPoster from '../../media/video/DrawingsPoster.jpg';

class Main extends Component {
    render() {
        const MainView = () => {

            const Background = styled.div`           
                width: 100%;
                height: 100%;
                background-color: #000;
                opacity: 0.5;
                /* animation-duration: .5s;
                animation-name: showPic; */
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
                                // preload="auto" muted="" autoplay="" loop="loop" controls=""
                                preload="true" autoPlay="autoplay" loop="loop" playsInline="playsinline"
                                poster={DrawingsPoster}>
                                <source src={DrawMov} type="video/webm" />
                                <source src={DrawMov2} type="video/mp4" />
                            </video>
                        </EggVideoBackground>
                    </Background>

                    <div className={styles.app__main__mainTitle}>
                        <p>МУЗЕЙ</p>
                        <p>ФАБЕРЖЕ</p>
                        <p>ЖИВОПИСЬ</p>

                        <NavLink to='/eng'>
                            <button className={styles.app__main__languageToggle}>
                                <h4>ENG</h4>
                            </button>
                        </NavLink>
                    </div>

                    <NavLink to='/slider'>
                        <button className={styles.app__main__nextSlidePage}>
                            <div className={styles.app__main__nextSlidePage_nextSlidePageArrow} />
                        </button>
                    </NavLink>

                    <NavLink to='/eggsPage'>
                        <button className={styles.app__main__EggsPage}>
                            <div className={styles.app__main__EggsPage_nextPageArrow} />
                        </button>
                    </NavLink>
                </main>
            );
        };
        return (
            <MainView />
        )
    }
}

export default Main;