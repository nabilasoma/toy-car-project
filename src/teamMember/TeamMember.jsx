import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';

const TeamMember = () => {
    AOS.init();
    return (
        <div className='mt-8'>
            <hr />
            <h3 className='text-red-600 font-bold text-3xl text-center mt-12 mb-8'>Meet Our Team Member !!</h3>
            <p style={{ width: '600px' }} className='font-bold mx-auto text-center text-gray-600 mt-5 mb-8'>As our visionary leader, John brings a wealth of experience and strategic direction to this Company. With a proven track record in the industry, he guides our company's overall strategy and ensures that we stay ahead in a rapidly evolving market. John's strong leadership inspires our team to push boundaries, innovate, and exceed customer expectations.</p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/PtrL6CM/team1.jpg" alt="" />
                        <p className='font-bold text-red-700 text-center'><small>Chairman</small></p>
                        <div className='flex ml-32 mb-8 text-red-600'>
                            <p className='text-center'><FaFacebookF /></p>
                            <p className='text-center'><FaTwitter /></p>
                            <p className='text-center'><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/K6dPNW2/team2.jpg" alt="" />
                        <p className='font-bold text-red-700 text-center'><small>Vice Chairman</small></p>
                        <div className='flex ml-32 mb-8 text-red-600'>
                            <p className='text-center'><FaFacebookF /></p>
                            <p className='text-center'><FaTwitter /></p>
                            <p className='text-center'><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/8gt8QBm/team4.jpg" alt="" />
                        <p className='font-bold text-red-700 text-center'><small>Advisor</small></p>
                        <div className='flex ml-32 mb-8 text-red-600'>
                            <p className='text-center'><FaFacebookF /></p>
                            <p className='text-center'><FaTwitter /></p>
                            <p className='text-center'><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/4mzLGff/team5.jpg" alt="" />
                        <p className='font-bold text-red-700 text-center'><small>Advisor</small></p>
                        <div className='flex ml-32 mb-8 text-red-600'>
                            <p className='text-center'><FaFacebookF /></p>
                            <p className='text-center'><FaTwitter /></p>
                            <p className='text-center'><FaInstagram /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div className='' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/Js4QgdT/team6.jpg" alt="" />
                            <p className='font-bold text-red-700 text-center'><small>Chairman</small></p>
                            <div className='flex ml-32 mb-8 text-red-600'>
                                <p className='text-center'><FaFacebookF /></p>
                                <p className='text-center'><FaTwitter /></p>
                                <p className='text-center'><FaInstagram /></p>
                            </div>
                        </div>
                        <div className='' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/N7JxCMq/team7.jpg" alt="" />
                            <p className='font-bold text-red-700 text-center'><small>Vice Chairman</small></p>
                            <div className='flex ml-32 mb-8 text-red-600'>
                                <p className='text-center'><FaFacebookF /></p>
                                <p className='text-center'><FaTwitter /></p>
                                <p className='text-center'><FaInstagram /></p>
                            </div>
                        </div>
                        <div className='' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/mNHKQ1X/team8.jpg" alt="" />
                            <p className='font-bold text-red-700 text-center'><small>Advisor</small></p>
                            <div className='flex ml-32 mb-8 text-red-600'>
                                <p className='text-center'><FaFacebookF /></p>
                                <p className='text-center'><FaTwitter /></p>
                                <p className='text-center'><FaInstagram /></p>
                            </div>
                        </div>
                        <div className='' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img className='border-3 rounded-full border-white mx-auto' style={{ width: '200px' }} src="https://i.ibb.co/PCxBJB5/team9.jpg" alt="" />
                            <p className='font-bold text-red-700 text-center'><small>Advisor</small></p>
                            <div className='flex ml-32 mb-8 text-red-600'>
                                <p className='text-center'><FaFacebookF /></p>
                                <p className='text-center'><FaTwitter /></p>
                                <p className='text-center'><FaInstagram /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;