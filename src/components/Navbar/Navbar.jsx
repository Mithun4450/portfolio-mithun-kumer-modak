
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
  
    const handleDownload = () => {
      window.open(
        "https://drive.google.com/u/1/uc?id=1UbigA8uKQ4D5M4cZ4tTAl0IEET1cRd8y&export=download",

        "_parent"
        
      );
    };
  
    return (
      <>
        <div className="navbar bg-base-200 h-16 pt-4 font-bold">
          <div className="navbar-start">
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
            <a className="normal-case text-4xl font-bold hover:text-rose-600">
              Mithun Kumer Modak
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <div className="hidden lg:block">
              <a
                className="btn btn-outline btn-error rounded-full font-bold"
                onClick={handleDownload}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;