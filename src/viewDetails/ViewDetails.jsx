import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import Rating from 'react-rating';


const ViewDetails = ({value}) => {
    const { user } = useContext(AuthContext);
    const myToy = useLoaderData();
    const { picture, name, seller_name, seller_email, price, rating, quantity } = myToy;

    return (
        <div className='ml-32 mb-10 mt-5 text-center'>
            <div className="card card-side bg-base-100 shadow-xl mt-8">
                <figure><img style={{ width: '400px' }} src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl text-red-700 font-bold card-title">{name}</h2>
                    <p className='text-2xl font-bold text-success text-left'>Quantity : {quantity}</p>
                    <p className='text-2xl font-bold text-success text-left'>Price : {price}</p>
                    <p className='text-xl font-bold text-success text-left'>Seller Name: {seller_name}</p>
                    <p className='text-xl font-bold text-success text-left'>Seller email: {seller_email}</p>
                    <p className='text-xl font-bold text-success text-left'>Rating: {rating}</p>
                    <p className='text-xl font-bold text-success text-left'>{<Rating
                        emptySymbol={<i className="far fa-star"></i>}
                        fullSymbol={<i className="fas fa-star"></i>}
                        initialRating={value}
                        readonly
                    />}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;