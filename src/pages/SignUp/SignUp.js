import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [seller, setSeller] = useState(false);
    const handelLogin = e => {
        setSeller(false)
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;
        const isSeller = seller;
        console.log(name, phone, address, email, password, isSeller);
        form.reset();

    }
    return (
        <div className="hero pb-10 min-h-screen bg-base-200">
            <div className="hero-content  mt-0  flex-col grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl shadow-xl content-center items-center">
                <div>
                    <img className=' w-[450px] rounded-2xl shadow-xl' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
                </div>
                <div>
                    <div className="card flex-shrink-0 py-5 mt-8 w-full shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl text-center font-bold">SingUP</h1>
                        </div>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" required placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input name='phone' type="number" required placeholder="phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input name='address' type="text" required placeholder="address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" required placeholder="password" className="input input-bordered" />
                                <div className="form-control">
                                    <label onClick={() => setSeller(seller ? false : true)} className="label cursor-pointer">
                                        <span className="label-text">creates a seller account</span>
                                        <input name='seller' type="checkbox" className="checkbox" />
                                    </label>
                                </div>
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover text-primary">Login ?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="SignUp" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;