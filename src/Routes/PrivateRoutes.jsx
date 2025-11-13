import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { FadeLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext)
    const location =useLocation();

    if(loading){
        return <div className='h-[97vh] flex items-center justify-center'>
            <FadeLoader />
        </div>
    }

    if(!user){
        return <Navigate to="/login" state = {location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;