import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


import ImageRender from "../imageRender";

import SliderData from '../sliderData';
import styles from './sliderStyles.module.css';


class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: SliderData.slides[0],
        }
    }

    prevImg = () => {
        let newIndex = this.state.slider.index - 1;

        if (newIndex < 0) {
            this.setState({
                slider: SliderData.slides[0],
            })
        } else {
            this.setState({
                slider: SliderData.slides[newIndex],
            })
        }
        // console.log(this.state.slider.index);
    }

    nextImg = () => {
        let newIndex = this.state.slider.index + 1;

        if ( newIndex < 13 ) { // последний слайд - на 1 >
            this.setState({
                slider: SliderData.slides[newIndex],
            })
        } else {
            this.setState({
                slider: SliderData.slides[0]
            })
        }
        // console.log(this.state.slider.index);
    }


    render() {
        const {slider} = this.state;

        // console.log(this.state.slider.index);

        const NavButtons = () => {
            return(
                <React.Fragment>
                   {
                       this.state.slider.index === 0
                       ?
                       <NavLink to='/'>
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
                        this.state.slider.index >= 12  // для n слайдов файла дата
                        ?
                        <NavLink to='/lastSlide'>
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


        return (
            <React.Fragment>

                <ImageRender slide={slider} index={this.state.slider.index} />
                <NavButtons/>

            </React.Fragment>
        );
    }
}

export default Slider;