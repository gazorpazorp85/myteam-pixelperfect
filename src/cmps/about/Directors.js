import React from 'react';

import ovalNikita from '../../assets/imgs/oval-nikita.png';
import ovalCristian from '../../assets/imgs/oval-cristian.png';
import ovalCruz from '../../assets/imgs/oval-cruz.png';
import ovalDrake from '../../assets/imgs/oval-drake.png';
import ovalGriffin from '../../assets/imgs/oval-griffin.png';
import ovalAden from '../../assets/imgs/oval-aden.png';
import plus from '../../assets/imgs/plus.png';

export default function Directors() {
    return (
        <div className="directors">
            <div className="main-container">
                <div className="flex column directors-subcontainer">
                    <div className="directors-title-container">
                        <h2>Meet the directors</h2>
                    </div>
                    <div className="flex directors-cards-container">
                        <div className="flex column directors-card">
                            <div className="directors-img-container">
                                <img src={ovalNikita} alt=""/>
                            </div>
                            <div className="directors-name">
                                Nikita Mars
                            </div>
                            <div className="directors-job-title">
                                Founder & CEO
                            </div>
                            <div className="flex center align-center directors-button">
                                <img src={plus} alt=""/>
                            </div>
                        </div>
                        <div className="flex column directors-card">
                            <div className="directors-img-container">
                                <img src={ovalCristian} alt=""/>
                            </div>
                            <div className="directors-name">
                                Cristian Duncan
                            </div>
                            <div className="directors-job-title">
                                Co-founder & COO
                            </div>
                            <div className="flex center align-center directors-button">
                                <img src={plus} alt=""/>
                            </div>
                        </div>
                        <div className="flex column directors-card">
                            <div className="directors-img-container">
                                <img src={ovalCruz} alt=""/>
                            </div>
                            <div className="directors-name">
                                Cruz Hamer
                            </div>
                            <div className="directors-job-title">
                                Co-founder & CTO
                            </div>
                            <div className="flex center align-center directors-button">
                                <img src={plus} alt=""/>
                            </div>
                        </div>
                        <div className="flex column directors-card">
                            <div className="directors-img-container">
                                <img src={ovalDrake} alt=""/>
                            </div>
                            <div className="directors-name">
                                Cruz Hamer
                            </div>
                            <div className="directors-job-title">
                                Co-founder & CTO
                            </div>
                            <div className="flex center align-center directors-button">
                                <img src={plus} alt=""/>
                            </div>
                        </div>
                        <div className="flex column directors-card">
                            <div className="directors-img-container">
                                <img src={ovalGriffin} alt=""/>
                            </div>
                            <div className="directors-name">
                                Griffin Wise
                            </div>
                            <div className="directors-job-title">
                                Lead Marketing
                            </div>
                            <div className="flex center align-center directors-button">
                                <img src={plus} alt=""/>
                            </div>
                        </div>
                        <div className="flex column directors-card">
                            <div className="directors-img-container">
                                <img src={ovalAden} alt=""/>
                            </div>
                            <div className="directors-name">
                                Aden Allan
                            </div>
                            <div className="directors-job-title">
                                Head of Talent
                            </div>
                            <div className="flex center align-center directors-button">
                                <img src={plus} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}