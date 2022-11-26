import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import { auth } from '../../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const [seller, setSeller] = useState(false);
    const [error, setError] = useState(null);
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogin = e => {
        setError(null);
        setSeller(false)
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;
        const isSeller = seller;
        const buyer = { name, photo, address, email, isSeller };
        console.log(buyer);

        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: `${name}`,
                    photoURL: `${photo}`
                })

                    .then(() => {
                        fetch('http://localhost:5000/buyer', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(buyer)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                            })

                        navigate('/');
                        console.log(user);
                    })

                    .catch((err) => {
                        setError(err.message);
                        console.error(err.message);
                    });
            })
            .catch((err) => {
                setError(err.message);
                console.error(err.message);
            });
        form.reset();

    }
    return (
        <div className="hero pb-10 min-h-screen bg-base-200">
            <div className="hero-content  mt-0  flex-col grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl shadow-xl content-center items-center">
                <div>
                    <img className=' w-[450px] rounded-2xl shadow-xl' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" />
                </div>
                <div>
                    <div className="card flex-shrink-0 pt-3 mt-8 w-full shadow-2xl bg-base-100">
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
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo' type="text" required placeholder="phone" className="input input-bordered" />
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
                                        <span className="label-text font-bold text-teal-400">creates a seller account</span>
                                        <input name='seller' type="checkbox" className="checkbox" />
                                    </label>
                                </div>
                                <label className="label">
                                    <p className="label-text-alt font-bold link link-hover text-red-600">{error && error}</p>
                                </label>
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover text-primary">Login ?</Link>
                                </label>
                            </div>
                            <div className="form-control">
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