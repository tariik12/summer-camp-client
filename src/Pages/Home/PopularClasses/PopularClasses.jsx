import { useEffect, useState } from "react";
import ForHeader from "../../../Hooks/ForHeader/ForHeader";
import AOS from 'aos';
import 'aos/dist/aos.css';
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

    useEffect(() =>{
      AOS.init();
    },[])
    return (
        <div className="">
          <ForHeader title='Popular Classes'></ForHeader>
        <div className="grid grid-cols-1  md:grid-cols-3 md:gap-4 mx-4 ">
          {
            popularClasses.slice(0,6).map(singleClass => <div key={singleClass._id} className="card mb-4 w-full bg-white  shadow-lg hover:opacity-90 duration-75 hover:bg-slate-100 hover:border-x-4 hover:border-cyan-600 " data-aos="flip-down">
              <div>
              <img src={singleClass.image} className="w-full h-72 rounded-md" alt="Shoes" />
              
              </div>
              <div className="card-body text-center  mt-20">
                <h2 className="card-title">
                  Learn <FaArrowRight className="text-cyan-300 mt-1"/>  {singleClass.languageName}
                  <div className="badge  badge-secondary">NEW</div>
                </h2>
                <div className="">
                <p className="">
                  Trainer: {singleClass.instructorName}
                </p>
                <p className="">
                 Email: {singleClass.email}
  
                </p>
                </div>
               
                <div className="card-actions font-bold text-xl justify-end absolute top-64 start-16 shadow-2xl text-white py-6  gap-3 px-3 bg-cyan-700">
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