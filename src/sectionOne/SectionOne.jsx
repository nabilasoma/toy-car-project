import React from 'react';
import AOS from 'aos';

const SectionOne = () => {
    AOS.init();

    return (
        <div>
            <h1 className='mb-4 text-4xl font-bold text-red-600 text-center mt-16'>About Our Toys</h1>
            <p className='mb-5 font-bold text-2xl text-gray-700'>Welcome to the Kids Toys Store!</p>
            <p style={{ width: '600px' }} className='text-center text-gray-500 font-bold mx-auto'>
                At Toy Vehicles Store, we are passionate about providing the best selection of toy buses, trucks, and cars for kids of all ages. Whether you're a collector, a parent looking for a gift, or a child who loves imaginative play, we have the perfect toy vehicles to suit your needs.
            </p>
            <div className='' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img  className='mx-auto w-96 h-96' src="https://i.ibb.co/gyTHFXX/about1-removebg-preview.png" alt="Toy Bus" />
            </div>
            <p style={{ width: '600px' }} className='mb-4 text-center text-gray-500 font-bold mx-auto'>
                Our mission is to inspire creativity and endless fun through our high-quality toys. We carefully curate our collection to ensure that each toy we offer meets the highest standards of safety, durability, and playability. We believe in the power of play to nurture imagination, enhance cognitive skills, and promote social interaction.
            </p>
           <div className='' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
           <img className='mx-auto w-96 h-96' src="https://i.ibb.co/FK7wLqQ/about4-removebg-preview.png" alt="Toy Truck" />
           </div>
            <p style={{ width: '600px' }} className='mt-5 text-center text-gray-500 font-bold mx-auto'>
                At Toy Vehicles Store, you'll find a wide range of options, from realistic model vehicles to interactive playsets. Whether your child dreams of being a race car driver, a construction worker, or a bus driver, we have the perfect toy to bring their imagination to life.
            </p>
            <div className='' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
            <img className='mx-auto w-96 h-96' src="https://i.ibb.co/9NwzT1J/about3-removebg-preview.png" alt="Toy Car" />
            </div>
            <p style={{ width: '600px' }} className='text-center text-gray-500 font-bold mx-auto'>
                We are committed to providing exceptional customer service and a seamless shopping experience. Our friendly and knowledgeable staff are always ready to assist you with any questions or concerns you may have. Your satisfaction is our top priority, and we strive to exceed your expectations every time.
            </p>
            <p style={{ width: '600px' }} className='mb-4 text-center text-gray-500 font-bold mx-auto'>
                Thank you for choosing Toy Vehicles Store for all your toy vehicle needs. Start exploring our collection today and let the adventure begin!
            </p>
        </div>
    );
};

export default SectionOne;