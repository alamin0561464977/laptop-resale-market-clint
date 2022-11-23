import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-16 mt-5">
            <div className="hero-content my-12 lg:mx-28 flex-col lg:flex-row-reverse">
                <img className="w-[600px] h-[400px] rounded-lg shadow-2xl" alt='' src="https://img.freepik.com/premium-photo/cute-little-indian-asian-girl-child-studying-laptop-working-school-project-while-lying-sitting-floor-isolated-white-background_466689-8404.jpg?w=2000" />
                <div className='lg:px-12'>
                    <h1 className="text-5xl text-primary font-bold">Laptop Resale Market</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/products' className="btn btn-primary">Products</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;