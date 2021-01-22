import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import './Services.css';

const Services = () => {
    return (
        <section id='services' className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Our Services
            </h2>
            <MDBRow className='service-list'>
                <MDBCol md="4">
                    <MDBIcon icon="shopping-bag" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Pick Up Option</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="truck" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Same Day Delivery</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="dollar-sign" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Affordable Prices</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Thanks to our affordable pricing policy, our customers don’t have to overpay for the products they need.
                    </p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Services;