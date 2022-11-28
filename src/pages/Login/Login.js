import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';

const Login = () => {
    const [error, setError] = useState(null);
    const { login, googleSingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(from)


    const handelLogin = e => {
        setError(null);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(({ user }) => {
                fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/jwt?email=${user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('userToken', data.accessToken)
                    })
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
                console.log(err);
            })
        form.reset();
    };
    const handelGoogleSingIn = () => {
        googleSingIn()
            .then(({ user }) => {
                navigate('/')
                const buyer = {
                    name: user?.displayName,
                    photo: user?.photoURL,
                    address: null,
                    email: user?.email,
                    isSeller: false
                };
                fetch('https://laptop-resale-market-server-alamin0561464977.vercel.app/buyer', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('userToken')}`
                    },
                    body: JSON.stringify(buyer)
                })
                    .then(res => res.json())
                    .then(data => {
                        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/jwt?email=${user?.email}`)
                            .then(res => res.json())
                            .then(data => {
                                localStorage.setItem('userToken', data.accessToken)
                            })
                        navigate('/');
                    })
            })
            .catch(err => {
                setError(err.message);
                console.error(err.message);
            })
    };

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
                                    <p className="label-text-alt font-bold link link-hover text-red-600">{error && error}</p>
                                </label>
                                <label className="label">
                                    <Link to='/signUp' className="label-text-alt link link-hover text-primary">SignUp ?</Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                            <div className="divider">OR</div>
                        </form>
                        <button
                            onClick={handelGoogleSingIn}
                            className="btn mx-5 font-bold btn-outline"
                        >Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;