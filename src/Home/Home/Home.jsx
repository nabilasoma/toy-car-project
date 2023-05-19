import React from 'react';
import Banner from '../../shared/Banner';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../../gallery/Gallery';
import Category from '../../category/Category';

const Home = () => {
    const myToys = useLoaderData();
    console.log(myToys);
    return (
        <div>
            <Banner></Banner>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-12'>
           {
                myToys.slice(0, 6).map(myToy => <Gallery key={myToy._id}
                myToy={myToy}
                
                ></Gallery>)
            }
           </div>
            <Category></Category>
        </div>
    );
};

export default Home;