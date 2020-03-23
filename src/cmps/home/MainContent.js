import React from 'react';

import pinkRectangle from '../../assets/imgs/pink-rectangle.png';
import experiencedIcon from '../../assets/imgs/experienced-icon.png';
import easyIcon from '../../assets/imgs/easy-icon.png';
import enhanchedIcon from '../../assets/imgs/enhanched-icon.png';

export default function MainContent() {

    return (
        <div className="flex main-content">
            <div className="main-container">
                <img src={pinkRectangle} className="main-content-rectangle" alt=""/>
                <div className="flex main-content-container">
                    <div className="main-content-title">
                        <h2>Build & manage distributed teams like no one else.</h2>
                    </div>
                    <div>
                        <div className="flex description-container">
                            <div className="main-content-icon-container">
                                <img src={experiencedIcon} alt="" />
                            </div>
                            <div className="flex column description-text-container">
                                <div className="main-content-description-title">
                                    <h3>Experienced Individuals</h3>
                                </div>
                                <p className="main-content-description-text">
                                    Our network is made up of highly experienced professionals who are
                                    passionate about what they do.
                                </p>
                            </div>
                        </div>
                        <div className="flex description-container">
                            <div className="main-content-icon-container">
                                <img src={easyIcon} alt="" />
                            </div>
                            <div className="flex column description-text-container">
                                <div className="main-content-description-title">
                                    <h3>Easy to Implement</h3>
                                </div>
                                <p className="main-content-description-text">
                                    Our processes have been refined over years of implementation
                                    meaning our teams always deliver.
                                </p>
                            </div>
                        </div>
                        <div className="flex description-container">
                            <div className="main-content-icon-container">
                                <img src={enhanchedIcon} alt="" />
                            </div>
                            <div className="flex column description-text-container">
                                <div className="main-content-description-title">
                                    <h3>Enhanced Productivity</h3>
                                </div>
                                <p className="main-content-description-text">
                                    Our customized platform with in-built analytics
                                    helps you manage your distributed teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}