import {  Zoom } from "react-awesome-reveal";
import Banner from "../Banner/Banner";
import ExtraFeature from "../ExtraFeature/ExtraFeature";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstuctor/PopularInstructor";


const Home = () => {
    return (
   
        <Zoom cascade damping={0.1}>
       
           <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ExtraFeature></ExtraFeature>
        </Zoom>
    );
};

export default Home;