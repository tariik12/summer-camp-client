import { useEffect, useState } from "react";
import CardShow from "../../Shared/CardShow/CardShow";
import ForHeader from "../../../Hooks/ForHeader/ForHeader";


const ExtraFeature = () => {
const [extraData, setExtraData] = useState([])
console.log()
    useEffect(() =>{
        fetch('extra.json')
        .then(res => res.json())
        .then(data =>setExtraData(data))
    },[])
    return (
        <div className="">
          <ForHeader title={'Why Do You Learn foreign Language ?'}></ForHeader>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4'>
        {
          extraData.map((data,index) =><CardShow key={index} image={data.image} name={data.name} description={data.description}></CardShow>)
        }
      </div>
        </div>
    );
};

export default ExtraFeature;