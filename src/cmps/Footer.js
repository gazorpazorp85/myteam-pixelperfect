import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/imgs/logo.svg';

import { ReactComponent as IconFacebook } from '../assets/imgs/icon-facebook.svg';
import { ReactComponent as IconPinterest } from '../assets/imgs/icon-pinterest.svg';
import { ReactComponent as IconTwitter } from '../assets/imgs/icon-twitter.svg';

export default function Footer() {

    return (
        <div className="footer">
            <div className="main-container">
                <div className="flex footer-subcontainer">
                    <div className="flex logo-address-container">
                        <div className="flex column footer-menu">
                            <div className="footer-logo-container">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="flex footer-menu-buttons">
                                <NavLink className="pointer home-button" to="/">home</NavLink>
                                <NavLink className="pointer about-button" to="/about">about</NavLink>
                            </div>
                        </div>
                        <div className="address-container">
                            987  Hillcrest Lane<br></br>
                            Irvine, CA<br></br>
                            California 92714<br></br>
                            Call Us : 949-833-7432<br></br>
                        </div>
                    </div>
                    <div className="flex icons-copyright-container">
                        <div className="flex social-container">
                            <div className="pointer icon-container">
                                <IconFacebook className="icon" />
                            </div>
                            <div className="pointer icon-container">
                                <IconPinterest className="icon" />
                            </div>
                            <div className="pointer icon-container">
                                <IconTwitter className="icon" />
                            </div>
                        </div>
                        <div className="copyright-container">
                            Copyright 2020. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}