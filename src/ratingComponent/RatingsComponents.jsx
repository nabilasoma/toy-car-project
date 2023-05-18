import React from 'react';
import ViewDetails from '../viewDetails/ViewDetails';


const RatingsComponents = () => {
    const ratingValue = 4.5;
    return (
        <div>
        <h2>Product Name</h2>
        <ViewDetails value={ratingValue} />
      </div>
    );
};

export default RatingsComponents;