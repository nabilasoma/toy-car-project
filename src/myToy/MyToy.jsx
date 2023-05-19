import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddToyCard from '../addAtoy/AddToyCard';

const MyToy = () => {

    const loadedToys = useLoaderData();
    const [addToys, setAddToys] = useState(loadedToys);

    return (
        <div>
            <h3 className=''>Total Toys: {addToys.length}</h3>
            {/* <input className='border-2 p-2' type="search" name="search" id="" />
            <button className='btn btn-primary'>Search</button> */}
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
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
        <th>Update</th>
        {/* <th>Description</th> */}
       
      </tr>
    </thead>
    <tbody>
     {
        addToys.map(addToy => <AddToyCard key={addToy._id}
        addToy={addToy}
        addToys={addToys}
        setAddToys={setAddToys}
        ></AddToyCard>)
     }
    </tbody>
  </table>
</div>
         </div>
    );
};

export default MyToy;