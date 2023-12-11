import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import img1 from "../../assets/html.png"
import img2 from "../../assets/css.png"
import img3 from "../../assets/js.png"
import img4 from "../../assets/nodejs.png"
import img5 from "../../assets/express.png"
import img6 from "../../assets/mongo.png"
import img7 from "../../assets/tailwind.png"
import img8 from "../../assets/daisy.png"

const Skills = () => {
  useEffect(() => {
    AOS.init({duration: 3000});
  }, []);

  return (
    <div id="skills" data-aos="zoom-in" className="my-14">
      <SectionTitle heading={"Proficiencies in Web Development"}
      subheading={"My Skills"}
      ></SectionTitle>

      <div className="mt-10 grid lg:grid-cols-4 gap-5 w-3/4 mx-auto">
        <img className="w-20 h-20" src={img1} alt="" />
        <img className="w-20 h-20" src={img2} alt="" />
        <img className="w-20 h-20" src={img3} alt="" />
        <img className="w-20 h-20" src={img4} alt="" />
        <img className="w-20 h-20" src={img5} alt="" />
        <img className="w-20 h-20" src={img6} alt="" />
        <img className="w-20 h-20" src={img7} alt="" />
        <img className="w-20 h-20" src={img8} alt="" />

      </div>

      <div className="mt-10 grid lg:grid-cols-4 pl-16">
        {/* 1 */}
        <div className="space-y-2">
          <div>
            <h3 className="text-xl font-semibold">HTML</h3>
            <div className="w-3/4 h-4 bg-gray-300 rounded-md">
              <div
                className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">CSS</h3>
            <div className="w-3/4 h-4 bg-gray-300 rounded-md">
              <div
                className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">JavaScript</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Node.js</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">Express.js</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">MongoDB</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">DaisyUI</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-rose-600 rounded-md text-xs text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;