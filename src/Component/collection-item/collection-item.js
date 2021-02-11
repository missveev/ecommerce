import React from 'react';
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCol, MDBTooltip} from "mdbreact";
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";
const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
    <div className="banner">
        <MDBCol style={{ width: "18rem"}} >
            <MDBCard>
                <img
                    src={imageUrl}
                    alt='product photo'
                    height={200}
                />
                    <MDBCardBody cascade className='text-center'>
                        <a href='#!' className='text-muted'>
                            <h5>{name}</h5>
                        </a>
                        <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>N{price}</strong>
                </span>
                            <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3'/>
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                <MDBTooltip domElement placement='top'>
                    <i onClick={()=> addItem(item)} className='grey-text fab fa-opencart mr-3'/>
                    <span >Added to Cart</span>
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
        </div>
)};
const mapDispatchToProps = dispatch =>({
    addItem: item=> dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);