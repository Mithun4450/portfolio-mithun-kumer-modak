import image from "../../assets/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/u/1/uc?id=1UbigA8uKQ4D5M4cZ4tTAl0IEET1cRd8y&export=download",
      "_parent"

    );
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="pt-12 text-center lg:text-left border-2 border-rose-200 mt-5 shadow-lg ">
      <div className="lg:flex justify-between items-center">
        <div data-aos="fade-right" className="space-y-3">
          <h4 className="text-2xl font-semibold ml-10"><span className="text-rose-600">Hi,</span> I am</h4>
          <h1 className="text-4xl lg:text-5xl font-bold ml-10">Mithun Kumer Modak</h1>
          <p className="lg:text-xl font-semibold ml-10">
            <TypeAnimation
              sequence={[
                "A passionate Web Developer",
                1500,
                "A passionate MERN Stack Web Developer",
                1500,
                "A passionate Full Stack Web Developer",
                1500,
                "A passionate Frontend Web Developer",
                1500,
                
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
          <button className="btn btn-outline btn-error rounded-full font-bold ml-10">
            <a href="#contact">Hire Me</a>
          </button>
          <button
            onClick={handleDownload}
            className="btn btn-outline btn-error rounded-full font-bold ml-4"
          >
            Download Resume
          </button>
        </div>
        <div data-aos="fade-left" className="flex justify-center mr-14">
          <img
            src={image}
            
            className="w-[300px] rounded-t-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;