import React, { useContext, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2-removebg.png'

const Login = () => {

    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error)
            })

        if (!email === 'email' && !password === 'password') {
            setError('Email and password do not match')
        }
        else {
            setError('')
        }


        if (password < 6) {
            setError('Password should be at least 6 characters')
        }
        else{
            setError('')
        }


    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="mb-4 text-5xl text-success font-bold">Please Register</h1>
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-success btn-block' type="submit" value="Login" />
                            </div>
                            <label className="label">
                                <small>New This site? Please <Link to='/registration'>Registration</Link></small>
                            </label>
                            <p className='text-red-700'>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;