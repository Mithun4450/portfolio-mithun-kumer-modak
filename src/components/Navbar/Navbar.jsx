
const Navbar = () => {
    const navLinks = (
      <>
        <li>
          <a className="hover:border-2 border-y-rose-600 hover:text-rose-600" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:border-2 border-y-rose-600 hover:text-rose-600" href="#about">About</a>
        </li>
        <li>
          <a className="hover:border-2 border-y-rose-600 hover:text-rose-600" href="#skills">Skills</a>
        </li>
        <li>
          <a className="hover:border-2 border-y-rose-600 hover:text-rose-600" href="#projects">Projects</a>
        </li>
        
        <li>
          <a className="hover:border-2 border-y-rose-600 hover:text-rose-600" href="#contact">Contact</a>
        </li>
      </>
    );
  
      
    return (
      <>
        <div className="navbar bg-rose-200 h-16 p-8 font-bold">
          <div className=" w-full mx-auto lg:navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <a className="normal-case text-lg md:text-xl lg:text-2xl text-center lg:text-left  font-bold hover:text-rose-600">
              Mithun Kumer Modak
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <div className="hidden lg:block">
              <button className="btn btn-outline  rounded-full font-bold hover:btn-error ">
              <a href="#contact">Hire Me</a>
            </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;