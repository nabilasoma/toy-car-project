import React, { useEffect, useState } from 'react';
import AllToysCard from './AllToysCard';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


    return (
        <div>
            <h3>this is all toys page: {allToys.length}</h3>


            <div className="overflow-x-auto mt-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy name</th>
                            <th>Sub-category</th>
                            <th>price</th>
                            <th>available quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy => <AllToysCard key={toy._id}
                                toy={toy}
                            ></AllToysCard>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;