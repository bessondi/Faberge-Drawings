import React from 'react';
import styled from 'styled-components';


const ProgressBar = (props) => {

    // const Bar = styled.div`
    //     position: relative;
    //     bottom: 0;
    //     right: 0;
    //     height: 3px;
    //     /* width: 100%; */
    //     /* pointer-events: none; */
    //     background: #999;
    //     border-radius: 5px;
    //     margin: 0 15%;
    // `;

    // const NavPoint = styled.div`
    //     background-image: url( ${props.imageIcon} );
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: cover;

    //     position: relative;
    //     left: -5%;
    //     bottom: 45px;
    //     border: 1px solid #999;
    //     border-radius: 50%;
    //     height: 25px;
    //     width: 25px;
    //         &:after {
    //             content: "";
    //             position: relative;
    //             bottom: -15px;
    //             left: 7px;
    //             background: #999;
    //             border: solid #999;
    //             border-width: 0 1px 1px 0;
    //             display: inline-block;
    //             padding: 5px;
    //             transform: rotate(45deg);
    //             z-index: -1;
    //         }
    // `;

    // const NavDots = '';

    // return (
    //     <Bar>
    //         <NavPoint imageIcon={props.imageIcon} />
    //     </Bar>
    // )


    const Bar = styled.div`
        position: relative;
        bottom: 0;
        right: 0;
        height: 3px;
        /* width: 100%; */
        /* pointer-events: none; */
        background: #999;
        border-radius: 5px;
        margin: 0 15%;
    `;

    const NavPoint = styled.div`
        background-image: url( ${props.imageIcon} );
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        left: -5%;
        bottom: 45px;
        border: 1px solid #999;
        border-radius: 50%;
        height: 25px;
        width: 25px;
            &:after {
                content: "";
                position: relative;
                bottom: -15px;
                left: 7px;
                background: #999;
                border: solid #999;
                border-width: 0 1px 1px 0;
                display: inline-block;
                padding: 5px;
                transform: rotate(45deg);
                z-index: -1;
            }
    `;


    return (
        <Bar>
            <NavPoint imageIcon={props.imageIcon} />
        </Bar>
    )
};

export default ProgressBar;