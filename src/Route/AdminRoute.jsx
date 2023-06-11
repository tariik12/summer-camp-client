import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth/UseAuth";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";

const AdminRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const [isAdmin,isAdminLoading] = UseAdmin()
    const location = useLocation()
    
    if(loading || isAdminLoading){
        return<progress className="progress progress-error w-56" value="0" max="100"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return<Navigate to='/login' state={{from:location}} replace ></Navigate>;
};

export default AdminRoute;