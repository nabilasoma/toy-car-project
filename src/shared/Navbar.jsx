import logo from '../assets/logo2-removebg.png'
import logo1 from '../assets/logo-removebg.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link } from 'react-router-dom';
import user1 from '../assets/user.png'
import ActiveLink from '../activeLink/ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error));

    }


    return (
        <div className="navbar bg-base-200 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='' style={{ width: '100px' }} src={logo} alt="" />
                    <img style={{ width: '80px' }} src={logo1} alt="" />
                </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><ActiveLink to='/'>Home</ActiveLink></li>
                    <li className='font-bold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    <li className='font-bold'><ActiveLink to='/allToys'>All Toys</ActiveLink></li>
                    {
                        user ? <>
                           <li className='font-bold'><ActiveLink to='/addAToy'>Add A Toy</ActiveLink></li>
                            <li className='font-bold'><ActiveLink to='/myToy'>My Toy</ActiveLink></li>
                            <li><ActiveLink className='font-bold'><button onClick={handleLogout} className="btn btn-success btn-sm">Logout</button></ActiveLink></li>
                            <a><img style={{ width: '40px' }} src={user1} alt="" /></a>
                        </> : <li><ActiveLink to='/login'>Login</ActiveLink></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="">

                </a>
            </div>
        </div>
    );
};

export default Navbar;