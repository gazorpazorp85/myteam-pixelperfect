import React from 'react';

import NavBar from '../cmps/NavBar';
import CallToAction from '../cmps/CallToAction';
import Footer from '../cmps/Footer';

import AboutHero from '../cmps/about/AboutHero';
import Directors from '../cmps/about/Directors';
import Clients from '../cmps/about/Clients';

export default function About() {

    return (
        <div className="flex column about">
            <NavBar />
            <AboutHero />
            <Directors />
            <Clients />
            <CallToAction />
            <Footer />
        </div>
    )
}