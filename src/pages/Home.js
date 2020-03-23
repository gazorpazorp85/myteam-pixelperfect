import React, { Component } from 'react';

import NavBar from '../cmps/NavBar';
import HomeHero from '../cmps/home/HomeHero';
import MainContent from '../cmps/home/MainContent';
import Testimonials from '../cmps/home/Testimonials';
import CallToAction from '../cmps/CallToAction';
import Footer from '../cmps/Footer';

export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                    <NavBar />
                    <HomeHero />
                    <MainContent />
                    <Testimonials />
                    <CallToAction />
                    <Footer />
            </React.Fragment>
        );
    }
}