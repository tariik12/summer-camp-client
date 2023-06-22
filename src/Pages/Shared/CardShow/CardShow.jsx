import { FaAngleDoubleRight } from "react-icons/fa";
import './cardShow.css'
import { Link } from "react-router-dom";

const CardShow = ({name, image}) => {
    return (
       
           <div className="card h-[400px] bg-center bg-cover  bg-opacity-20 text-white" style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
            url('${image}')`
          }}> 
          <div className="cardShow">

              <img src={image} className="h-48 w-48  mt-5 rounded-3xl  " alt="" />
        
            <Link>
            <h1 className="  mx-auto card-title text-2xl mt-5 absolute visible hover:invisible text-cyan-300 font-bold">{name.slice(0,10)}....</h1>
             <FaAngleDoubleRight className=" mb-5   text-2xl mx-auto text-cyan-300  "/>
            </Link>
            
            <div>
            </div>
            <div className=" card-body ">
              
              {/* <div className="card-actions justify-center">
              <button className="btn btn-info btn-outline btn-sm md:btn-md   border-b-4">Know More</button>
              </div> */}
            </div>
          </div>
             
             
        </div>
        
    );
};

export default CardShow;