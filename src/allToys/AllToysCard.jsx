import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({toy}) => {

    const {_id, seller_name, name, subCategory, price, quantity} = toy;
    
    return (
       
         <tr>
            
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <Link to={`detail/${_id}`}><td><button className='btb btn-success font-bold text-white p-2'>View Detail</button></td></Link>
        </tr>
       


    );
};

export default AllToysCard;