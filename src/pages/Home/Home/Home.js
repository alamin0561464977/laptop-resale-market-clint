import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Company from '../Company/Company';
import AboutUs from '../AboutUs/AboutUs';
import Destination from '../Destination/Destination';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <AboutUs></AboutUs>
            <Company></Company>
            <Destination></Destination>
        </div>
    );
};

export default Home;