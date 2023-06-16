import { useEffect, useState } from "react";
import ForHeader from "../../../Hooks/ForHeader/ForHeader";


const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() =>{
        fetch('https://summer-language-camp-server.vercel.app/popularClasses')
        .then(res =>res.json())
        .then(data =>{
            setPopularClasses(data)
        })
    },[])
    return (
        <div className="">
          <ForHeader title='Popular Classes'></ForHeader>
        <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
          {
            popularClasses.slice(0,6).map(singleClass => <div key={singleClass._id} className="card mb-4 w-full bg-base-100 shadow-xl">
              <img src={singleClass.image} className="w-full h-72 rounded-md" alt="Shoes" />
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
                <div className="card-actions justify-end">
                   
                  <div className="badge badge-outline btn-info">Products</div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    );
};

export default PopularClasses;