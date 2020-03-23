import React, { Component } from 'react';

import NavBar from '../cmps/NavBar';
import ContactForm from '../cmps/contact/ContactForm';
import Footer from '../cmps/Footer';

export default class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ContactForm />
                <Footer />
            </React.Fragment>
        );
    }
}