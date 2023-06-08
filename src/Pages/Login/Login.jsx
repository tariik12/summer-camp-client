import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../assets/login.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {  singIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname ||"/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
       
        singIn(data.email, data.password)
            .then((result) => {
              
                    console.log(result.user)
                    toast("Wow so easy!")
                    navigate(from, {replace:true});
            })
            .catch(error => console.log(error.massage))
        
    }   
        
    return (
        <div className="hero min-h-screen bg-base-100 shadow-2xl pt-28 pb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left card shadow-2xl bg-base-100">
                    <img className='w-[600px]  rounded-md' src={login} alt="" />
                    
                </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <p className='text-red-800'>Please enter Your Name</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                        })} type="text" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className='text-red-700' >Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-700' >Password must be 6 charector</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-red-700' >Password must be 6 charector</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-700' >Password must be regular expression charector</p>}

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <div>Create New Account<Link to='/register' className='text-cyan-300'>Register</Link></div>
                        <input onSubmit={handleSubmit} type="submit" className='btn' value={'SingIN'} name="" id="" />

                    </div>
                </form>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
    );
};

export default Login;