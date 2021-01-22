import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBInput} from "mdbreact";
import './Footer.css';

const Footer = () => {
    return (
        <section id='footer' >
        <MDBFooter color="#fad586" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className='footer-list'>

                    <MDBCol md="3">
                        <h5 className="title">ADDRESS</h5>
                        <p>500 Unity Bank Road</p>
                        <p>Adebayo Ado-Ekiti, Ekiti</p>
                        <p>+1 (844) 123 456 78</p>
                          <p>info@stalegmall.org</p>

                    </MDBCol>

                    <MDBCol md="3">
                        <h5 className="title">STORE</h5>
                        <ul class="list-unstyled mb-0">
                            <li className="list-unstyled">
                                <a href="#!">Shop All</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Shipping & Return</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Store Policy</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">FAQ</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">OPENING HOURS</h5>
                        <p>Mon - Fri: 7am - 10pm</p>
                        <p>Saturday: 8am - 10pm </p>
                        <p>Sunday: 8am - 11pm</p>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">NEWSLETTER</h5>
                        <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
                        <MDBInput hint="Your e-mail" type="email" icon="bell"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: LazyWeirdVeevDev.
                </MDBContainer>
            </div>
        </MDBFooter>
        </section>
    );
}

export default Footer;