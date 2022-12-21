import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Share/Loading/Loading';

const ReportToAdmin = () => {
    const { data: reportedProducts, isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('https://laptop-resale-market-server-alamin0561464977.vercel.app/reportToAdmin');
            const data = await res.json();
            return data;
        }
    });
    const handelDelete = (id, _id) => {
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/reportProduct/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

            })
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/deleteReport/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className=' mt-5 text-3xl pl-2 font-bold text-primary mb-7 border-l-8 border-sky-500'>Reported Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                {reportedProducts?.length}
                            </th>
                            <th>Products</th>
                            <th>Users</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts.map((p, i) =>
                                <tr key={p._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded w-24 h-24">
                                                    <img src={p.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{p.name}</div>
                                                <div className="text-sm opacity-50">{p.date}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{p.displayName}</p>
                                        <p>{p.email}</p>
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handelDelete(p.id, p._id)}
                                            className="btn btn-xs bg-red-600">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReportToAdmin;