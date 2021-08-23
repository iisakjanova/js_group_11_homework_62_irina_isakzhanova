import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from "../../components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Contacts from "../Contacts/Contacts";
import Services from "../Services/Services";

import './bootstrap.min.css';
import './Site.css';
import Footer from "../../components/Footer/Footer";

const Site = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>
                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default Site;