import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


export default function ImageRender({slide, ...eggCards}) {

  const [cards, setCards] = useState(eggCards);
  const {
    isCard1Showed,
    isCard2Showed,
    isCard3Showed,
    isCard4Showed,
    isCard5Showed,
    isCard6Showed
  } = cards;

  useEffect(() => {
    setCards({
      isCard1Showed: false,
      isCard2Showed: false,
      isCard3Showed: false,
      isCard4Showed: false,
      isCard5Showed: false,
      isCard6Showed: false
    })
  }, [slide]);

  const {cropSize, textArea} = slide.pictureData; //parts, partSize,
  const {pins} = slide;


  const showCard1 = () => {
    setCards({...cards, isCard1Showed: !isCard1Showed});
  }
  const showCard2 = () => {
    setCards({...cards, isCard2Showed: !isCard2Showed});
  }
  const showCard3 = () => {
    setCards({...cards, isCard3Showed: !isCard3Showed});
  }
  const showCard4 = () => {
    setCards({...cards, isCard4Showed: !isCard4Showed});
  }
  const showCard5 = () => {
    setCards({...cards, isCard5Showed: !isCard5Showed});
  }
  const showCard6 = () => {
    setCards({...cards, isCard6Showed: !isCard6Showed});
  }


  const ViewportGradient = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    position: fixed;
    bottom: 0;
    left: 0;
    height: 35%;
    width: 70%;
  `;
  const PictureTitle = () => {
    const PictureTitle = styled.div`
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      left: 40px;
      bottom: 30px;
      width: 300px;
      height: 100px;
      color: #fff;
      background: transparent;
      font-size: 0.7rem;
      font-family: "Circe-Light", "Helvetica Neue", sans-serif;
    `;
    return (
      <PictureTitle>
        <h3>{textArea.author}</h3>
        <br/>
        <h2>{textArea.pictureTitle}</h2>
        <br/>
        <p>{textArea.year}</p>
        <p>{textArea.typeOfCanvas}</p>
      </PictureTitle>
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
      z-index: 10;
      background: #fff;
      font-family: "Circe-Light", "Helvetica Neue", sans-serif;
    `;

    const TextArea = styled.div`
      display: flex;
      flex-direction: column;
      max-height: 65%;
      align-items: center;
      padding: 20px 50px 20px 40px;
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.6rem;
      overflow-Y: scroll;
      color: #000;

      &::-webkit-scrollbar {
        width: 0;
      }
    `;

    const Paragraph = styled.p`
      margin: 10px 0;
    `;

    const StickyTextGradientTop = styled.div`
      position: absolute;
      top: 90px;
      height: 65px;
      width: 100%;
      background: linear-gradient(to bottom,
      rgba(255, 255, 255, 1) 5%,
      rgba(255, 255, 255, 0) 95%);
      pointer-events: none;
    `;
    const TextGradientTop = () => {
      return (
        <StickyTextGradientTop/>
      )
    };

    const StickyTextGradientBottom = styled.div`
      position: absolute;
      bottom: 90px;
      height: 65px;
      width: 100%;
      background: linear-gradient(to top,
      rgba(255, 255, 255, 1) 5%,
      rgba(255, 255, 255, 0) 95%);
      pointer-events: none;
    `;
    const TextGradientBottom = () => {
      return (
        <StickyTextGradientBottom/>
      )
    };

    return (
      <DescriptionArea>
        <TextGradientTop/>
        <TextArea>
          {textArea.info.split('\n').map((text, id) => <Paragraph key={id}> {text} </Paragraph>)}
        </TextArea>
        <TextGradientBottom/>
      </DescriptionArea>
    );
  };

  const Pins = pins.map((pin, id) => {

    let PinDot = styled.button`
      /* display: flex; */
      position: absolute;
      top: ${pin.coordinateTop - 0.8}%;
      left: ${pin.coordinateLeft - 0.8}%;
      width: 25px;
      height: 25px;
      border: 2px solid #fff;
      border-radius: 50%;
      font-size: 0.7rem;
      z-index: 12;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      &:hover {
        background: #a1a1a1;
        // width: 30px;
        // height: 30px;
          // top: ${pin.coordinateTop - 1.1}%;
          // left: ${pin.coordinateLeft - 1.1}%;
      }

      ${props => {
        if (props.toggle) {
          return `
            background: #7f7f7f;
              &::before {
                content: '\\d7';
                color: #fff;
                font-size: 1.4rem;
                display: flex;
                justify-content: center;
                line-height: 60%;
              }
          `;
        } else {
          return `
            background: #dadada;
          `;
        }
      }}
    `;

    let PinDescription = styled.div`
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      margin: 0;
      padding: 0;
      position: absolute;
        /* top: ${pin.coordinateTop}%; */
        /* left: ${pin.coordinateLeft}%; */
      color: #000;
      background: #fff;
      border: 2px solid #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      z-index: 11;


      ${props => { // show pin
        if (props.toggle) {
          return `
              display: flex;   
           `;
        } else {
          return `
              display: none;  
          `;
        }
      }} /* ${props => { // show pin
        if (props.animate) {
          return `
              animation-duration: .5s;
              animation-name: showPic;
          `;
        }
      }} */ ${props => { // left pin
        if (props.side === 'left') {
          return `
              left: calc(${pin.coordinateLeft}% - 340px);
            `;
        } else if (props.side === 'right') {
          return `
              left: ${pin.coordinateLeft}%;
            `;
        }
      }}

      ${props => { // bottom pin
        if (props.vertical === 'bottom') {
          return `
              top: calc(${pin.coordinateTop}% - 150px);
            `;
        } else if (props.vertical === 'top') {
          return `
              top: ${pin.coordinateTop}%;
            `;
        }
      }}
    `;

    let PinImage = styled.div`
      background: url(${pin.img});
      width: 80%;
      height: 150px;
      border-radius: 8px 0 0 8px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `;

    let PinText = styled.p`
      width: 300px;
      height: 125px;
      font-size: 0.9rem;
      overflow: auto;
      margin: 10px 20px;
      line-height: 1.1rem;
      font-family: "Circe-Light", "Helvetica Neue", sans-serif;
    `;

    const pinToggleProps = (isCard1Showed && pin.card === 'card-1')
      ? isCard1Showed : (isCard2Showed && pin.card === 'card-2')
        ? isCard2Showed : (isCard3Showed && pin.card === 'card-3')
          ? isCard3Showed : (isCard4Showed && pin.card === 'card-4')
            ? isCard4Showed : (isCard5Showed && pin.card === 'card-5')
              ? isCard5Showed : (isCard6Showed && pin.card === 'card-6')
                ? isCard6Showed : null

    return (
      <div key={id}>
        <PinDot key={pin.id}
                onClick={
                  pin.card === 'card-1'
                    ? showCard1 : pin.card === 'card-2'
                    ? showCard2 : pin.card === 'card-3'
                      ? showCard3 : pin.card === 'card-4'
                        ? showCard4 : pin.card === 'card-5'
                          ? showCard5 : pin.card === 'card-6'
                            ? showCard6
                            : null
                }
                toggle={pinToggleProps}
        />

        <PinDescription
          toggle={pinToggleProps}
          side={pin.side}
          vertical={pin.vertical}
        >
          <PinImage/>
          <PinText>
            {pin.info}
          </PinText>
        </PinDescription>
      </div>
    )
  });

  const FullImage = () => {
    const Background = styled.div`
      background-image: url(${cropSize});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 70%;
      height: 100vh;
      margin-right: 30%;
      background-color: #dadada;
      /* animation-duration: .3s; */
      /* animation-name: showPic; */
    `;
    const BlackField = styled.div`
      background-color: #dadada;
    `;
    return (
      <BlackField>
        <Background/>
        <ViewportGradient/>
        <PictureTitle/>
        {Pins}
        <PictureDescription/>
      </BlackField>
    );
  };

  return (
    <FullImage/>
  );
}
