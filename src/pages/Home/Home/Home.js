import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Company from '../Company/Company';
import AboutUs from '../AboutUs/AboutUs';
import Destination from '../Destination/Destination';
import Advertise from '../Advertise/Advertise';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Company></Company>
            <Advertise></Advertise>
            <AboutUs></AboutUs>
            <Features></Features>
            <Destination></Destination>
        </div>
    );
};

export default Home;