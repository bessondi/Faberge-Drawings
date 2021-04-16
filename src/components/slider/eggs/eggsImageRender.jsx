import React, {Component} from 'react';
import styled from 'styled-components';


class EggsImageRender extends Component {
  state = {
    isCard1Showed: this.props.isCard1Showed,
    isCard2Showed: this.props.isCard2Showed,
    isCard3Showed: this.props.isCard3Showed,
    isCard4Showed: this.props.isCard4Showed,
    isCard5Showed: this.props.isCard5Showed,
    isCard6Showed: this.props.isCard6Showed,
  };


  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isCard1Showed: nextProps.true > this.props.false,
      isCard2Showed: nextProps.true > this.props.false,
      isCard3Showed: nextProps.true > this.props.false,
      isCard4Showed: nextProps.true > this.props.false,
      isCard5Showed: nextProps.true > this.props.false,
      isCard6Showed: nextProps.true > this.props.false,
    });
  }

  showCard1 = () => {
    this.setState({
      isCard1Showed: !this.state.isCard1Showed,
    });
  }

  showCard2 = () => {
    this.setState({
      isCard2Showed: !this.state.isCard2Showed,
    });
  }

  showCard3 = () => {
    this.setState({
      isCard3Showed: !this.state.isCard3Showed,
    });
  }

  showCard4 = () => {
    this.setState({
      isCard4Showed: !this.state.isCard4Showed,
    });
  }

  showCard5 = () => {
    this.setState({
      isCard5Showed: !this.state.isCard5Showed,
    });
  }

  showCard6 = () => {
    this.setState({
      isCard6Showed: !this.state.isCard6Showed,
    });
  }


  render() {
    const {slide} = this.props;
    const {cropSize, textArea} = slide.pictureData; //parts, partSize,
    const {pins} = slide;

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
        line-height: 1.2rem;
        font-family: "Circe-Light", "Helvetica Neue", sans-serif;
      `;

      return (
        <div key={id}>
          <PinDot key={pin.id}
                  onClick={
                    pin.card === 'card-1' ? this.showCard1 : null ||
                    pin.card === 'card-2' ? this.showCard2 : null ||
                    pin.card === 'card-3' ? this.showCard3 : null ||
                    pin.card === 'card-4' ? this.showCard4 : null ||
                    pin.card === 'card-5' ? this.showCard5 : null ||
                    pin.card === 'card-6' ? this.showCard6 : null
                  }
                  toggle={
                    (this.state.isCard1Showed && pin.card === 'card-1') ? this.state.isCard1Showed : null ||
                    (this.state.isCard2Showed && pin.card === 'card-2') ? this.state.isCard2Showed : null ||
                    (this.state.isCard3Showed && pin.card === 'card-3') ? this.state.isCard3Showed : null ||
                    (this.state.isCard4Showed && pin.card === 'card-4') ? this.state.isCard4Showed : null ||
                    (this.state.isCard5Showed && pin.card === 'card-5') ? this.state.isCard5Showed : null ||
                    (this.state.isCard6Showed && pin.card === 'card-6') ? this.state.isCard6Showed : null
                  }
          />

          <PinDescription
            toggle={
              (this.state.isCard1Showed && pin.card === 'card-1') ? this.state.isCard1Showed : null ||
              (this.state.isCard2Showed && pin.card === 'card-2') ? this.state.isCard2Showed : null ||
              (this.state.isCard3Showed && pin.card === 'card-3') ? this.state.isCard3Showed : null ||
              (this.state.isCard4Showed && pin.card === 'card-4') ? this.state.isCard4Showed : null ||
              (this.state.isCard5Showed && pin.card === 'card-5') ? this.state.isCard5Showed : null ||
              (this.state.isCard6Showed && pin.card === 'card-6') ? this.state.isCard6Showed : null
            }
            side={pin.side} vertical={pin.vertical}
          >
            <PinImage/>
            <PinText>
              {pin.info}
              {/* <TextGradientBottom/> */}
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
}

export default EggsImageRender;