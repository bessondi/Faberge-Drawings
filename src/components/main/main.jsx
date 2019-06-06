import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

import './main.css';
import './media.css';
import AmmonImg from '../../images/Ammon.jpg';


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
                <main className="mainView">
                    <Background>

                        <div className='mainTitle'>
                            <h1>МУЗЕЙ <br/> ФАБЕРЖЕ</h1>
                            <p>ЖИВОПИСЬ</p>
                        </div>

                        <NavLink to='/slider'>
                            <button className='nextSlidePage'>
                                <div className='nextSlidePageArrow'/>
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