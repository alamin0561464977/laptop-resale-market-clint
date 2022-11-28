import React, { useContext } from 'react';
import { useQuery, } from '@tanstack/react-query';
import { AuthContext } from '../../ContextAPI/UserContext';
import Loading from '../Share/Loading/Loading';
import { handelDelete } from '../../utility/delete';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders, isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/ordersByEmail?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <p className=' text-center p-2 mt-5 text-3xl font-bold text-primary mb-7'>My Orders</p>
            <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                {!myOrders.length && <Link className=' text-primary font-bold' to='/products/hp'>Order Product</Link>}
                {
                    myOrders.map(myOrder =>
                        <div className="grid shadow-xl sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                    className="absolute w-56 object-cover h-full rounded"
                                    src={myOrder?.image}
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-lg font-bold">{myOrder?.name}</p>
                                <p className="mb-4 font-bold">
                                    Price: ${myOrder?.resalePrice}
                                </p>
                                <p className="mb-4 font-bold">
                                    Condition: {myOrder?.condition}
                                </p>
                                <div className="flex items-center space-x-3">

                                </div>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-sm bg-slate-500">Adds</button>
                                    <button
                                        onClick={() => handelDelete(myOrder?._id, 'deleteOrder', refetch)}
                                        className="btn btn-sm bg-red-500">DELETE</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;