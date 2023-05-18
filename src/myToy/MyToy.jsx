import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddToyCard from '../addAtoy/AddToyCard';

const MyToy = () => {

    const addToys = useLoaderData();

    return (
        <div>
            <h3>thi is my toy page: {addToys.length}</h3>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Photo</th>
        <th>Name</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Sub Category</th>
        <th>Price</th>

      </tr>
    </thead>
    <tbody>
      
    
     {
        addToys.map(addToy => <AddToyCard key={addToy._id}
        addToy={addToy}
        ></AddToyCard>)
     }
    
     
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default MyToy;