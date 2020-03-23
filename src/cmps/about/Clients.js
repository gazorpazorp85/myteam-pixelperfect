import React from 'react';

import vergeIcon from '../../assets/imgs/verge-icon.png';
import jakartaIcon from '../../assets/imgs/jakarta-icon.png';
import guardianIcon from '../../assets/imgs/guardian-icon.png';
import techIcon from '../../assets/imgs/techradar-icon.png';
import gadgetsIcon from '../../assets/imgs/gadgets-icon.png';

export default function Clients() {
    return (
        <div className="clients">
            <div className="main-container">
                <div className="flex column clients-container">
                    <div className="clients-title-container">
                        <h2>Some of our clients</h2>
                    </div>
                    <div className="clients-logo-container">
                        <img src={vergeIcon} className="verge-icon" alt=""/>
                        <img src={jakartaIcon} className="jakarta-icon" alt=""/>
                        <img src={guardianIcon} className="guardian-icon" alt=""/>
                        <img src={techIcon} className="tech-icon" alt=""/>
                        <img src={gadgetsIcon} className="gadget-icon" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}