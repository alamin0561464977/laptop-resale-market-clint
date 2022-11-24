import React, { useEffect, useState } from 'react';

const Company = () => {
    const [company, setCompany] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])
    return (
        <div>
            <h1 className=' text-3xl pl-2 font-bold text-primary mb-4 border-l-8 border-sky-500'>Company</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    company.map(c =>
                        <a key={c.category_id} href="/" aria-label="View Item">
                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                    src={c.image}
                                    alt=""
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                    <p className="text-sm font-medium tracking-wide text-white">
                                        {c.companyName}
                                    </p>
                                </div>
                            </div>
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default Company;