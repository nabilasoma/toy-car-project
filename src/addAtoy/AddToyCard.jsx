import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddToyCard = ({ addToy, setAddToys, addToys }) => {

    const { _id, name, photo, seller, sub, quantity, price, email, rating, description } = addToy;

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addNew/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining =  addToys.filter(add => add._id !== id);
                            setAddToys(remaining);
                        }
                    })
            }
        })
    }


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-circle w-24 h-24">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        {/* <div className="font-bold"><small>{name}</small></div> */}
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td><small>{name}</small></td>
            <td>
                <small>{seller}</small>
            </td>
            <td><small>{email}</small></td>
            <td><small>{sub}</small></td>
            <td><small>{price}</small></td>
            <Link to={`/update/${_id}`}><button className='btn btn-success font-bold text-white'>Update</button></Link>
            {/* <td><small>{description}</small></td> */}
            
            <th>
                <button className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>
    );
};

export default AddToyCard;