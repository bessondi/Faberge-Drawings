import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import styles from './eggsPageStyles.module.css';
import EggsImg from '../../media/images/compressed/romanov_eggs.jpg';


class EggsPage extends Component {
    render() {
        const MainView = () => {
            const Background = styled.div`
                background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${EggsImg});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100vh;
                animation-duration: .5s;
                animation-name: showPic;
            `;
            return (
                <main className={styles.app__main__mainView}>
                    <Background>
                        <div className={styles.app__main__mainTitle}>
                            <p>МУЗЕЙ</p>
                            <p>ФАБЕРЖЕ</p>
                            <p>ПАСХАЛЬНЫЕ ШЕДЕВРЫ</p>

                            {/* <NavLink to='/eggsPageEng'>
                                <button className={styles.app__main__languageToggle}>
                                    <h4>ENG</h4>
                                </button>
                            </NavLink> */}
                        </div>

                        <NavLink to='/eggsSlider'>
                            <button className={styles.app__main__nextSlidePage}>
                                <div className={styles.app__main__nextSlidePage_nextSlidePageArrow}/>
                            </button>
                        </NavLink>

                        <NavLink to='/'>
                            <button className={styles.app__main__EggsPage}>
                                <div className={styles.app__main__EggsPage_nextPageArrow}/>
                            </button>
                        </NavLink>
                    </Background>
                </main>
            );
        };
        return (
            <MainView/>
        )
    }
}

export default EggsPage;