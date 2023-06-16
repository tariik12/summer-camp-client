import { useContext, } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import GetClasses from "../../../../Hooks/GetClasses/GetClasses";




const img_hosting_token=import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const InstructorAddClass = () => {
    const { user } = useContext(AuthContext);
    const [,refetch] = GetClasses()
     
        
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
   const { register, handleSubmit ,reset} = useForm();


    const onSubmit = (data) => {

        
        data.email = user.email;
        data.instructorName = user.displayName;
        // data.price = parseInt(watch('price'));
        // data.seats = parseInt(watch('seats'));
        const formData = new FormData();
        formData.append('image',data.image[0]) 
        fetch(img_hosting_url,{
            method:'POST',
            body:  formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
               const {email,instructorName,languageName,price,seats,} = data
               const newClass = {instructorName,email,languageName,price:parseInt(price),seats:parseInt(seats),image:imgURL, role:'pending',seatBooking:0,};
               console.log(newClass)
                    fetch('https://summer-language-camp-server.vercel.app/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    }) 
                        .then(res => res.json())
                        .then(data => {
                            refetch()
                            if (data.insertedId) {
                                toast.success('Classes add  Success')
                            }
                        })
            }
                reset()
        })
       

    }
    return (

        <div className="py-10  mx-auto bg-base-100 ">
            <div className="card w-full max-w-7xl mx-auto shadow-2xl bg-base-100">
                <h1 className="text-center text-4xl font-extrabold p-5 shadow-2xl bg-base-100 rounded-t-xl ">Add Your Language</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Language Name</span>
                                </label>
                                <input {...register("languageName")}  type="text" placeholder="" className="input input-bordered"  />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span  className="label-text font-extrabold text-lg">Language Image</span>
                                </label>
                                <input type="file" {...register("image")} className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Instructor Name</span>
                                </label>
                                <input defaultValue={user?.displayName} type="text" placeholder="" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Instructor Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" placeholder="" className="input input-bordered" readOnly />
                            </div>
                        </div>

                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Available Seats</span>
                                </label>
                                <input  {...register("seats")} type="number" placeholder="Add Available Quantity Note: ONLY NUMBER ADD" className="input input-bordered" required />
                            </div>
                        
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Price</span>
                                </label>
                                <input {...register("price")} type="number" className="input input-bordered" placeholder="Enter Price " required />
                            </div>
                        </div>

                        
                        <div className="form-control mt-6">
                            <input type="submit" value='submit' className="text-xl font-extrabold btn bg-cyan-700 " />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InstructorAddClass;

