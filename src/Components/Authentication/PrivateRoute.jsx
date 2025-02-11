import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './FirebaseProvider';

const PrivateRoute = ({children}) => {

    const{user,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if(loading){
        return <div className='text-center mt-10'>
            <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;