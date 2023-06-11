import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth/UseAuth";
import UseInstructor from "../Hooks/UseInstructor/UseInstructor";


const InstructorRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const [isInstructor,isInstructorLoading] = UseInstructor()
    const location = useLocation()
    
    if(loading || isInstructorLoading){
        return<progress className="progress progress-error w-56" value="0" max="100"></progress>
    }
    if(user && isInstructor){
        return children;
    }
    return<Navigate to='/login' state={{from:location}} replace ></Navigate>;
};

export default InstructorRoute;