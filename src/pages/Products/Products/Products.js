import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl pl-2 font-bold text-primary mt-10 mb-4 border-l-8 border-sky-500'>Products: {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 my-8 lg:grid-cols-3 gap-8'>
                {
                    products.map(product =>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure><img className='w-full h-60' src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <small>Upload: {product.date}</small>
                                <h2 className="card-title">{product.name}</h2>
                                <h3 className='text-3xl font-bold textarea-primary'>Price: ${product.price}</h3>
                                <h5 className=' font-bold m-0 p-0 textarea-primary'>Stock: {product.quantity}</h5>
                                <h5 className=' font-bold m-0 p-0 textarea-primary'>used: {product.used}</h5>
                                <small className=' font-bold'>Location: {product.location}</small>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Products;