import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const AllToysCard = ({ toy }) => {
    const { user } = useContext(AuthContext);

    const { _id, seller_name, name, subCategory, price, quantity } = toy;

    return (

        
            <tr>
                <td>{seller_name}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <Link to={`/details/${_id}`}><td><button className='btb btn-success font-bold text-white p-2'>View Detail</button></td></Link>
                </tr>
        



    );
};

export default AllToysCard;