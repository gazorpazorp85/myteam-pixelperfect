import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CallToAction() {

    return (
        <div className="flex call-to-action">
            <div className="flex main-container call-to-action-container">
                <div className="call-to-action-title">
                    <h2>Ready to get started?</h2>
                </div>
                <NavLink to="/contact">
                    <div className="flex center align-center pointer btn cta-contact">
                        <span>contact us</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}