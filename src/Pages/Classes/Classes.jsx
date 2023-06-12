import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
// import UseInstructor from "../../Hooks/UseInstructor/UseInstructor";
// import { useState } from "react";


const Classes = () => {
  const { user } = UseAuth();
  console.log(user)
  const navigate = useNavigate()
    const location = useLocation()
  // const [isAdmin] = UseAdmin();
  // const [isInstructor] = UseInstructor();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/ShowClasses')
    console.log(res.data)
    return res.data;
  })

  const handleBooking = (singleClass,classId) => {

        if(user && user.email){
          const studentEmail = user?.email

        const { email: instructorEmail, instructorName, languageName, price, seats, seatBooking , } = singleClass
        const studentClass = { instructorName, instructorEmail, studentEmail, languageName, price, seats, seatBooking,classId };
        fetch('http://localhost:5000/studentClass', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(studentClass)
        })
          .then(res => res.json())
          .then(data => {

            if (data.insertedId) {
              toast.success('Booking  Success')
            }
          })
        }
        else{
          Swal.fire({
            title: 'Please login to order the food',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now !'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state:{from:location}})
            }
          })
        }
  

  }
  return (
    <div className="py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          classes.map(singleClass => <div key={singleClass._id}  className="card w-96 bg-base-100 shadow-xl">
               <div >
               <img src={singleClass.image} className="w-full h-72" alt="Shoes" />
               <div className="card-body">
                 <h2 className="card-title">
                   Learn:  {singleClass.languageName}
                   <div className="badge badge-secondary">NEW</div>
                 </h2>
                 <h2 className="card-title">
                   Trainer Name: {singleClass.instructorName}
                 </h2>
                 <h2 className="card-title">
                   Trainer Email: {singleClass.email}
   
                 </h2>
                 <p>Price: ${singleClass.price}</p>
                 <p>Available Seat:{singleClass.seats}</p>
                 <p>Booking Seat:{singleClass.seatBooking}</p>
                 <p>Booking Seat:{singleClass.role}</p>
                 <div className="card-actions justify-end">
                    {/* <button  onClick={() => handleBooking(singleClass)} disabled={!user || isAdmin || isInstructor} className="btn btn-outline">Booking</button> */}
     <button onClick={()=>handleBooking(singleClass,singleClass._id)}  className="btn btn-outline">Booking</button>
                   <div className="badge badge-outline">Products</div>
                 </div>
               </div>
               </div>
            
           
          </div>)
        }
      </div>
    </div>
  );
};

export default Classes;