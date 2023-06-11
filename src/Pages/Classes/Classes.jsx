import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth/UseAuth";
// import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
// import UseInstructor from "../../Hooks/UseInstructor/UseInstructor";
// import { useState } from "react";


const Classes = () => {
  // const [active, setActive] = useState(false)
  const { user } = UseAuth();
  console.log(user)
  // const [isAdmin] = UseAdmin();
  // const [isInstructor] = UseInstructor();

  // console.log(isAdmin, isInstructor)
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get('/ShowClasses')
    console.log(res.data)
    return res.data;
  })

  const handleBooking = (singleClass) => {
// setActive(true)
    // console.log(singleClass)
    // const { seats, seatBooking } = singleClass;
    // const seat = seats - 1
    // const booking = seatBooking + 1
    // singleClass.seats = seat;
    // singleClass.seatBooking = booking;

    // fetch(`http://localhost:5000/ShowClasses/${singleClass._id}`, {
    //   method: "PATCH",
    //   headers: {
    //     'content-type': 'application/json',
    //     authorization: `Bearer ${localStorage.getItem('access-token')}`
    //   },
    //   body: JSON.stringify(singleClass)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.modifiedCount > 0)
    //       refresh()
    //     // setActive(true)
    //     console.log(singleClass)
        const studentEmail = user?.email

        const { email: instructorEmail, instructorName, languageName, price, seats, seatBooking } = singleClass
        const studentClass = { instructorName, instructorEmail, studentEmail, languageName, price, seats, seatBooking };
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
      // })
    // console.log(singleClass)

  }
  return (
    <div className="py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          classes.map(singleClass => <div key={singleClass._id} className="card w-96 bg-base-100 shadow-xl">
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
  <button onClick={()=>handleBooking(singleClass)} disabled={singleClass?.role =='student'}  className="btn btn-outline">Booking</button>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Classes;