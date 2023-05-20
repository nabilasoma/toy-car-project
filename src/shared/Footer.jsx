import React from 'react';
import logo from'../assets/logo2-removebg.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <h2 className="text-2xl font-bold mb-4">Toy Cars</h2>
                        <img
                            src={logo}
                            alt="Toy Cars Logo"
                            className="h-12 mb-4 mx-auto"
                        />
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="text-gray-400">
                            <li>Electric Cars</li>
                            <li>Remote Control Cars</li>
                            <li>Die-cast Cars</li>
                            <li>Model Cars</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">
                            123 Toy Street, City, State, ZIP
                        </p>
                        <p className="text-gray-400">
                            info@example.com
                        </p>
                        <p className="text-gray-400">
                            (123) 456-7890
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;