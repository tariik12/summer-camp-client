import { useEffect, useState } from "react";


const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/popularClasses')
        .then(res =>res.json())
        .then(data =>{
            setPopularClasses(data)
        })
    },[])
    return (
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            popularClasses.slice(0,6).map(singleClass => <div key={singleClass._id} className="card w-96 bg-base-100 shadow-xl">
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
                   
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    );
};

export default PopularClasses;