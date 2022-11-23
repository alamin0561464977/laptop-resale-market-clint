import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Share/Footer/Footer';
import NavBer from '../pages/Share/NavBer/NavBer';

const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;