import React, { Component } from 'react';
import './preloaderStyle.css';

export default class Preloader extends Component{
    constructor(props){
        super(props);
        this.viewRef = React.createRef();
    }

     componentWillUnmount(){
       this.viewRef.current.style.opacity = 0;
    }

    render(){
        return(
            <div ref={this.viewRef} className="preloader">
                <svg className="preloader__image_animate" viewBox="25 25 50 50" >
                    <circle className="preloader__image__loaderPath" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="2" />
                </svg>
            </div>
        );
    }
   
}