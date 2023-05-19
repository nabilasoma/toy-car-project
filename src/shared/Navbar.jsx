import logo from '../assets/logo2-removebg.png'
import logo1 from '../assets/logo-removebg.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link } from 'react-router-dom';
import user1 from '../assets/user.png'

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
                    <li><Link>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/allToys'>All Toys</Link></li>
                    {
                        user ? <>
                           <li><Link to='/addAToy'>Add A Toy</Link></li>
                            <li><Link to='/myToy'>My Toy</Link></li>
                            <Link><button onClick={handleLogout} className="btn btn-link">Logout</button></Link>
                            <a><img style={{ width: '40px' }} src={user1} alt="" /></a>
                        </> : <li><Link to='/login'>Login</Link></li>
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