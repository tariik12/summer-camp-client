import { useEffect, useState } from "react";


const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/ShowInstructor')
        .then(res =>res.json())
        .then(data =>{
            setPopularInstructor(data)
        })
    },[])
    return (
        <div className="py-28">
        <div className="grid  grid-cols-1 w-full md:grid-cols-3 gap-4">
        {
            popularInstructor.slice(0,6).map(instructor =><div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
            <img src={instructor.photo} className="w-full h-72" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">
                Trainer Name: {instructor.name}
              </h2>
              <h2 className="card-title">
              Trainer Email: {instructor.email} 
              </h2>
            </div>
          </div>)
        }
          </div>
    </div>
    );
};

export default PopularInstructor;