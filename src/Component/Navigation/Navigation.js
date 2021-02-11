import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {auth} from "../../Firebase/firebase.utils";

const Navigation = ({currentUser,hidden}) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className='navbar-brand' to="/">
                STALEGMALL
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to='/shop'>SHOP</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/shop'>CONTACT</Link>
                    </li>

                    <li className="nav-item">
                        {
                            currentUser ?
                                <Link className='nav-link' onClick={() => auth.signOut()} to='#'>SIGN OUT</Link>
                                :
                                <Link className='nav-link' to='/signin'>SIGN IN</Link>
                        }
                    </li>
                    <li className="nav-item">
                        <CartIcon/>
                    </li>
                </ul>
                {hidden ? null: <CartDropdown/>}
            </div>
        </div>
    </nav>
);
const mapStateToProps = ({user: {currentUser}, cart:{hidden}})=> ({
    currentUser,
    hidden
});
export default  connect(mapStateToProps)(Navigation);