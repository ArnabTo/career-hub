import HeroImg from "../../assets/images/user.png"
const Hero = () => {
    const gradientStyle = {
        background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)',
      };
    return (
        <div>
        <div className="hero min-h-screen" style={gradientStyle}>
        <div className="hero-content flex-col lg:flex-row">
        <div>
        <h1 className="w-4/5 md:w-[560px] text-[#1A1919] font-extrabold m-auto text-center lg:text-start text-4xl lg:text-7xl lg:leading-[90px] ">One Step Closer To Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Dream Job</span></h1>
        <p className="py-6 text-[#757575] text-lg font-medium leading-7 ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="btn btn-primary bg-gradient-to-r from-blue-400 to-purple-600 outline-none border-none">Get Started</button>
      </div>
        <img src={HeroImg} className="max-w-xs lg:max-w-xl rounded-lg" />
        </div>
      </div>
        </div>
    );
};

export default Hero;

// <div className="hero min-h-screen px-0 md:px-44" style={gradientStyle}>
// <div className="hero-content flex-col lg:flex-row-reverse m-0 p-0">
//   <img src={HeroImg} className="max-w-xs lg:max-w-xl rounded-lg" />
//   <div className="w-full md:mr-20 px-4">
//     <h1 className="w-4/5 md:w-[560px] text-[#1A1919] font-extrabold m-auto text-center lg:text-start text-4xl lg:text-7xl lg:leading-[90px] ">One Step Closer To Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"> Dream Job</span></h1>
//     <p className="py-6 text-[#757575] text-lg font-medium leading-7 ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
//     <button className="btn btn-primary bg-gradient-to-r from-blue-400 to-purple-600 outline-none border-none">Get Started</button>
//   </div>
// </div>
// </div>