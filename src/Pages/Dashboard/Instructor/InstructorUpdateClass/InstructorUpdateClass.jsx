import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const InstructorUpdateClass = () => {
    const classesData = useLoaderData()
    const { register, handleSubmit, watch } = useForm();
    const { email, instructorName, languageName, role, seatBooking, _id, price, seats } = classesData;

    const onSubmit = (data) => {
        const price = parseInt(watch('price'))
        const seats = parseInt(watch('seats'))
        data.price = price
        data.seats = seats
        fetch(`https://summer-language-camp-server.vercel.app/classes/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Your  Update Successful");
                }
                console.log(data)
            })
        console.log(data)

    }

    return (
        <div className="pt-24 mb-10  mx-auto bg-base-200 ">
            <div className="card w-full max-w-7xl mx-auto shadow-2xl bg-base-100">
                <h1 className="text-center text-4xl font-extrabold p-5 shadow-2xl bg-base-100 rounded-t-xl ">Update Here</h1>
                <p className="pt-5 ps-10">Only update : price, Total Seat</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">MY Name</span>
                                </label>
                                <input defaultValue={instructorName} type="text" placeholder="" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg"> My Email</span>
                                </label>
                                <input defaultValue={email} type="email" placeholder="" className="input input-bordered" readOnly />
                            </div>
                        </div>
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg"> Language Name</span>
                                </label>
                                <input defaultValue={languageName} type="text" className="input input-bordered" readOnly />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Price</span>
                                </label>
                                <input defaultValue={price}  {...register("price")} type="number" placeholder="" className="input input-bordered" required />
                            </div>

                        </div>

                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Role</span>
                                </label>
                                <input defaultValue={role} className="input input-bordered" placeholder="Enter Price " readOnly />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg"> Booking Seat</span>
                                </label>
                                <input defaultValue={seatBooking} className="input input-bordered" placeholder="Enter Rating" readOnly />
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Total Seats</span>
                            </label>
                            <input defaultValue={seats}  {...register("seats")} className="input input-bordered" placeholder="Enter Rating" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value='submit' className="text-xl font-extrabold btn btn-primary btn-outline" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};
export default InstructorUpdateClass;