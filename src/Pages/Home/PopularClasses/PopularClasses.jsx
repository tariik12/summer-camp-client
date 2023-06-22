import { useEffect, useState } from "react";
import ForHeader from "../../../Hooks/ForHeader/ForHeader";

import { FaArrowRight, FaBookmark,  } from "react-icons/fa";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
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
            popularClasses.slice(0,6).map(singleClass => <div key={singleClass._id} className="card mb-4 w-full bg-base-100  shadow-lg hover:opacity-90 duration-75 hover:bg-slate-100  ">
              <div className="stats shadow">
  
  {/* <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div> */}
  
  {/* <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div> */}
  
</div>
              <div>
              <img src={singleClass.image} className="w-full h-72 rounded-md" alt="Shoes" />
              
              </div>
              <div className="card-body text-center  mt-20">
                <h2 className="card-title">
                  Learn <FaArrowRight className="text-cyan-300 mt-1"/>  {singleClass.languageName}
                  <div className="badge  badge-secondary">NEW</div>
                </h2>
                <div className="invisible hover:visible">
                <p className="">
                  Trainer: {singleClass.instructorName}
                </p>
                <p className="">
                 Email: {singleClass.email}
  
                </p>
                </div>
               
                <div className="card-actions visible hover:invisible font-bold text-xl justify-end absolute top-64 start-16 shadow-2xl text-white py-6  gap-3 px-3 bg-cyan-700">
                Seats: <BsBookmarks  className="mt-1 ms-2 text-cyan-300"/>
                <p className=""> {singleClass.seats}</p>
                <FaBookmark className="mt-1  text-cyan-300"/>  <p className=""> {singleClass.seatBooking}</p>
                <MdOutlinePayments className="mt-1 text-cyan-300"/> <p className=" rounded-md ">${singleClass.price}</p>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    );
};

export default PopularClasses;