import React from 'react';
import { useQuery, } from '@tanstack/react-query';
import Loading from '../../Share/Loading/Loading';
import { handelDelete } from '../../../utility/delete';
import { useContext } from 'react';
import { AuthContext } from '../../../ContextAPI/UserContext';

const Buyers = () => {
    const { logOut } = useContext(AuthContext);
    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://laptop-resale-market-server-alamin0561464977.vercel.app/buyers', {
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
            .then(data => refetch())
    }


    if (isLoading) {
        return <Loading></Loading>
    };
    if (buyers?.message === 'forbidden access') {
        logOut();
        return
    };
    return (
        <div>
            <h1 className=' mt-5 text-3xl pl-2 font-bold text-primary mb-7 border-l-8 border-sky-500'>All Buyers</h1>
            <div className="overflow-x-auto">
                {
                    buyers?.length ?
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>{buyers.length}</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mek Admin</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyers.map((buyer, i) =>
                                        <tr>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={buyer.photo} alt='' />
                                                    </div>
                                                </div>

                                            </td>
                                            <td>{buyer.name}</td>
                                            <td>{buyer.email}</td>
                                            <td>{!buyer?.admin && <button
                                                onClick={() => handelMekAdmin(buyer?.email)}
                                                className="btn btn-xs bg-green-500"
                                            >Mek Admin</button>}</td>
                                            <td><button
                                                onClick={() => handelDelete(buyer?.email, 'deleteBuyer', refetch)}
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

export default Buyers;