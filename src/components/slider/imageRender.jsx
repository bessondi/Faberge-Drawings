import React, {useEffect} from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import Player from "./player/player";
// import ProgressBar from '../progressbar';
// import TextGradient from '../stickyTextGradient';


export default function ImageRender({slide}) {
  const {position, parts, partSize, cropSize, textArea, soundtrack} = slide.pictureData;

  useEffect(() => {
    // скролл к персонажу на картинке при рендере
    if (position) {
      window.scrollTo({
        top: position.top,
        left: position.left,
      });
    }
  });

  const ViewportGradient = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30%;
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
      /* text-align: justify; */

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

        {/*{*/}
        {/*soundtrack ?*/}
        {/*<Player soundtrack={soundtrack.sound} soundtrackTitle={soundtrack.title}/>*/}
        {/*:*/}
        {/*null*/}
        {/*}*/}

        {/*<ProgressBar imageIcon={icon} />*/}

      </DescriptionArea>
    );
  };

  const AmbientSounds = () => {
    const PlayBtn = styled.div`
      position: fixed;
      right: 33%;
      bottom: 50px;
    `;
    return (
      <PlayBtn>
        {
          soundtrack ?
            <Player soundtrack={soundtrack.sound}/>
            : null
        }
      </PlayBtn>
    )
  };

  // вывести изображение целиком или детализировано
  const FullImage = () => {
    const Background = styled.div`
      background-image: url(${cropSize});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 70%;
      height: 100vh;
      margin-right: 30%;
      animation-duration: 1s;
      animation-name: showPic;
    `;
    const BlackField = styled.div`
      background-color: #000;
    `;
    return (
      <BlackField>
        <Background/>
        <ViewportGradient/>
        <PictureTitle/>
        <AmbientSounds/>
        <PictureDescription/>
      </BlackField>
    );
  };

  const DetailedView = () => {
    const MosaicField = styled.div`
      padding-right: 30%;
      width: ${partSize.width * 4}px;
      height: ${partSize.height * 4}px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: #000;
    `;

    const MosaicParts = parts.map((image, id) => {
      const Mosaic = () => {
        return (
          <img src={parts[id].picture}
               alt=""
               style={{
                 display: 'block',
                 width: partSize.width,
                 height: partSize.height,
                 animationDuration: .3 + 's',
                 animationName: 'showPic'
               }}
          />
        )
      };
      return (
        <LazyLoad width={partSize.width} height={partSize.height} key={id}>
          <Mosaic/>
        </LazyLoad>
      );
    });

    return (
      <MosaicField>
        {MosaicParts}
        <ViewportGradient/>
        <PictureTitle/>
        <AmbientSounds/>

        <PictureDescription/>
      </MosaicField>
    );
  };

  const FullOrDetailed = () => {
    return (
      <React.Fragment>
        {cropSize ? <FullImage/> : <DetailedView/>}
      </React.Fragment>
    );
  };

  return (
    <FullOrDetailed/>
  );
}
// }

// export default ImageRender;