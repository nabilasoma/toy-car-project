import React, { useEffect, useState } from 'react';
import './Category.css'
import { Link } from 'react-router-dom';

const Category = () => {
    const [toggle, setToggle] = useState(1);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-car-server-seven.vercel.app/allToys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    console.log(toys);

    const updateToggle = id => {
        setToggle(id)
    }


    return (
        <div>
            
            <h3 className='text-red-600 font-bold text-3xl mb-5'>Choose Your Toys By Category{toys.length}</h3>
                <button onClick={() => updateToggle(1)} className="btn btn-active">Bus Toys</button>
                <button onClick={() => updateToggle(2)} className="btn btn-active btn-primary">Truck Toys</button>
                <button onClick={() => updateToggle(3)} className="btn btn-active btn-secondary">Car Toys</button>
            

            <div className={toggle === 1 ? "show-content" : "content"}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <div className="card mt-5 card-compact h-96 w-96 bg-base-100 mx-auto shadow-xl">
                    <figure><img src="https://i.ibb.co/L9VpMcW/img6.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                        <Link><button className="btn">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-5 card h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/p2npCVT/img7.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-5 card h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/TPtVxf7/img8.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={toggle === 2 ? "show-content" : "content"}>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           <div className="mx-auto card mt-5 h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/27Wtm03/img11.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-5 card h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/G9qzcrz/img10.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-5 h-96 card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/CJ0tGcD/img9.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
            <div className={toggle === 3 ? "show-content" : "content"}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="mx-auto card mt-5 h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/kBLwGCN/img2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-5 card h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/JjVF4bn/img1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto card mt-5 h-96 card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/sQjVB9D/img12.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

    );
};

export default Category;