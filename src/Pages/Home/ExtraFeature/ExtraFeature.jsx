import { useEffect, useState } from "react";
import CardShow from "../../Shared/CardShow/CardShow";


const ExtraFeature = () => {
const [extraData, setExtraData] = useState([])
console.log()
    useEffect(() =>{
        fetch('extra.json')
        .then(res => res.json())
        .then(data =>setExtraData(data))
    },[])
    return (
        <div className=" mb-10 text-center">
            <h1 className="uppercase md:text-4xl text-xl text-cyan-300 font-bold">Why Do You Learn foreign Language ?</h1>
            <p className="md:mt-4 mt-2 w-75 text-blue-200 text-sm md:text-lg">There are several reasons why a person might choose to learn a foreign language. Here are six points that highlight the benefits:</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          extraData.map((data,index) =><CardShow key={index} image={data.image} name={data.name} description={data.description}></CardShow>)
        }
      </div>
        </div>
    );
};

export default ExtraFeature;