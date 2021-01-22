import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip } from 'mdbreact';
import './HeaderCard.css';
import eggs from './SalesImages/eggs.jpg';
import apple from './SalesImages/apple.jpg';
import banana from './SalesImages/banana.jpg';
import strawberry from './SalesImages/strawberry.jpg';
import tomatoes from './SalesImages/tomatoes.jpg';
const CardList = () => {
    return (
        <section id="grab" className='text-center my-5'>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Grab N Go</h2>
            <div className="row cardlist">
                <MDBCol md='3' className='item-wrap' >
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={eggs}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Eggs</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#1300</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap' >
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={banana}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Banana</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#400</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap'>
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={apple}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Apple</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#1000</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap'>
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={strawberry}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Strawberry</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#2500</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap'>
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={tomatoes}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Tomatoes</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#800</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap' >
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={eggs}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Eggs</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#1300</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap'>
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={banana}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Banana</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#400</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap'>
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={apple}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Apple</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#1000</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap' >
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={strawberry}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Strawberry</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#2500</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3' className='item-wrap' >
                    <MDBCard >
                        <MDBCardImage
                            cascade
                            src={tomatoes}
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>Tomatoes</h5>
                            </a>
                            <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>#800</strong>
                </span>
                                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fab fa-opencart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>{' '}
                                    <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Wishlist</span>
                  </MDBTooltip>
                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
        </section>
    );
};

export default CardList;