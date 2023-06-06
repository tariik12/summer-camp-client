import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
     
      };
    return (
        <div className="h-75">
              <Slider {...settings}>
      <div>
        <img className="w-100 h-100" src="https://i2.wp.com/freepolicybriefs.org/wp-content/uploads/2012/12/20121229-Accountability-in-Russia-Image-02.jpg?ssl=1" alt="" />
      </div>
      <div>
      <img className="w-100 h-100" src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/01/17/3633531-1338082757.jpg?itok=SuZE17Bn" alt="" />
      </div>
      <div>
      <img className="w-100 h-100" src="https://i2.wp.com/freepolicybriefs.org/wp-content/uploads/2012/12/20121229-Accountability-in-Russia-Image-02.jpg?ssl=1" alt="" />
      </div>
      <div>
      <img className="w-100 h-100" src="https://static.euronews.com/articles/stories/06/17/53/80/1440x810_cmsv2_a0a5e7cc-ffae-5264-a7c6-8bd86d6b94e7-6175380.jpg" alt="" />
      </div>
      <div>
      <img className="w-100 h-100" src="https://i2.wp.com/freepolicybriefs.org/wp-content/uploads/2012/12/20121229-Accountability-in-Russia-Image-02.jpg?ssl=1" alt="" />
      </div>
      <div>
      <img className="w-100 h-100" src="https://images.hindustantimes.com/img/2023/01/05/550x309/pexels-mikhail-nilov-8430380_1672892304704_1672892370540_1672892370540.jpg" alt="" />
      </div>
    </Slider>
        </div>
    );
};

export default Banner;