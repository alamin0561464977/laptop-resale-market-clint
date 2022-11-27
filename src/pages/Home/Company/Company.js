import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, } from '@tanstack/react-query';

import Loading from '../../Share/Loading/Loading';

const Company = () => {
    const { data: company = [], isLoading } = useQuery({
        queryKey: ['company'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/company');
            const data = await res.json();
            return data;
        }
    });
    console.log(company)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl pl-2 font-bold text-primary mb-4 border-l-8 border-sky-500'>Company</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    company.map(c =>
                        <Link to={`/products/${c.companyName}`} key={c._id} href="/" aria-label="View Item">
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
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Company;