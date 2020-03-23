import React from 'react';

import experiencedIcon from '../../assets/imgs/experienced-icon.png';
import easyIcon from '../../assets/imgs/easy-icon.png';
import enhanchedIcon from '../../assets/imgs/enhanched-icon.png';

export default function ContactForm() {

    return (
        <div className="contact-form-container">
            <div className="flex main-container contact-form-subcontainer">
                <div className="left-contact-form-container">
                    <div className="contact-title-container">
                        <h1 className="capitalize">contact</h1>
                    </div>
                    <div className="contact-subtitle">Ask about us</div>
                    <div className="contact-form-descriptions-container">
                        <div className="flex align-center contact-form-description-container">
                            <div className="contact-form-description-img-container">
                                <img src={experiencedIcon} alt=""/>
                            </div>
                            <div className="contact-form-description">
                                The quality of our talent network
                            </div>
                        </div>
                        <div className="flex align-center contact-form-description-container">
                            <div className="contact-form-description-img-container">
                                <img src={easyIcon} alt=""/>
                            </div>
                            <div className="contact-form-description">
                                Usage & implementation of our software
                            </div>
                        </div>
                        <div className="flex align-center contact-form-description-container">
                            <div className="contact-form-description-img-container">
                                <img src={enhanchedIcon} alt=""/>
                            </div>
                            <div className="contact-form-description">
                                How we help drive innovation
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-contact-form-container">
                    <input className="text-container" placeholder="Name" type="text" />
                    <input className="text-container" placeholder="Email Address" type="text" />
                    <input className="text-container" placeholder="Company Name" type="text" />
                    <input className="text-container" placeholder="Title" type="text" />
                    <textarea placeholder="Message" />
                    <div className="flex center pointer align-center submit-btn">
                        <span>submit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}