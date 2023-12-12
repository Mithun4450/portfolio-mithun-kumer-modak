import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Voluntary from "../Voluntary/Voluntary";


const Home = () => {
    return (
        <div id="home" className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Experience></Experience>
            <Voluntary></Voluntary>
            <Contact></Contact>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;