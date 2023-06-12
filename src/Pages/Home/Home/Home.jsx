import { Fade } from "react-awesome-reveal";
import Banner from "../Banner/Banner";
import ExtraFeature from "../ExtraFeature/ExtraFeature";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstuctor/PopularInstructor";


const Home = () => {
    return (
   
        <Fade cascade damping={0.8}>
       
           <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ExtraFeature></ExtraFeature>
        </Fade>
    );
};

export default Home;