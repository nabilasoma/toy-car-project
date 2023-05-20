import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto text-center text-3xl text-red-700 font-bold'>
            <h1>Oops!!!</h1>
            <img className='mx-auto mt-6' style={{width: '400px'}} src="https://i.ibb.co/yqPsT7s/404-error-page.jpg" alt="Error" />
            <p className='mt-12'>
                We're sorry, Please check the URL<br />
                 or navigate back to <Link to='/'><button className='btn btn-warning'>Home</button></Link>
            </p>
        </div>
    );
};

export default ErrorPage;