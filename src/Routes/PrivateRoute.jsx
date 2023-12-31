import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <progress className="progress w-56" value="100" max="100"></progress>
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace={true}></Navigate>
}
      

export default PrivateRoute;