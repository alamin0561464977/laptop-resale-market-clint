import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBer from '../../Share/NavBer/NavBer';

const Seller = () => {
    return (
        <div>
            <NavBer></NavBer>
            <div className="drawer drawer-mobile">
                <input id="seller-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="seller-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="seller-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to=''>My Products</Link></li>
                        <li><Link to=''>My Buyers</Link></li>
                        <li><Link to=''>Add Product</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Seller;