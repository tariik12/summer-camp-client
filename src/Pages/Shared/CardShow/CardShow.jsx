import { FaAngleDoubleRight } from "react-icons/fa";
import './cardShow.css'
import { Link } from "react-router-dom";

const CardShow = ({name, image}) => {
    return (
       
           <div className="card h-[400px] bg-center bg-cover  bg-opacity-20 text-white overflow-hidden" style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
            url('${image}')`
          }}> 
          <div className="cardShow">

              <img src={image} className="h-48 w-48  mt-5 rounded-3xl  " alt="" />
        
            <div className="bg-red">
            <Link to={`details/${name}`}>
          <h1>{name}</h1>
          
             <FaAngleDoubleRight className=" mb-5   text-2xl mx-auto text-cyan-300  "/>
            </Link>
            </div>
            
            <div>
            </div>
            <div className=" card-body ">
            </div>
          </div>
             
             
        </div>
        
    );
};

export default CardShow;