import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import styles from './main.module.css';
// import AmmonImg from '../../media/images/compressed/Ammon.jpg';
import DrawMov from '../../media/video/Drawings.webm';
import DrawMov2 from '../../media/video/Drawings.mp4';
import DrawingsPoster from '../../media/video/DrawingsPoster.jpg';

class EngMain extends Component {
    render() {

        const MainView = () => {
            // const Background = styled.div`
            //     background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${AmmonImg});
            //     background-position: center;
            //     background-repeat: no-repeat;
            //     background-size: cover;
            //     width: 100%;
            //     height: 100vh;
            //     animation-duration: .5s;
            //     animation-name: showPic;
            // `;

            const Background = styled.div`           
                width: 100%;
                height: 100vh;
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
                            <video className={styles.app__main__mainViewVideoDrawings} preload="auto" muted="" autoplay="" loop="loop" playsinline="" controls="" poster={DrawingsPoster}>
                                <source src={DrawMov} type="video/webm"/>
                                <source src={DrawMov2} type="video/mp4"/>
                            </video>
                        </EggVideoBackground>
                    </Background>

                    {/* <Background> */}

                        <div className={styles.app__main__mainTitle}>
                            <p>FABERGÉ</p>
                            <p>MUSEUM</p>
                            <p>DRAWINGS</p>

                            <NavLink to='/'>
                                <button className={styles.app__main__languageToggle}>
                                    <h4>РУС</h4>
                                </button>
                            </NavLink>
                        </div>

                        <NavLink to='/engSlider'>
                            <button className={styles.app__main__nextSlidePage}>
                                <div className={styles.app__main__nextSlidePage_nextSlidePageArrow}/>
                            </button>
                        </NavLink>

                    {/* </Background> */}
                </main>
            );
        };

        return (
            <MainView/>
        )
    }
}

export default EngMain;