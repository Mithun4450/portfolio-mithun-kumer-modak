import {
    FaFacebookSquare,
    FaGithub,
    FaLinkedin,
    FaLocationArrow,
    FaMailBulk,
  } from "react-icons/fa";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { useEffect, useRef } from "react";
  import emailjs from "@emailjs/browser";
  import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle/SectionTitle";
  
  const Contact = () => {
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  
    
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_pv6ux1o",
          "template_lsmustf",
          form.current,
          "pF56YZibcTeyvPztH"
        )
        .then(
          (result) => {
            console.log(result.text);

            // alert("message sent successfully");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Message sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div id="contact" className="my-14 w-4/5 mx-auto">
       <SectionTitle heading={"Let's Connect and Collaborate"}
       subheading={"Get in Touch"}
       ></SectionTitle>
        <div className="lg:grid grid-cols-3 mt-10">
          <div className="space-y-4 mt-4 mb-4 lg:mb-0" data-aos="fade-right">
            <div className="flex items-center">
              <FaMailBulk className="w-8 h-8" />
              <div className="ml-3">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-lg">mithunmodakdu@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLocationArrow className="w-8 h-8" />
              <div className="ml-3">
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-lg">Mymensingh, Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/mithun-kumer-modak-96a5a72a3/"
                target="blank"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/mithunmodak97" target="blank">
                <FaFacebookSquare className="w-6 h-6" />
              </a>
              <a href="https://github.com/Mithun4450" target="blank">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* form starts */}
          <form className="col-span-2" ref={form} onSubmit={sendEmail}>
            <div className="flex gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="user_name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg">Email *</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="user_email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="subject"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message *</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn btn-outline btn-error  font-bold mt-5" />
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;