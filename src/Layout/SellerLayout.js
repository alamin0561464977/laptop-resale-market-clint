import React from 'react';
import { Outlet } from 'react-router-dom';
import Seller from '../pages/Seller/Seller/Seller';
import NavBer from '../pages/Share/NavBer/NavBer';

const SellerLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Seller></Seller>
        </div>
    );
};

export default SellerLayout;