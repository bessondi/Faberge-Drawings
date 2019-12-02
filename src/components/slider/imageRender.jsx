import React, {Component} from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import Player from "./player/player";
import img from '../../media/images/Aivazovsky.jpg'
import ProgressBar from '../progressbar';
// import TextGradient from '../stickyTextGradient';


class ImageRender extends Component {

    // скролл к персонажу на картинке при рендере
    componentDidUpdate() {
        const {slide} = this.props;
        const {position} = slide.pictureData;

        if (position) {
            window.scrollTo({
                top: position.top,
                left: position.left,
            });
        }
    }

    render() {
        const { slide } = this.props;
        const { parts, partSize, cropSize, textArea, soundtrack, icon } = slide.pictureData;
        // const { pins } = slide;
        // const count = this.props.slide.index;
        // console.log(pins);
        

        const ViewportGradient = styled.div`
            background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
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
                /* background: #000; */
            `;

            const TextArea = styled.div`
                display: flex;
                flex-direction: column;
                max-height: 65%;
                align-items: center;
                padding: 20px 50px 20px 40px; 
                font-weight: 500;
                font-size: 1.1rem;
                /* text-align: justify; */
                line-height: 1.6rem;
                overflow-Y: scroll;
                color: #000;
                /* color: #fff; */
                    &::-webkit-scrollbar {
                        width: 0;
                    }
            `;

            const Paragraph = styled.p`
                margin: 10px 0;
            `;

            const StickyTextGradientTop = styled.div`
                /* position: sticky; */
                position: absolute;
                top: 90px;  
                height: 65px;
                width: 100%;
                background: linear-gradient(to bottom,
                    rgba(255 ,255 ,255 , 1) 5%, 
                    rgba(255 ,255 ,255 , 0) 95%
                );
                pointer-events: none;
                /* border:1px solid blue; */
            `;
            const TextGradientTop = () => {
                return(
                    <StickyTextGradientTop/>
                )
            };

            const StickyTextGradientBottom = styled.div`
                /* position: sticky; */
                position: absolute;
                bottom: 90px;  
                height: 65px;
                width: 100%;
                background: linear-gradient(to top,
                    rgba(255 ,255 ,255 , 1) 5%, 
                    rgba(255 ,255 ,255 , 0) 95%
                );
                pointer-events: none;
                /* border:1px solid red; */
            `;
            const TextGradientBottom = () => {
                return(
                    <StickyTextGradientBottom/>
                )
            };


            return (
                <DescriptionArea>

                    <TextGradientTop/>
                        <TextArea>
                            { textArea.info.split('\n').map( (text, id) => <Paragraph key={id}> {text} </Paragraph>) }
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
                        <Player soundtrack={soundtrack.sound} />
                        : null
                    }
                </PlayBtn>
            )
        };


        // const coordinates = pins.map( (data) => {
        
        //     const top = data.coordinateTop;
        //     const left = data.coordinateLeft;  

        //     const ico = data.img;
        //     const txt = data.info;

        //     return(
        //         [top, left, txt, ico ]
        //     )
        // });
        

        // const Pins = coordinates.map( (item, id) => {

        //     let PinDot = styled.button`
        //         display: block;
        //         position: absolute;
        //         top: ${ item[0] -0.8 }%;
        //         left: ${ item[1] -0.8 }%;
        //         width: 30px;
        //         height: 30px;
        //         /* color: #000; */
        //         background: #dadada;
        //         border: 2px solid #fff;
        //         border-radius: 50%;
        //         font-size: 0.7rem;
        //         z-index: 2;
        //         box-shadow: 0 0 10px rgba(0,0,0,0.5);
        //             &:hover {
        //                 background: #a1a1a1;
        //                 /* width: 35px;
        //                 height: 35px;
        //                 top: ${ item[0] - 0.3 }%;
        //                 left: ${ item[1] - 0.3 }%; */
        //             }
        //     `;

        //     let PinDescription = styled.div`
        //         display: flex;
        //         flex-direction: column;
        //         justify-content: space-around;
        //         align-items: center;
        //         margin: 0 auto;
        //         padding: 0;
        //         position: absolute;
        //         top: ${ item[0] }%;
        //         left: ${ item[1] }%;
        //         /* top: 6px;
        //         left: 5px; */
        //         /* width: 300px;
        //         max-width: 600px;
        //         height: 300px;
        //         max-height: 600px; */
        //         /* padding: 20px; */
        //         color: #000;
        //         background: #fff;
        //         /* background-image: url:{}; */
        //         border: 2px solid #dadada;
        //         border-radius: 10px;
        //         /* font-size: 0.8rem; */
        //         z-index: 1;
        //         box-shadow: 0 0 10px rgba(0,0,0,0.5);
        //     `;

        //     let PinImage = styled.div`
        //         background: url( ${ item[3] } );
        //         /* display: block;
        //         position: absolute; */
        //         width: 100%;
        //         /* max-width: 300px; */
        //         height: 150px;
        //         /* outline-width: 0;
        //         outline-color: transparent; */
        //         /* border-radius: 10px; */
        //         /* border: 1px solid #dadada;
        //         border-radius: 50%; */
                
        //         /* max-height: 300px; */
        //         background-position: center;
        //         background-size: cover;
        //         background-repeat: no-repeat;
        //         /* background-attachment: fixed; */
        //     `;

        //     let PinText = styled.p`
        //         width: 300px;
        //         height: 100px;
        //         color: #000;
        //         /* background: #dadada; */
        //         font-size: 0.9rem;
        //         overflow: auto;
        //         margin: 20px;
        //     `;

        //     return(
        //         <React.Fragment>
        //             <PinDot key={id} />
        //             <PinDescription>
        //                 <PinImage/>
        //                 <PinText>
        //                     { item[2] }
        //                 </PinText>
        //             </PinDescription>
        //         </React.Fragment>
        //     )
        // } );
        

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
                    {/* {Pins} */}

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
                    return(
                        <img src={parts[id].picture}
                             alt=""
                             style={{
                                 display: 'block',
                                 width: partSize.width,
                                 height: partSize.height,
                                 animationDuration: .3+'s',
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
                    { cropSize ? <FullImage/> : <DetailedView/> }
                </React.Fragment>
            );
        };

        return (
            <FullOrDetailed/>
        );
    }
}

export default ImageRender;