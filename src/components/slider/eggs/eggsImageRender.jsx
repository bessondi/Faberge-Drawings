import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';


class EggsImageRender extends Component {
    state = {
        isCard1Showed: this.props.isCard1Showed,
        isCard2Showed: this.props.isCard2Showed,
        isCard3Showed: this.props.isCard3Showed,
        isCard4Showed: this.props.isCard4Showed,
        isCard5Showed: this.props.isCardS5howed,
    };


    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            isCard1Showed: nextProps.true > this.props.false,
            isCard2Showed: nextProps.true > this.props.false,
            isCard3Showed: nextProps.true > this.props.false,
            isCard4Showed: nextProps.true > this.props.false,
            isCard5Showed: nextProps.true > this.props.false,
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
            isCard5Showed: !this.state.isCard3Showed,
        });
    }


    render() {
        // console.log('props '+this.props.isCard1Showed);  
        // console.log('state '+this.state.isCard1Showed); 

        const { slide } = this.props;
        const { parts, partSize, cropSize, textArea } = slide.pictureData;
        const { pins } = slide;

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
                    <br />
                    <h2>{textArea.pictureTitle}</h2>
                    <br />
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
                return (
                    <StickyTextGradientTop />
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
                return (
                    <StickyTextGradientBottom />
                )
            };

            return (
                <DescriptionArea>
                    <TextGradientTop />
                    <TextArea>
                        {textArea.info.split('\n').map((text, id) => <Paragraph key={id}> {text} </Paragraph>)}
                    </TextArea>
                    <TextGradientBottom />

                    {/*{*/}
                    {/*soundtrack ?*/}
                    {/*<Player soundtrack={soundtrack.sound} soundtrackTitle={soundtrack.title}/>*/}
                    {/*:*/}
                    {/*null*/}
                    {/*}*/}
                </DescriptionArea>
            );
        };


        const Pins = pins.map( (pin, id) => { 

            let PinDot = styled.button`
                /* display: flex; */
                position: absolute;
                top: ${ pin.coordinateTop - 0.8 }%;
                left: ${ pin.coordinateLeft - 0.8 }%;
                width: 25px;
                height: 25px;
                /* color: #000; */
                
                border: 2px solid #fff;
                border-radius: 50%;
                font-size: 0.7rem;
                z-index: 12;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
                    &:hover {
                        background: #a1a1a1;
                        width: 30px;
                        height: 30px;
                        top: ${ pin.coordinateTop - 1.1 }%;
                        left: ${ pin.coordinateLeft - 1.1 }%;
                    }

                ${ props => {
                    if ( props.toggle ) {
                        return `
                            background: #7f7f7f;
                        `;
                    } else {
                        return `
                            background: #dadada;
                        `;
                    }
                }}
            `;

            let PinDescription = styled.div`
                /* display: flex; */
                /* flex-direction: column; */
                /* position:relative;
                top: 10px;
                left: 50px; */

                flex-wrap: nowrap;
                justify-content: space-around;
                align-items: center;
                margin: 0;
                padding: 0;
                position: absolute;
                top: ${ pin.coordinateTop }%;
                left: ${ pin.coordinateLeft }%;
                color: #000;
                background: #fff;
                border: 2px solid #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
                z-index: 11;
                /* animation-duration: 1s;
                animation-name: showPic; */

                ${ props => {
                    if ( props.toggle ) {
                        return `
                            display: flex;
                        `;
                    } else {
                        return `
                            display: none;
                        `;
                    }
                    
                }}
            `;

            let PinImage = styled.div`
                background: url( ${ pin.img } );
                /* display: block;
                position: absolute; */
                width: 80%;
                /* max-width: 300px; */
                height: 150px;
                border-radius: 8px 0 0 8px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            `;

            let PinText = styled.p`
                width: 300px;
                height: 125px;
                /* color: #000; */
                font-size: 0.9rem;
                overflow: auto;
                margin: 10px 20px ;
                /* text-align: center; */
            `;

            // const StickyTextGradientBottom = styled.div`
            //     position: absolute;
            //     bottom: 0;
            //     height: 35px;
            //     width: 160px;
            //     background: linear-gradient(to top,
            //         rgba(255,255,255, 1) 5%, 
            //         rgba(255,255,255, 0) 95%
            //     );
            //     pointer-events: none;
            //     /* border:1px solid red; */
            // `;

            // const TextGradientBottom = () => {
            //     return (
            //         <StickyTextGradientBottom />
            //     )
            // };

            return (
                <div key={id}>

                    <PinDot key={pin.id}
                        onClick={ 
                            pin.card === 'card-1' ? this.showCard1 : null ||
                            pin.card === 'card-2' ? this.showCard2 : null ||
                            pin.card === 'card-3' ? this.showCard3 : null ||
                            pin.card === 'card-4' ? this.showCard4 : null ||
                            pin.card === 'card-5' ? this.showCard5 : null
                        } 
                        toggle={ 
                            (this.state.isCard1Showed && pin.card === 'card-1') ? this.state.isCard1Showed : null ||
                            (this.state.isCard2Showed && pin.card === 'card-2') ? this.state.isCard2Showed : null ||
                            (this.state.isCard3Showed && pin.card === 'card-3') ? this.state.isCard3Showed : null ||
                            (this.state.isCard4Showed && pin.card === 'card-4') ? this.state.isCard4Showed : null ||
                            (this.state.isCard5Showed && pin.card === 'card-5') ? this.state.isCard5Showed : null
                        } 
                    />

                    <PinDescription 
                        toggle={ 
                            (this.state.isCard1Showed && pin.card === 'card-1') ? this.state.isCard1Showed : null ||
                            (this.state.isCard2Showed && pin.card === 'card-2') ? this.state.isCard2Showed : null ||
                            (this.state.isCard3Showed && pin.card === 'card-3') ? this.state.isCard3Showed : null ||
                            (this.state.isCard4Showed && pin.card === 'card-4') ? this.state.isCard4Showed : null ||
                            (this.state.isCard5Showed && pin.card === 'card-5') ? this.state.isCard5Showed : null
                        } 
                    >
                        <PinImage />
                        <PinText>
                            { pin.info }
                            {/* <TextGradientBottom/> */}
                        </PinText>
                    </PinDescription>

                </div>
            )

        } );


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
                //animation-duration: .3s;
                //animation-name: showPic;
            `;
            const BlackField = styled.div`
                background-color: #dadada;
            `;
            return (
                <BlackField>
                    <Background />
                    <ViewportGradient />
                    <PictureTitle />
                    {Pins}
                    <PictureDescription />
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

            const MosaicParts = parts.map( (id) => {
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
                        <Mosaic />
                    </LazyLoad>
                );
            });

            return (
                <MosaicField>
                    {MosaicParts}
                    <ViewportGradient />
                    <PictureTitle />

                    <PictureDescription />
                </MosaicField>
            );
        };

        const FullOrDetailed = () => {
            return (
                <React.Fragment>
                    { cropSize ? <FullImage /> : <DetailedView /> }
                </React.Fragment>
            );
        };

        return (
            <FullOrDetailed />
        );
    }
}

export default EggsImageRender;