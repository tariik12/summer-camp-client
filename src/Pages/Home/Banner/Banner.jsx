import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import arabia from '../../../assets/arabi.jpg'
import china from '../../../assets/china.jpg'
import japan from '../../../assets/arabi.jpg'
import russia from '../../../assets/russia.jpg'
import london from '../../../assets/london.jpg'
import turkey from '../../../assets/turkey.webp'
import korea from '../../../assets/korea.webp'

import 'aos/dist/aos.css'
import './Zoom/zoom.css'

const Banner = () => {






  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,


  };




  return (
    <div className="mb-20  h-[400px] md:h-[600px] w-full overflow-hidden md:overflow-visible"  >
      <Slider {...settings} className="">
        <div className=""  >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${arabia}')`
          }}
          >

            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">Saudi Arabia</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                Saudi Arabia official language is Arabic, specifically the Modern Standard Arabic variant.
                Arabic is deeply rooted in the country history, culture, and religion, with the Quran being written in classical Arabic.
                The dialect spoken in Saudi Arabia is known as
                <span className="hidden md:block"> Najdi Arabic , which is prevalent in the central region of the country. Arabic plays a vital role in everyday life, education, and official communication within Saudi Arabia...</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>
        <div   >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${china}')`
          }}
          >
            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">china</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                China official language is Mandarin, also known as Standard Chinese or Putonghua.
                Mandarin is based on the Beijing dialect and is spoken by the majority of the Chinese population.

                <span className="hidden md:block">   It is one of the most widely spoken languages globally, with over a billion speakers.
                  Chinese characters, known as Hanzi, are used in written communication across China....</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>
        <div  >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${russia}')`
          }}
          >
            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">Russian</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                Russian is the official language of Russia and one of the six official languages of the United Nations.
                It belongs to the Slavic language family and uses the Cyrillic alphabet.

                <span className="hidden md:block"> Russian is spoken by over 260 million people worldwide, making it one of the most widely spoken languages in Europe....</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>
        <div  >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${london}')`
          }}
          >
            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">British, United Kingdom</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                The United Kingdom has a diverse range of regional accents and dialects, such as Cockney, Geordie, and Scottish English. Additionally, minority languages like Welsh, Scottish Gaelic,
                <span className="hidden md:block">and Irish Gaelic are also spoken in specific regions. Language education and promotion efforts aim to preserve and celebrate the linguistic diversity within the United Kingdom while emphasizing English proficiency as a key skill for communication and integration....</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>
        <div  >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${japan}')`
          }}
          >
            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">Japan</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                The official language of Japan is Japanese.
                Japanese is spoken by the majority of the population in Japan and is the primary mode of communication in all aspects of life.
                It belongs to the Japonic language family and has several dialects across different regions.

                <span className="hidden md:block"> Japanese uses three writing systems: hiragana, katakana, and kanji (Chinese characters).
                  Efforts are made to promote the Japanese language through education and cultural initiatives, both domestically and internationally....</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>
        <div  >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${turkey}')`
          }}
          >
            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">Turkey Arabia</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                The official language of Turkey is Turkish.
                Turkish is spoken by the majority of the population in Turkey and serves as the primary means of communication.
                It is a member of the Turkic language family and uses the Latin alphabet.
                Turkish has a rich cultural heritage
                <span className="hidden md:block">and has been influenced by various languages throughout history.
                  Efforts are made to preserve and promote the Turkish language through educational programs and initiatives, emphasizing its importance in national identity and cultural expression....</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>
        <div  >
          <div className="flex h-[400px] md:h-[600px] text-white justify-center items-center bg-cover bg-no-repeat " style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${korea}')`
          }}
          >
            <div className="md:p-32 p-4 ">
              <h4 className="uppercase md:text-4xl text-xl text-white"><span className="text-cyan-300 font-bold">Korea</span> Language Hub</h4>
              <p className="md:mt-4 mt-2 w-75 text-blue-50 text-sm md:text-lg">
                Korea is a region divided into two separate countries: North Korea and South Korea. The official language of both countries is Korean.

                Korean, also known as Hangul, is a unique language with its own alphabet, which was created by King Sejong the Great in the 15th century. It is the primary means of communication in both North and South Korea.


                <span className="hidden md:block"> The Korean language is agglutinative, meaning that words are formed by adding suffixes to root words. It has a rich cultural and literary tradition, with famous works of literature and poetry...</span>
              </p>
              <button className="btn btn-outline mt-2 md:mt-4 btn-info btn-sm md:btn-md text-xs md:text-xl text-white border-b-2">Read More</button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Banner;