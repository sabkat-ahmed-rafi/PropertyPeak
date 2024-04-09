import { useContext } from 'react';
import { AuthContext } from './Authentication';
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRoute = ({children}) => {


    const {user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={location?.pathname || "/"}/>

};

export default PrivateRoute;