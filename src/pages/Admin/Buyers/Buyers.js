import React from 'react';
import { useQuery, } from '@tanstack/react-query';
import Loading from '../../Share/Loading/Loading';

const Buyers = () => {
    const { data: buyers, isLoading, isAdmin } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = res.json();
            return data;
        }
    });

    const handelMekAdmin = email => {
        fetch(`http://localhost:5000/mek-admin?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    if (isLoading) {
        return <Loading></Loading>
    }
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
                                            <td><button className="btn btn-xs bg-red-600">Delete</button></td>
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