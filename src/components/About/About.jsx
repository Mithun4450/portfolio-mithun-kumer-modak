import SectionTitle from "../SectionTitle/SectionTitle";
import about from "../../assets/about-photo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";


const About = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div id="about" className="my-14">
            <SectionTitle heading={"Crafting Dynamic Web Experiences with MERN Stack Expertise"}
            subheading={"About me"}
            ></SectionTitle>

            <div>
            <div className="mt-8 lg:flex items-center">
                <div
                className="lg:w-[30%] flex justify-center mb-4 lg:mb-0"
                data-aos="flip-left"
                >
                <img src={about} alt="" className="w-[300px] h-[300px] rounded-xl" />
                </div>
                <div className="lg:w-[70%]" data-aos="zoom-in-up">
                <p className="text-lg text-justify">
                Welcome to my world of web development! I'm Mithun Kumer Modak, a passionate full-stack developer who recently mastered the MERN (MongoDB, Express.js, React, Node.js) stack. My journey into the realm of web development began with an insatiable curiosity and a determination to create immersive, user-centric digital experiences.

                I thrive on transforming ideas into functional and aesthetically pleasing web applications. My foundational knowledge in HTML, CSS, and JavaScript combined with expertise in React for frontend and Node.js for backend development allows me to architect and deliver robust solutions.

                Beyond coding, I embrace challenges, continuously expand my skill set, and relish collaborating within dynamic teams. I'm eager to contribute my skills, drive, and fresh perspective to innovative projects.
                </p>
                
                <div className="flex gap-3 pt-6">
                    <a
                    href="https://www.linkedin.com/in/mithun-kumer-modak-96a5a72a3/"
                    target="blank"
                    >
                    <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/mithunmodak97?_rdc=1&_rdr" target="blank">
                    <FaFacebookSquare className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Mithun4450" target="blank">
                    <FaGithub className="w-6 h-6" />
                    </a>
                </div>
                </div>
            </div>
            </div>
            
        </div>

    );
};

export default About;