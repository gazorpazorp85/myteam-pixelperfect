import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import MobileMenu from './MobileMenu';

import logo from '../assets/imgs/logo.svg';
import hamburger from '../assets/imgs/icon-hamburger.svg';

export default class NavBar extends Component {

    state = {
        toggleMobileMenu: false
    }

    onToggleMobileMenu = (ev) => {
        ev.stopPropagation();
        this.setState(prevState => ({ toggleMobileMenu: !prevState.toggleMobileMenu }))
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="flex main-container nav-bar-subcontainer">
                    <div className="flex logo-menu-container">
                        <div className="logo-container">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="menu-btn">
                            <img src={hamburger} onClick={this.onToggleMobileMenu} alt=""/>
                        </div>
                    </div>
                    <CSSTransition
                        in={this.state.toggleMobileMenu}
                        timeout={700}
                        classNames="modal"
                        unmountOnExit>
                        <MobileMenu onToggleMobileMenu={this.onToggleMobileMenu} />
                    </CSSTransition>
                    <div className="full-menu">
                        <div className="flex">
                            <NavLink className="pointer home-button" to="/">home</NavLink>
                            <NavLink className="pointer about-button" to="/about">about</NavLink>
                        </div>
                        <NavLink to="/contact">
                            <div className="flex center align-center pointer btn bar-btn">
                                <span>contact us</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}