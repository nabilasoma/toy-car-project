import React from 'react';

const AddToyCard = ({ addToy }) => {

    const { name, photo, seller, sub, quantity, price, email, rating, description } = addToy;
    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {seller}
                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td>{sub}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{description}</td>
            <th>
                <button className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>
    );
};

export default AddToyCard;