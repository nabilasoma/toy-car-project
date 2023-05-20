import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateToy = () => {

    const editedToy = useLoaderData();

    const { _id, name, photo, seller, sub, quantity, price, email, rating, description } = editedToy;


    const handleUpdateToys = event => {
        event.preventDefault();

        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        
        
        const updatedToy = {description, name, photo, seller, sub, price, quantity, email, rating} 
        console.log(updatedToy);

        fetch(`https://toy-car-server-seven.vercel.app/addNew/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text: 'Toys updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }





    return (
        <div className="mt-8 card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <h3 className='text-2xl font-bold text-success'>Update Your Toys</h3>
        <div className="card-body">
           <form onSubmit={handleUpdateToys}>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
           <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name="price" defaultValue={price} placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input type="text" name="quantity" defaultValue={quantity} placeholder="photo url" className="input input-bordered" />
            
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" name="description" defaultValue={description} placeholder="seller name" className="input input-bordered" />
            </div>
           </div>
            <div className="form-control mt-6">
                <input className='btn btn-success text-white font-bold' type="submit" value="Update Your Toy" />
            </div>
           </form>
        </div>
    </div>
    );
};

export default UpdateToy;