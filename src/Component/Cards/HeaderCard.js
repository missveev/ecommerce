import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardFooter, MDBTooltip } from 'mdbreact';
import './HeaderCard.css';
import SALES_DATA from "./SalesProductData";
class HeaderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SALES_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <section id="deals" className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold text-center my-5'>WEEKLY DEALS</h2>
                <div className="row banner">
                    {
                        collections.map(({id, productName, image, Price}) => (
                            <MDBCol md='2' key={id}>
                                <MDBCard>
                                    <MDBCardImage
                                        cascade
                                        src={image}
                                        top
                                        alt='sample photo'
                                    />
                                    <MDBCardBody cascade className='text-center'>
                                        <a href='#!' className='text-muted'>
                                            <h5>{productName}</h5>
                                        </a>
                                        <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>{Price}</strong>
                </span>
                                            <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3'/>
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                                <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3'/>
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                                <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart'/>
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                                        </MDBCardFooter>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))}
                </div>
            </section>
        );
    }
}

export default HeaderCard;