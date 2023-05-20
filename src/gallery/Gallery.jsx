import React from 'react';
import AOS from 'aos';

const Gallery = ({ myToy }) => {
    const { photo, name } = myToy;
    console.log('from gallery', myToy);
    AOS.init();
    return (
      
          <div className="card card-compact w-96 bg-base-100 shadow-xl relative" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="absolute inset-0 bottom-0 left-0 flex h-32 items-center justify-center bg-black bg-opacity-50 text-white">
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-block ">Buy Now</button>
                </div>
            </div>
        </div>
      
    );
};

export default Gallery;