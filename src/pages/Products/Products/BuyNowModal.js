import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../ContextAPI/UserContext';
import Loading from '../../Share/Loading/Loading';

const BuyNowModal = ({ product, setProduct, setProducts, Products, url, refetch }) => {
    const { user } = useContext(AuthContext);
    const { email, displayName, photoURL } = user;
    const { _id, image, originalPrice, resalePrice, condition, name } = product;
    const handelBooking = e => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const orderInfo = { email, displayName, image, phone, location, photoURL, originalPrice, resalePrice, condition, name };

        fetch('https://laptop-resale-market-server-alamin0561464977.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
            })
        setProduct(null);
        fetch(`https://laptop-resale-market-server-alamin0561464977.vercel.app/${url}/${_id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (refetch) {
                    refetch();
                }
                if (data.modifiedCount !== 0 && Products) {
                    const ps = Products.filter(p => p._id !== _id)
                    setProducts([...ps]);
                }
            })
    };
    if (!user || !product) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="buy-now-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="buy-now-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card flex-shrink-0 pt-3 mt-8 w-full shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl text-center font-bold">Add to card</h1>
                        </div>
                        <form onSubmit={handelBooking} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" required defaultValue={displayName} disabled className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required disabled defaultValue={email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" required disabled defaultValue={resalePrice} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input name='phone' type="text" required placeholder="phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input name='location' type="text" required placeholder="location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Booking" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNowModal;