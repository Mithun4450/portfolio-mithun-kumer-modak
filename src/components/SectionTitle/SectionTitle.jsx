import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SectionTitle = ({heading, subheading}) => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div data-aos="fade-up" className="w-full md:w-3/4 lg:w-1/2 p-3 mx-auto text-center my-5">
            <h3 className="text-rose-600 text-xl font-semibold">---- {subheading} ----</h3>
            <h1 className="text-3xl  font-bold">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;