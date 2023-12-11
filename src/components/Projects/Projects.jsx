import img1 from "../../assets/p1-1.png";
import img2 from "../../assets/p1-2.png";
import img3 from "../../assets/p1-3.png";
import img4 from "../../assets/p1-4.png";
import img5 from "../../assets/p2-1.png";
import img6 from "../../assets/p2-2.png";
import img7 from "../../assets/p2-3.png";
import img8 from "../../assets/p2-4.png";
import img9 from "../../assets/p3-1.png";
import img10 from "../../assets/p3-2.png";
import img11 from "../../assets/p3-3.png";
import img12 from "../../assets/p3-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div id="projects" data-aos="fade-up" className="my-20">
      <SectionTitle heading={"Hands-On Web Development Ventures"}
      subheading={"My Projects"}
      ></SectionTitle>


      {/* projects*/}
      <div >
        {/* 1 */}
        <div className="card bg-base-100 shadow-xl w-4/5 mx-auto">
          

            <Carousel className="h-[70vh] rounded-lg" autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
               
                <div>
                    <img src={img1} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img2} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img3} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img4} className="h-[70vh] rounded-lg" />
                    
                </div>
            </Carousel>

          <div className="card-body">
            <h2 className="card-title font-bold text-lg md:text-2xl">Concord Palace-A Building Management Website
            </h2>
            <p className="text-justify">
                      
            In this project Navbar, footer are common for all pages. In the home page there are banner, about the building, location of building, coupons sections.
            Navbar has logo and website name, Home, Apartment, and conditional Login icon. If the user is logged in, his/her profile picture will appear on the navbar replacing the login icon. If the user clicks on the profile picture, a drop-down will appear with not clickable User name, Dashboard, and Logout button.
           
            In the banner part there are automatic slides of some beautiful images of the building and its apartment rooms.

            On the apartments page there are apartment cards. If logged in user click on the agreement button, the data will be stored in the database. Status data will be pending. Pagination is applied at the bottom of this page. Every page has 6 apartments information. Rest 4 apartments information are available in last page.

            When a user clicks on the Dashboard, he will be redirected to User Dashboard. Member will be redirected to Member Dashboard. Admin will be redirected to Admin Dashboard.

            In the user dashboard there are My Profile and Announcements. In the member dashboard there are My Profile, Make payment, Payment History, Announcements. In the Admin dashboard there are Admin Profile, Manage Members, Make Announcement, Agreement Requests, Manage Coupons.

            If admin accept user's agreement request, user will be member. In manage member part, admin can remove member. If he do so, member will be turned into user. Admin can create announcement. He can also make coupons. He can make coupon available or unavailable.

            Member can make payment using payment form easily. If he apply coupon during rent payment he will get discount. Member is able to pay on card. He can see his payment history. He is also able to search payment details by month name.
            <br />
            <span className="font-bold">Technologies used in this project: </span>
             React.js, React-Router, Tailwind CSS, DaisyUI, React-Icons, React-toastify, Sweetalert, Sweetalert2, React-datepicker, Axios, Tanstack/react-query, Stripe/react-stripe-js, Firebase, Express.js, Jsonwebtoken, MongoDB
            </p>
            <div className="card-actions justify-start mt-2">
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://building-management-7b00e.web.app"
                    target="blank"
                    >
                    Live Site
                    </a>
                </button>
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://github.com/Mithun4450/m12a12-building-management-client"
                    target="blank"
                    >
                    GitHub(Client)
                    </a>
                </button>
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://github.com/Mithun4450/m12a12-building-management-server"
                    target="blank"
                    >
                    GitHub(Server)
                    </a>
                </button>
             
            </div>
          </div>
        </div>


        {/* 2 */}
        <div className="card bg-base-100 shadow-xl w-4/5 mx-auto mt-10">
          

            <Carousel className="h-[70vh] rounded-lg" autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
               
                <div>
                    <img src={img5} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img6} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img7} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img8} className="h-[70vh] rounded-lg" />
                    
                </div>
            </Carousel>

          <div className="card-body">
            <h2 className="card-title font-bold text-lg md:text-2xl">Study Online-A assignments based online study website
            </h2>
            <p className="text-justify">
                      
            Study Online is a assignments based online study website. There anyone can register and use its study process. He can create assignment, he can take assignment as examination, even he can be examiner of assignment.

            In this webpage, there are Home, All Assignment, Create Assignment, Submitted Assignment, My Assignment and Assignment Marks pages. Navbar and Footer are common for all pages. In the Home page there are banner, feature and FAQ parts.

            In all assignment page, there are all assignments. Here assignments can be filtered by their difficulty level. A logged user can see details of a assignment clicking on view assignment button. A creator of a assignment can update and delete his created assignment.

            On details of assignment page, user can take that assignment as examination. By clicking on take assignment button, he will go to submission assignment form page. There he can submitted his assignment as pdf link.

            All submitted assignment will be shown on submitted page. There status of all assignments are pending. By clicking on Give marks button, any logged user can give marks to the assignment.

            After giving marks to the assignment, its status will be changed into Completed.

            On the My Assignment page, any logged user can see his all pending and completed assignments.

            On the Assignment Marks page, all assignment(marks already given) will be shown.
            <br />
            <span className="font-bold">Technologies used in this project: </span>
            React.js, React-Router, Tailwind CSS, DaisyUI, React-Icons, Sweetalert, Firebase, Express.js, Jsonwebtoken, MongoDB
            </p>
            <div className="card-actions justify-start mt-2">
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://m11a11-online-group-study.web.app"
                    target="blank"
                    >
                    Live Site
                    </a>
                </button>
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://github.com/Mithun4450/m11a11-online-group-study-client"
                    target="blank"
                    >
                    GitHub(Client)
                    </a>
                </button>
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://github.com/Mithun4450/m11a11-online-group-study-server"
                    target="blank"
                    >
                    GitHub(Server)
                    </a>
                </button>
             
            </div>
          </div>
        </div>


        {/* 3 */}
        <div className="card bg-base-100 shadow-xl w-4/5 mx-auto mt-10">
          

            <Carousel className="h-[70vh] rounded-lg" autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
               
                <div>
                    <img src={img9} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img10} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img11} className="h-[70vh] rounded-lg" />
                    
                </div>
                <div>
                    <img src={img12} className="h-[70vh] rounded-lg" />
                    
                </div>
            </Carousel>

          <div className="card-body">
            <h2 className="card-title font-bold text-lg md:text-2xl">Auto Shop-A popular brands based automobiles shop website
            </h2>
            <p className="text-justify">
                      
            In this project Navbar and Footer are common for all pages. By default Home page is opened. If we click on Add Product, My cart and Login, we will go to these pages respectively. In the Home page there are banner, about us, popular brands and why us parts.

            On the add product page, we can add products to mongodb database. Brands name and brand images are also added to mongodb database and used to make brand cards.

            If we click on the brand card, it will take us to the products page of that brand. On the products page there are slider of three advertisement image and cards of products. On the product card there are details and update button.

            If we click on the details button, it will take us on the details page of product. There is Add to cart button.

            If we click on the add to cart button, product will be saved on the mongodb database and will be shown on the My cart page. User will get sweet alert message of adding to cart. Here user can delete product from the cart.

            If we click on the Update button, it will take us to Update page. There we can update the information of product.

            Add Product, Product details, My Cart, Update pages are in the protected route. User will not be able to see these pages unless he is logged in.

            If use is logged in, user's name image and logout will be shown on the navbar.
            <br />
            <span className="font-bold">Technologies used in this project: </span>
            React.js, React-Router, Tailwind CSS, DaisyUI, React-Icons, Sweetalert, Firebase, Express.js, MongoDB
            </p>
            <div className="card-actions justify-start mt-2">
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://m10a10-brand-shop-client.web.app"
                    target="blank"
                    >
                    Live Site
                    </a>
                </button>
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://github.com/Mithun4450/m10a10-brand-shop-client"
                    target="blank"
                    >
                    GitHub(Client)
                    </a>
                </button>
                <button className="btn btn-outline btn-error rounded-full font-bold ml-4">
                    <a
                    href="https://github.com/Mithun4450/m10a10-brand-shop-server"
                    target="blank"
                    >
                    GitHub(Server)
                    </a>
                </button>
             
            </div>
          </div>
        </div>


       


      </div>
    </div>
  );
};

export default Projects;