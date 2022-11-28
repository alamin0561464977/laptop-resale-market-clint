import React, { useContext } from 'react';
import { useQuery, } from '@tanstack/react-query';
import Loading from '../../Share/Loading/Loading';
import { AuthContext } from '../../../ContextAPI/UserContext';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/products-by-email?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    });
    const handelAdvertise = product => {
        console.log(product)
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/advertise/${product?._id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
            })
    };

    const handelDelete = id => {
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/deleteProduct/${id}`, {
            method: "DELETE",
            authorization: `Bearer ${localStorage.getItem('userToken')}`
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className=' mt-5 text-3xl pl-2 font-bold text-primary mb-7 border-l-8 border-sky-500'>My Products: {products?.length}</h1>
            <div className="overflow-x-auto">
                {
                    products?.length ?
                        <div className=' grid grid-cols-1 my-8 lg:grid-cols-2 gap-8'>
                            {
                                products.map((product, i) =>
                                    <div key={product._id} className="card w-full bg-base-100 shadow-xl">
                                        <figure><img className='w-96 h-60' src={product.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <small>Upload: {product.date}</small>
                                            <h2 className="card-title">{product.name}</h2>
                                            <h3 className='text-3xl font-bold textarea-primary'>Price: ${product.price}</h3>
                                            <h5 className=' font-bold m-0 p-0 textarea-primary'>Stock: {product.quantity}</h5>
                                            <h5 className=' font-bold m-0 p-0 textarea-primary'>used: {product.used}</h5>
                                            <small className=' font-bold'>Location: {product.location}</small>
                                            <p>{product.description}</p>
                                            <div className="card-actions justify-end">
                                                {!product?.advertise && <button
                                                    onClick={() => handelAdvertise(product)}
                                                    className="btn btn-sm bg-slate-500">Adds</button>}
                                                <button
                                                    onClick={() => handelDelete(product._id)}
                                                    className="btn btn-sm bg-red-500">DELETE</button>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        :
                        <h1 className=' text-orange-400 font-bold text-start'>NO Product</h1>
                }
            </div>
        </div>
    );
};

export default MyProducts;