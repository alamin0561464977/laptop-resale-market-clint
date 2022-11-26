import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextAPI/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName, photoURL } = user;

    const handelAddProduct = e => {
        e.preventDefault();
        const date = new Date();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const image = form.image.value;
        const productName = form.productName.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const quantity = form.quantity.value;
        const used = form.used.value;
        const phone = form.phone.value;
        const companyName = form.companyName.value;
        const description = form.description.value;
        const productInfo = { userName, email, image, productName, location, originalPrice, resalePrice, quantity, used, phone, companyName, description, date, photoURL };
        console.log(productInfo);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }
    return (
        <div>
            <h1 className=' text-3xl pl-2 font-bold text-primary mb-4 border-l-8 border-sky-500'>Add Product</h1>
            <form onSubmit={handelAddProduct}
                className=' sm:w-full lg:w-2/3 my-8 p-8 shadow-xl bg-slate-100  mx-auto'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input name='userName' required type="text" readOnly defaultValue={displayName} className="input bg-slate-300 input-bordered my-2 w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input name='email' required type="email" readOnly defaultValue={email} className="input input-bordered bg-slate-300 my-2 w-full" />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Photo URL (product)</span>
                    </label>
                    <input name='image' required type="url" placeholder="photo URL (product)" className="input input-bordered my-2 w-full" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input name='productName' required type="text" placeholder="product name" className="input input-bordered my-2 w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name='location' required type="text" placeholder="location" className="input input-bordered my-2 w-full" />
                    </div>
                </div>
                <div className=' grid grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input name='originalPrice' required type="number" placeholder="original price" className="input input-bordered my-2 w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input name='resalePrice' required type="number" placeholder="resale price" className="input input-bordered my-2 w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity' required type="number" placeholder="quantity" className="input input-bordered my-2 w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Years of use</span>
                        </label>
                        <input name='used' required type="number" placeholder="years of use" className="input input-bordered my-2 w-full" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
                    <div>
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name='phone' required type="number" placeholder="phone" className="input input-bordered my-2 w-full" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Company</span>
                        </label>
                        <select name='companyName' className="select select-bordered w-full">
                            <option selected>hp</option>
                            <option>dell</option>
                            <option>appel</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="textarea w-full my-2 textarea-bordered" placeholder="description"></textarea>
                </div>
                <input type="submit" value='SUBMIT' className="input input-bordered bg-primary font-bold text-white my-2 w-full" />
            </form>
        </div>
    );
};

export default AddProduct;