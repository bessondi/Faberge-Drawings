import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavButtons extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //
    //     }
    // }

    render() {
        return(
            <React.Fragment>
                <NavLink to={this.props.prevPath}>
                    <button className='prevSlidePageLeft'>
                        <div className='prevSlidePageArrowLeft'/>
                    </button>
                </NavLink>

                <NavLink to={this.props.nextPath}>
                    <button className='nextSlidePageRight'>
                        <div className='nextSlidePageArrowRight'/>
                    </button>
                </NavLink>
            </React.Fragment>
        );
    }
}

export default NavButtons;