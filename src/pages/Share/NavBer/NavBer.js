import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContextAPI/UserContext';

const NavBer = () => {
    const { user, logOut, isSeller, isAdmin } = useContext(AuthContext);
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/my-orders'>My Orders</Link></li>
        <li><Link to='/Blogs'>Blog</Link></li>
        {isSeller && <li><Link to='/seller'>Seller</Link></li>}
        {isAdmin && <li><Link to='/admin'>Admin</Link></li>}
        {
            user ?
                <>
                    <li><button onClick={logOut}>LogOut</button></li>
                </>
                :
                <>
                    <li><Link to='/Login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-bold text-primary text-xl">Laptop Resale Market</Link>
            </div>
            <div className=" navbar-end hidden lg:flex">
                <ul className="menu font-bold menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            {user?.uid && <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src={user?.photoURL} alt='' />
                </div>
            </div>}
        </div>
    );
};

export default NavBer;