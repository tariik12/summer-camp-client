import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import {  useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from "../../../Provider/AuthProvider";


const SocialLogin = () => {
    const {  handleGoogleProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

      const handleGoogleLocation = () =>{
      
        handleGoogleProvider()
        .then((result) => {
          const user = result.user;
            console.log(user)
          toast.success('Login Success!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        });
      
      }
    return (
        <div className=" p-10 pt-0">
        <div className="divider">OR</div>
          <div>
            <FaGoogle onClick={handleGoogleLocation } className='ms-32  h-10 w-10 text-cyan-700 hover:text-cyan-400 ' />
          </div>
    </div>
    );
};

export default SocialLogin;