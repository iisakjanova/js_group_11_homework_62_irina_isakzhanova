import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from "../../components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import OurContacts from "../OurContacts/OurContacts";
import OurServices from "../OurServices/OurServices";
import './Site.css';

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
                    <OurServices />
                </Route>
                <Route path="/contacts">
                    <OurContacts />
                </Route>
            </Switch>
        </div>
    );
};

export default Site;