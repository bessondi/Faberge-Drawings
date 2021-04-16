import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import styles from './lastSlideStyles.module.css';
import repeatBtn from '../../../media/icons/repeatBtn.svg';


export default function LastSlide({img, lastSlideData, pathToStart, pathToHome}) {
  const [section] = useState(lastSlideData)

  const Background = () => {
    const BlackField = styled.div`
      background-color: #000;
    `;
    const Background = styled.div`
      background-image: url(${img});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 70%;
      height: 100vh;
      margin-right: 30%;
      animation-duration: .5s;
      animation-name: showPic;
    `;
    const ViewportGradient = styled.div`
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      bottom: 0;
      left: 0;
      height: 100vh;
      width: 70%;
    `;
    const Return = styled.div`
      position: absolute;
      left: 20%;
      top: 65%;
      display: flex;
      align-items: center;
    `;
    const ReturnText = styled.p`
      font-size: 2rem;
      color: #fff;
      text-decoration: none;
      margin-left: 100px;
      font-family: "Circe-Light", "Helvetica Neue", sans-serif;
    `;
    const Repeat = styled.div`
      position: absolute;
      left: 20%;
      top: 45%;
      display: flex;
      align-items: center;
    `;
    const RepeatBtn = styled.button`
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background-color: transparent;
      border: 4px solid #fff;
      outline: none;
      cursor: pointer;
    `;
    const RepeatArrow = styled.div`
      background-image: url(${repeatBtn});
      position: relative;
      left: 14px;
      width: 35px;
      height: 35px;
    `;
    const RepeatText = styled.p`
      font-size: 2.5rem;
      color: #fff;
      text-decoration: none;
      margin-left: 25px;
      font-family: "Circe-Light", "Helvetica Neue", sans-serif;
    `;

    return (
      <BlackField>
        <Background/>
        <ViewportGradient/>

        <NavLink to={pathToStart}>
          <Repeat className={styles.lastSlidePage__repeatBtn_active}>
            <RepeatBtn className={styles.lastSlidePage__repeatBtn}>
              <RepeatArrow/>
            </RepeatBtn>
            <RepeatText>
              {section.repeat}
            </RepeatText>
          </Repeat>
        </NavLink>

        <NavLink to={pathToHome}>
          <Return>
            <ReturnText>
              {section.return}
            </ReturnText>
          </Return>
        </NavLink>

      </BlackField>
    );
  };

  const PictureDescription = () => {
    const DescriptionArea = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: fixed;
      right: 0;
      top: 0;
      width: 30%;
      height: 100vh;
      background: #f5f5f5;
      font-family: "Circe-Light", "Helvetica Neue", sans-serif;
    `;
    const TextArea = styled.p`
      padding: 20px 50px 20px 40px;
      font-weight: 500;
      font-size: 1.1rem;
      color: #000;
      text-align: justify;
      line-height: 1.6rem;
    `;

    return (
      <DescriptionArea>
        <TextArea>
          {section.info}
          <br/><br/>
          {section.names}
        </TextArea>
      </DescriptionArea>
    );
  };

  return (
    <React.Fragment>
      <Background/>
      <PictureDescription/>
    </React.Fragment>
  )
}
