
import fourZeroFour from '../src/assets/fourZeroFour.avif'
const Error = () => {

    return (
        <div className='h-[600px]' style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${fourZeroFour}')`
          }}>
          
            <img className='mx-auto ' src={fourZeroFour} alt="" />
              <p className='text-center text-4xl font-extrabold text-red-600 '>  Not Fount Page</p>
        </div>
    );
};

export default Error;