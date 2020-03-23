import React from 'react';
import { NavLink } from 'react-router-dom';

import closeIcon from '../assets/imgs/close-mobile-menu.png'

export default function mobileMenu(props) {

    return (
        <div className="flex column mobile-menu">
            <div className="flex column mobile-submenu">
                <div className="close-button" onClick={props.onToggleMobileMenu}>
                    <img src={closeIcon} alt=""/>
                </div>
                <NavLink className="mobile-home-button" to="/">home</NavLink>
                <NavLink className="mobile-about-button" to="/about">about</NavLink>
                <NavLink to="/contact">
                    <div className="flex center align-center mobile-bar-btn">
                        <span className="mobile-bar-btn-text">contact us</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}