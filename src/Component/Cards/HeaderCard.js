import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";
import {MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardFooter, MDBTooltip} from 'mdbreact';
import './HeaderCard.css';
import SALES_DATA from "./SalesProductData";

const HeaderCard = ({addItem}) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        setCollections(SALES_DATA);
    }, [])

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
                  <strong>N{Price}</strong>
                </span>
                                        <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3'/>
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                            <MDBTooltip domElement placement='top'>
                    <i onClick={() => addItem({id, name: productName, imageUrl: image, price: Price})} className='grey-text fab fa-opencart mr-3'/>
                    <span>Added to Cart</span>
                  </MDBTooltip>{' '}
                                            <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart'/>
                    <span>Added to Wishlist</span>
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
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(HeaderCard);
