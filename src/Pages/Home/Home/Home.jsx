
import Banner from "../Banner/Banner";
import ExtraFeature from "../ExtraFeature/ExtraFeature";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstuctor/PopularInstructor";


const Home = () => {
    return (
   
      <div>

          <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructor></PopularInstructor>
           <ExtraFeature></ExtraFeature>
      </div>
       
       
    );
};

export default Home;