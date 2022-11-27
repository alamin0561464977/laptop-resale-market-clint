import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyNowModal from './BuyNowModal';

const Products = () => {
    const [product, setProduct] = useState(null);
    const Products = useLoaderData();
    const [products, setProducts] = useState(Products);

    const handelModal = p => {
        console.log(Products)
        setProduct(p);

    }
    return (
        <div>
            <h1 className='text-4xl pl-2 font-bold text-primary mt-10 mb-4 border-l-8 border-sky-500'>Products: {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 my-8 lg:grid-cols-3 gap-8'>
                {
                    products.map(product =>
                        <div key={product._id} className="card w-full bg-base-100 shadow-xl">
                            <figure><img className='w-full h-60' src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <small>Upload: {product.date}</small>
                                <h2 className="card-title">{product?.name}</h2>
                                <h3 className='text-2xl font-bold textarea-primary'>Price: ${product.resalePrice}</h3>
                                <h5 className=' font-bold m-0 p-0 textarea-primary'>Original Price: {product.originalPrice}</h5>
                                <h5 className=' font-bold m-0 p-0 textarea-primary'>used: {product.used}</h5>
                                <small className=' font-bold'>Location: {product?.location}</small>
                                <small className=' font-bold'>Condition: {product?.condition}</small>
                                <p>{product.description}</p>
                                <label
                                    onClick={() => handelModal(product)}
                                    htmlFor="buy-now-modal" className="btn w-full btn-outline btn-primary">Buy Now</label>
                                <div className="card-actions">
                                    <div className=' flex'>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={product?.photoURL} alt='' />
                                            </div>
                                        </div>
                                        {console.log(product)}
                                        <div>
                                            <h1>{product?.displayName} {product?.verify && <input
                                                type="checkbox"
                                                checked="checked" className="checkbox w-3 h-3" />
                                            }</h1>
                                            <h1>{product?.email}</h1>
                                        </div>
                                    </div>
                                    <label
                                        htmlFor="buy-now-modal" className="btn btn-link">Report to Admin</label>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {product && <BuyNowModal
                product={product}
                setProduct={setProduct}
                setProducts={setProducts}
                Products={Products}
                url='product'
            ></BuyNowModal>}
        </div>
    );
};

export default Products;