import React, { Component } from "react";
import './SideNav.css';
import {MDBNavbarToggler} from "mdbreact";

class SideNav extends Component {
    state = {
        sideNavLeft: false,
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        return (
            <div id="wrapper" className="active">
                <div id="sidebar-wrapper">
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <ul id="sidebar_menu" className="sidebar-nav">
                        <li className="sidebar-brand"><a id="menu-toggle" href="#">Categories</a>
                        </li>
                    </ul>
                    <ul className="sidebar-nav" id="sidebar">
                        <li><a>Food Cupboard</a></li>
                        <li><a>Organic Items</a></li>
                        <li><a>Baby Products</a></li>
                        <li><a>Household Cleaning</a></li>
                        <li><a>Drinks</a></li>
                        <li><a>Home&Kitchen</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideNav;