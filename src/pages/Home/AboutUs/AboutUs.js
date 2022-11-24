import React from 'react';

const AboutUs = () => {
    return (
        <div className=' my-14'>
            <h1 className=' text-3xl pl-2 font-bold text-primary mb-4 border-l-8 border-sky-500'>Company</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOR_RGWPlIYfAV-zOJ3wXs74m2ZP006SjDTOyGMC7Gafoefb94WFutOms8BsN8KGPubeU&usqp=CAU" className="w-[600px] h-[400px] rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;