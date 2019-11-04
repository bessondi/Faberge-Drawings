import React from 'react';
import styled from 'styled-components';


const StickyTextGradient = styled.div`
    /* position: sticky; */
    position: absolute;
    bottom: 90px;  
    height: 60px;
    width: 100%;
    background: linear-gradient(to top,
        rgba(255,255,255, 1) 0%, 
        rgba(255,255,255, 0) 95%
    );
    pointer-events: none;
    /* border:1px solid red; */
`;

const TextGradient = () => {
    return(
        <StickyTextGradient/>
    )
};


export default TextGradient;