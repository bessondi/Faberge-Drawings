import React, {Component} from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import Player from "./player/player";


class ImageRender extends Component {

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
        const {slide} = this.props;
        const {parts, partSize, fullSize, cropSize, textArea, soundtrack} = slide.pictureData;

        const PictureTitle = () => {
            const PictureTitle = styled.div`
                position: fixed;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                left: 40px;
                bottom: 50px;
                background: #fff;
                width: 300px;
                height: 80px;
                color: #fff;
                background: transparent;
                font-size: 0.7rem;
                // border: 1px solid white;
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
                background: #fff;
                width: 30%;
                height: 100vh;
            `;
            const TextArea = styled.p`
                display: flex;
                align-items: center;
                padding: 20px 40px 20px 20px; 
                font-weight: 300;
                font-size: 1.1rem;
            `;
            return (
                <DescriptionArea>
                    <TextArea>{textArea.info}</TextArea>

                    { soundtrack ?
                    <Player soundtrack={soundtrack}/>
                        : null }

                    {/*<PlayBtn onClick={playSound}/>*/}

                    {/*{ soundtrack ?*/}
                        {/*<Soundtrack*/}
                            {/*controls controlsList="nodownload"*/}
                            {/*// preload='none'*/}
                            {/*src={soundtrack}>*/}
                        {/*</Soundtrack>*/}
                        {/*: null }*/}

                </DescriptionArea>
            );
        };

        // вывести изображение целиком или детализировано
        const ViewportGradient = styled.div`
            background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
            position: fixed;
            bottom: 0;
            left: 0;
            height: 25%;
            width: 70%;
        `;
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
            background-color: gray;
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
}

export default ImageRender;