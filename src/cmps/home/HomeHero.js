import React from 'react';

export default function HomeHero() {

    return (
        <div className="flex hero">
            <div className="main-container">
                <div className="flex hero-container">
                    <div className="hero-title">
                        <h1>Find the best <span className="hero-emphasis">talent</span></h1>
                    </div>
                    <div className="flex column hero-text-container">
                        <p className="hero-text">
                            Finding the right people and building high performing teams can be hard.
                            Most companies aren’t tapping into the abundance of global talent.
                            We’re about to change that.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}