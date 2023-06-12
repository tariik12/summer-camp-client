import { Fade } from "react-awesome-reveal";


const ForHeader = ( {title}) => {
    return (
        <Fade cascade damping={0.1}>
  <h2 className='font-bold text-4xl mb-6 text-center text text-cyan-300'>{title}</h2>
</Fade>
        
    );
};

export default ForHeader;