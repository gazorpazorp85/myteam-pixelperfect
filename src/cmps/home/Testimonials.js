import React from 'react';

import quotes from '../../assets/imgs/quotes.png';
import ovalKady from '../../assets/imgs/oval-kady.png';
import ovalAiysha from '../../assets/imgs/oval-aiysha.png';
import ovalArthur from '../../assets/imgs/oval-arthur.png';

export default function Testimonials() {

    return (
        <div className="flex testimonials">
            <div className="flex column main-container">
                <div className="testimonials-title">
                    <h2>Delivering real results for top companies.
                        Some of our <span className="text-emphasis">success stories.</span></h2>
                </div>
                <div className="flex cards-container">
                    <div className="flex column align-center card-container">
                        <div className="quotes-img-container">
                            <img src={quotes} alt=""/>
                        </div>
                        <div className="flex column align-center card-subcontainer">
                            <p className="card-text">
                                “The team perfectly fit the specialized skill set required.
                                They focused on the most essential features helping us launch the
                                platform eight months faster than planned.”
                                </p>
                            <div className="card-person-name">
                                Kady Baker
                                </div>
                            <div className="card-person-job-title">
                                Product Manager at Bookmark
                                </div>
                            <div className="card-person-img-container">
                                <img src={ovalKady} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="flex column align-center card-container">
                        <div className="quotes-img-container">
                            <img src={quotes} alt=""/>
                        </div>
                        <div className="flex column align-center card-subcontainer">
                            <p className="card-text">
                                “We needed to automate our entire onboarding process.
                                The team came in and built out the whole journey.
                                Since going live, user retention has gone through the roof!”
                                </p>
                            <div className="card-person-name">
                                Aiysha Reese
                                </div>
                            <div className="card-person-job-title">
                                Founder of Manage
                                </div>
                            <div className="card-person-img-container">
                                <img src={ovalAiysha} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="flex column align-center card-container">
                        <div className="quotes-img-container">
                            <img src={quotes} alt=""/>
                        </div>
                        <div className="flex column align-center card-subcontainer">
                            <p className="card-text">
                                “Amazing. Our team helped us build an app that delivered a new experience for hiring
                                a physio. The launch was an instant success with 100k downloads in the first month.”
                                </p>
                            <div className="card-person-name">
                                Arthur Clarke
                                </div>
                            <div className="card-person-job-title">
                                Co-founder of MyPhysio
                                </div>
                            <div className="card-person-img-container">
                                <img src={ovalArthur} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}