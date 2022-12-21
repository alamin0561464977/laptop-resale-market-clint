import React, { useContext } from 'react';
import { useQuery, } from '@tanstack/react-query';
import Loading from '../../Share/Loading/Loading';
import { handelDelete } from '../../../utility/delete';
import { AuthContext } from '../../../ContextAPI/UserContext';

const AllSellers = () => {
    const { logOut } = useContext(AuthContext);
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    });
    const handelMekAdmin = email => {
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/mek-admin?email=${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    };
    const handelVerify = email => {
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/verify?email=${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    };
    if (sellers?.message === 'forbidden access') {
        logOut();
        return
    }
    return (
        <div>
            <h1 className=' mt-5 text-3xl pl-2 font-bold text-primary mb-7 border-l-8 border-sky-500'>All Sellers</h1>
            <div className="overflow-x-auto">
                {
                    sellers?.length ?
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>{sellers.length}</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Verify</th>
                                    <th>Mek Admin</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sellers.map((seller, i) =>
                                        <tr>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={seller.photo} alt='' />
                                                    </div>
                                                </div>

                                            </td>
                                            <td>{seller.name}</td>
                                            <td>{seller.email}</td>
                                            <td>{!seller.verify && <button
                                                onClick={() => handelVerify(seller?.email)}
                                                className="btn btn-xs bg-slate-500">Verify</button>}</td>
                                            <td>{!seller?.admin && <button
                                                onClick={() => handelMekAdmin(seller?.email)}
                                                className="btn btn-xs bg-green-500"
                                            >Mek Admin</button>}</td>
                                            <td><button
                                                onClick={() => handelDelete(seller?.email, 'deleteBuyer', refetch)}
                                                className="btn btn-xs bg-red-600">Delete</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        :
                        <h1 className=' text-orange-400 font-bold text-start'>NO Buyer</h1>
                }
            </div>
        </div>
    );
};

export default AllSellers;