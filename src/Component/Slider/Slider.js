import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";
import SLIDER_DATA from "./SliderData";
class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            collections: SLIDER_DATA
        };
    }
render() {
        const {collections} =this.state;
    return (
        <MDBContainer>

                    <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >

                <MDBCarouselInner>
                    {
                        collections.map(({id,caption,image}) =>(

                    <MDBCarouselItem key={id} itemId={id}>
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt="First slide"
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <p className="h3-responsive">{caption}</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    ))}
                </MDBCarouselInner>
            </MDBCarousel>

        </MDBContainer>);
    }
    }

export default Slider;