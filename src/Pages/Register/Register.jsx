
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../assets/login.webp'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if(data.password === data.confirm){
            createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                console.log(data.name, data.photoURL)
                updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email, photo: data.photoURL, role:'student' }
                    fetch('https://summer-language-camp-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset()
                                toast.success('SingIn Success')
                                navigate('/')
                            }
                        })
    
                })
                    .catch(error => console.log(error.massage))
            }
            )
        }
        else{
            return toast.error(' confirm password not Mass ')
        }

        


    };
    return (
        <div className="hero min-h-screen bg-base-200 py-20">

            <div className="hero-content flex-col lg:flex-row-reverse bg-black">
                <div className="text-center lg:text-left">
                    <img className='w-[600px] h-[666px] rounded-md' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-black">
                    <h1 className='text-white text-4xl font-extrabold'>Register Here !!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-xl ">Name</span>
                            </label>
                            <input {...register('name', { required: true })} type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                            {errors.name && <p className='text-red-400'>Please enter Your Name</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-xl">Photo URL</span>
                            </label>
                            <input {...register('photoURL', { required: true })} type="text" name="photoURL" placeholder="Enter Your Photo" className="input input-bordered" />
                            {errors.photoURL && <p className='text-red-400'>Please enter Your Photo url</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-xl">Email</span>
                            </label>
                            <input type="Email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-400'>Please enter Your Name</p>}
                        </div>
                       
                    
                   
                  
                   
                        {/* <i id="passlock" className="fa fa-lock icon"></i> */}
                        
                       
                    
              
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-xl">Password</span>
                            </label>
                        {
                           toggle2? <FaRegEye className='z-10 absolute text-4xl ms-[280px] mt-12' onClick={() => { setToggle2(!toggle2) }}/>:
                            <FaRegEyeSlash className='z-10 absolute text-4xl ms-[280px] mt-12' onClick={() => { setToggle2(!toggle2) }}/>
                        }
                            <input {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                            })} type={toggle2 ? "text" : "password"} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-700' >Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-700' >Password must be 6 charector</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-700' >Password must be 6 charector</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-700' >Password must be regular expression charector</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-xl">Confirm Password</span>
                            </label>
                            {
                           toggle1? <FaRegEye className='z-10 absolute text-4xl ms-[280px] mt-12' onClick={() => { setToggle1(!toggle1) }}/>:
                            <FaRegEyeSlash className='z-10 absolute text-4xl ms-[280px] mt-12' onClick={() => { setToggle1(!toggle1) }}/>
                        }
                            <input {...register('confirm')} required={true}   type={toggle1 ? "text" : "password"} placeholder="confirm password" className="input input-bordered" />
                            

                            <label className="label">
                                <a href="#" className="label-text text-white text-xl-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <div className='text-white'>Already have an account<Link to='/login' className='text-cyan-300'> Login</Link></div>
                            <input onSubmit={handleSubmit} type="submit" className='btn' value={'SingIN'} name="" id="" />

                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;