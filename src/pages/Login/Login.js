import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

    }
    return (
        <div className="hero mt-0 pt-0 min-h-screen bg-base-200">
            <div className="hero-content  mt-0  flex-col grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl shadow-xl content-center items-center">
                <div>
                    <img className=' w-[450px] rounded-2xl shadow-xl' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
                </div>
                <div>
                    <div className="card flex-shrink-0 py-5 mt-8 w-full shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl text-center font-bold">Login</h1>
                        </div>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/signUp' className="label-text-alt link link-hover text-primary">SignUp ?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;