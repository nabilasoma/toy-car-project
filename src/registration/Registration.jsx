import React, { useContext, useState } from 'react';
import logo from '../assets/logo2-removebg.png'
import { AuthContext } from '../authProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

       

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updatePhoto(result.user, photo)
        })
        .catch(error => {
            console.log(error)
            setError('Password should be at least 6 character')
            
        })

        if(password < 6 ){
            setError('Password should at least 6 character');
        }
        else{
            setError('')
        }
        
        
    }

    const updatePhoto =(user, photoURL) => {
        updateProfile(user, {
            photoURL : photoURL
        })
        .then(result => {
            console.log('photo url updated')
        })
        .catch(error => {
            setError(error.message)
        })
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
                       <form onSubmit={handleRegistration}>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nane</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                           
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-success btn-block' type="submit" value="Registration" />
                        </div>
                        <label className="label">
                            <small>Already have account? Please <Link to='/login'>Login</Link> </small>  
                            </label>
                        <p className='text-red-700'>{error}</p>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;