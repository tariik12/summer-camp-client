import { useEffect, useState } from "react";
import ForHeader from "../../../Hooks/ForHeader/ForHeader";


const PopularInstructor = () => {
  const [Follow, setFollow] = useState(false)

  const handleFollow =()=>{
    setFollow(true)


  }
  const [popularInstructor, setPopularInstructor] = useState([])
  useEffect(() => {
    fetch('https://summer-language-camp-server.vercel.app/ShowInstructor')
      .then(res => res.json())
      .then(data => {
        setPopularInstructor(data)
      })
  }, [])
  return (
    <div className="py-28">
      <ForHeader title={'Popular Instructor'}></ForHeader>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        {
          popularInstructor.slice(0, 6).map(instructor =>
          
        <div key={instructor._id} className="card rounded-md bg-base-100 ">
            <div className=" avatar z-10 absolute ms-28">
              <div className="w-48 rounded-full  mx-auto mt-10 ring  ring-cyan-300 ring-offset-base-100 ring-offset-2">
                <img src={instructor.photo} />
              </div>
            </div>
            <div  className=" rounded-md w-full h-[400px] pt-56 shadow-lg hover:opacity-40 duration-75  hover:bg-slate-400 ">
            
            {/* <img className="w-full h-72  rounded-full" alt="Shoes" /> */}
            <div className="card-body text-center ">
              <h2 className=" font-bold text-xl">
                {instructor.name}
              </h2>
              <p >
              {/* <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span> */}
                 {instructor.email}
              </p>

            </div>
          </div>
              <div className="card-actions absolute bottom-0 z-10 ms-36 justify-center mb-5">
              <button onClick={handleFollow} className="btn btn-info btn-outline btn-sm md:btn-md   border-b-4">{Follow?"Following":"Follow"}</button>
              </div>
        </div>
          
          )
        }
      </div>
    </div>
  );
};

export default PopularInstructor;