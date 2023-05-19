import React, { useEffect, useState } from 'react';
import SubCategory from './SubCategory';
import './Category.css'

const Category = () => {
const [activeTab, setActiveTab] = useState('Buses');
const [toys, setToys] = useState([]);


useEffect(() => {
    fetch(`http://localhost:5000/allToys/`)
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
}, [])



const handleTabClick = (kabName) => {
    setActiveTab(kabName);

}

    return (
        <div>
            <div className='p-2'>
              <div
            onClick={() => handleTabClick("Buses")}
            className={`tab  tab2 remote ${activeTab == "Buses" ? " bg-red-900 text-white" : "bg-green-200 text-red-800"
                }`}
        >
            Buses
        </div>
        <div
            onClick={() => handleTabClick("Trucks")}
            className={`tab  tab2 Offline ${activeTab == "Trucks" ? " bg-red-900 text-white" : "bg-green-200 text-red-800"
                }`}
        >
            Trucks
        </div>
        <div
            onClick={() => handleTabClick("Cars")}
            className={`tab  tab2 Offline ${activeTab == "Cars" ? " bg-red-900 text-white" : "bg-green-200 text-red-800"
                }`}
        >
            Cars
        </div>
        </div>
       <div className='mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12'>
       {
            toys?.map(toy => <SubCategory key={toy._id}
                toy={toy}
            ></SubCategory>)
        }
       </div>
        </div>
        
    );
};

export default Category;