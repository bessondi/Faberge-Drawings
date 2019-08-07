import React, {Component} from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import Player from "./player/player";


class ImageRender extends Component {

    // скролл по картинке
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
        const { parts, partSize, fullSize, cropSize, textArea, soundtrack } = slide.pictureData;
        const count = this.props.slide.index;
        console.log(count);


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
                background: #fff;
                width: 300px;
                height: 100px;
                color: #fff;
                background: transparent;
                font-size: 0.7rem;
            `;
            return (
                <PictureTitle>
                    <h3>{textArea.author}</h3>
                    <h2>{textArea.pictureTitle}</h2><br/>
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
                background: #f5f5f5;
                // background: #000;
            `;
            const TextArea = styled.p`
                display: flex;
                align-items: center;
                padding: 20px 50px 20px 40px; 
                font-weight: 500;
                font-size: 1.1rem;
                color: #000;
                // color: #fff;
                text-align: justify;
                line-height: 1.6rem;
            `;

            return (
                <DescriptionArea>

                    <TextArea>{textArea.info}</TextArea>

                    {/*{*/}
                        {/*soundtrack ?*/}
                        {/*<Player soundtrack={soundtrack.sound} soundtrackTitle={soundtrack.title}/>*/}
                        {/*:*/}
                        {/*null*/}
                    {/*}*/}

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
                            :
                            null
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
            `;
            return (
                <React.Fragment>
                    <ViewportGradient/>
                    <Background/>
                    <PictureTitle/>
                    <AmbientSounds/>

                    <PictureDescription/>
                </React.Fragment>
            );
        };

        const DetailedView = () => {
            const MosaicField = styled.div`
            padding-right: 30%;
            width: ${fullSize.width}px;
            height: ${fullSize.height}px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background-color: #000;
            `;
            const MosaicParts = parts.map((image, id) => {
                const Mosaic = styled.div`
                width: ${partSize.width}px;
                height: ${partSize.height}px;
                background-image: url(${parts[id].picture});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            `;
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
            // const RepeatScreen = () => {
            //     const RepeatArea = styled.div`
            //         position: fixed;
            //         right: 0;
            //         top: 0;
            //         width: 100wh;
            //         height: 100vh;
            //         background: #fff;
            //     `;
            //     return(
            //         <div>
            //             <RepeatArea/>
            //             {/*{*/}
            //             {/*count > 10  // для n слайдов файла дата*/}
            //             {/*? <RepeatArea/>*/}
            //             {/*: null*/}
            //             {/*}*/}
            //         </div>
            //     )
            // };

            return (
                <React.Fragment>
                    { cropSize ? <FullImage/> : <DetailedView/> }
                    {/*{ count > 10 ? <RepeatScreen/> : null }*/}
                </React.Fragment>
            );
        };

        return (
            <FullOrDetailed/>
        );
    }
}

export default ImageRender;