import React from 'react';

const SubCategory = ({ toy }) => {

    const { name, seller_email, picture } = toy;
    console.log("this is from subcategory",toy)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h3 className='text-red-700 font-bold'>Choose Your Toys By Category</h3>
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{seller_email}</p>
                <div className="card-actions">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;