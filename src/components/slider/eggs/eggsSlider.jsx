import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import EggsImageRender from "./eggsImageRender";

import {SliderData} from './eggsSliderData';
import styles from './eggsSliderStyles.module.css';

import styled from 'styled-components';
import Player from "../player/player";


class EggSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: SliderData.slides[0],
            isCard1Showed: false,
            isCard2Showed: false,
            isCard3Showed: false,
            isCard4Showed: false,
            isCard5Showed: false,
            isCard6Showed: false
        }
    }

    // componentDidMount() {
    //     // this.timer = setInterval( this.nextImg, 40000 )
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // }


    prevImg = () => {
        let newIndex = this.state.slider.index - 1;

        if ( newIndex < 0 ) {
            this.setState({
                slider: SliderData.slides[0],
            })
        } else {
            this.setState({
                slider: SliderData.slides[newIndex],
            })
        }
        // console.log(this.state.slider.index);
                // console.log('sl '+this.state.isCard1Showed);

    }

    nextImg = () => {
        let newIndex = this.state.slider.index + 1;

        if ( newIndex < 9 ) { // последний n-слайд + 1  файла дата
            this.setState({
                slider: SliderData.slides[newIndex],
            })
        } else {
            this.setState({
                slider: SliderData.slides[0],
            })
        }
        // console.log(this.state.slider.index);
                // console.log('sl '+this.state.isCard1Showed);

    }


    render() {
        const {slider} = this.state;
        const { soundtrack } = slider.pictureData; 
        // console.log(this.state.slider.index);
        // console.log(this.state.isPinsClosed);

        const NavButtons = () => {
            return(
                <React.Fragment>
                   {
                       this.state.slider.index === 0
                       ?
                       <NavLink to='/eggsPage'>
                           <button className={styles.app__slider__prevSlidePageLeft}>
                               <div className={styles.app__slider_prevSlidePageArrowLeft}/>
                           </button>
                       </NavLink>
                       :
                       <button onClick={ () => this.prevImg() }
                               className={styles.app__slider__prevSlidePageLeft}>
                           <div className={styles.app__slider_prevSlidePageArrowLeft}/>
                       </button>
                   }

                    {
                        // this.state.slider.index >= 1  // для двух слайдов
                        this.state.slider.index >= 8  // для n-слайдов файла дата
                        ?
                        <NavLink to='/lastEggsSlide'>
                            <button className={styles.app__slider__nextSlidePageRight}>
                                <div className={styles.app__slider_nextSlidePageArrowRight}/>
                            </button>
                        </NavLink>
                        :
                        <button onClick={ () => this.nextImg() }
                                className={styles.app__slider__nextSlidePageRight}>
                            <div className={styles.app__slider_nextSlidePageArrowRight}/>
                        </button>
                    }
                </React.Fragment>
            )
        };

        const Audioguide = () => {
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
                        <Player soundtrack={soundtrack.sound} />
                        : null
                    }
                </PlayBtn>
            )
        };

        return (
            <React.Fragment>
                <NavButtons/>
                <Audioguide />

                <EggsImageRender 
                    slide={slider} 
                    index={this.state.slider.index} 
                    isCard1Showed={this.state.isCard1Showed}
                    isCard2Showed={this.state.isCard2Showed}
                    isCard3Showed={this.state.isCard3Showed}
                    isCard4Showed={this.state.isCard4Showed}
                    isCard5Showed={this.state.isCard5Showed}
                    isCard6Showed={this.state.isCard6Showed}
                />
            </React.Fragment>
        );
    }
}

export default EggSlider;