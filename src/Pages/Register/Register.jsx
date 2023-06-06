
// import { useContext } from 'react';
// import { useForm } from 'react-hook-form';

// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'

// const Register = () => {
//     const { createUser, updateUserProfile } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();
//     const onSubmit = (data) => {
       
//         createUser(data.email, data.password)
//             .then(result =>{
//                 console.log(result.user)
//                 console.log(data.name, data.photoURL)
//         updateUserProfile(data.name, data.photoURL)
//             .then(() => {
//                 const saveUser = { name: data.name, email: data.email }
//                 fetch('http://localhost:5000/users', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(saveUser)
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.insertedId) {
//                             reset()
//                             Swal.fire({
//                                 position: 'top-end',
//                                 icon: 'success',
//                                 title: 'Your work has been saved',
//                                 showConfirmButton: false,
//                                 timer: 1500
//                             })
//                             navigate('/')
//                         }
//                     })

//             })
//             .catch(error => console.log(error.massage))
//         }
//         )
             
        
//     };
//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">SinIn now!</h1>
//                     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input {...register('name', { required: true })} type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
//                             {errors.name && <p className='text-red-800'>Please enter Your Name</p>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Photo URL</span>
//                             </label>
//                             <input {...register('photoURL', { required: true })} type="text" name="photoURL" placeholder="Enter Your Photo" className="input input-bordered" />
//                             {errors.photoURL && <p className='text-red-800'>Please enter Your Photo url</p>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="Email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
//                             {errors.email && <p className='text-red-800'>Please enter Your Name</p>}
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input {...register('password', {
//                                 required: true,
//                                 minLength: 6,
//                                 maxLength: 20,
//                                 pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
//                             })} type="text" placeholder="password" className="input input-bordered" />
//                             {errors.password?.type === 'required' && <p className='text-red-700' >Password is required</p>}
//                             {errors.password?.type === 'minLength' && <p className='text-red-700' >Password must be 6 charector</p>}
//                             {errors.password?.type === 'maxLength' && <p className='text-red-700' >Password must be 6 charector</p>}
//                             {errors.password?.type === 'pattern' && <p className='text-red-700' >Password must be regular expression charector</p>}

//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <div>Already have an account<Link to='/login' className='text-cyan-300'> Login</Link></div>
//                             <input onSubmit={handleSubmit} type="submit" className='btn' value={'SingIN'} name="" id="" />

//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;