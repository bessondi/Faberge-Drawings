import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import styles from './main.module.css';
import AmmonImg from '../../media/images/compressed/Ammon.jpg';


class Main extends Component {

    render() {

        const MainView = () => {
            const Background = styled.div`
                background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${AmmonImg});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 100vh;
            `;
            return (
                <main className={styles.app__main__mainView}>
                    <Background>

                        <div className={styles.app__main__mainTitle}>
                            <h1>МУЗЕЙ<br/>ФАБЕРЖЕ</h1><br/>
                            <p>ЖИВОПИСЬ</p><br/><br/>

                            <NavLink to='/eng'>
                                <button className={styles.app__main__languageToggle}>
                                    <h4>ENG</h4>
                                </button>
                            </NavLink>
                        </div>

                        <NavLink to='/slider'>
                            <button className={styles.app__main__nextSlidePage}>
                                <div className={styles.app__main__nextSlidePage_nextSlidePageArrow}/>
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

export default Main;