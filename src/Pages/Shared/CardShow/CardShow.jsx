
const CardShow = ({name,description, image}) => {
    return (
        <div>
           <div className="hero min-h-screen" style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('${image}')`
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{name}</h1>
              <p className="mb-5">{description}</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CardShow;