import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddaToy = () => {

    const addATo = useLoaderData();
    console.log(addATo);

    const handleAddToys = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const sub = form.sub.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const description = form.description.value;
        
        const addNewToy = {description, name, photo, seller, sub, price, quantity, email, rating} 
        console.log(addNewToy);

        fetch('https://toy-car-server-seven.vercel.app/addNew', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        
                <div className="mt-8 card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <h3 className='text-2xl font-bold text-success'>Add Your Toy</h3>
                    <div className="card-body">
                       <form onSubmit={handleAddToys}>
                       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="seller" placeholder="seller name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" name="sub" placeholder="sub-category" className="input input-bordered" />
                
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="description" className="input input-bordered" />
                            
                        </div>
                       </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-success text-white font-bold' type="submit" value="Add A Toy" />
                        </div>
                       </form>
                    </div>
                </div>
    );
};

export default AddaToy;