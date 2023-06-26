import { Link } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" py-6 bg-slate-800 text-white px-5 lg:px-20 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <Link>
            {" "}
            <img
              className="w-24 h-12"
              src="https://i.ibb.co/j4gw6wb/logo-no-background.png"
              alt=""
            />{" "}
          </Link>
        </div>
        <div>
          <ul
            className={`lg:flex lg:space-x-7 absolute lg:relative ${
              open
                ? "top-28 border-1 border-gray-100 py-4 space-y-4 right-1 text-center z-10 lg:top-0 bg-slate-800 text-white w-40 h-36 lg:w-0 lg:h-0 "
                : "hidden"
            }`}
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Project</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn btn-success">Resume</button>
          <p className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="h-8 w-10 text-blue-500" />
            ) : (
              <FaAlignRight className="h-8 w-10 text-blue-500" />
            )}
          </p>
        </div>
      </div>

      {/* <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <FaTimes onClick={() => setIsOpen((isOpen) => !isOpen)} />
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Project</Link>
        </li>
      </motion.nav> */}
    </div>
  );
};

export default NavBar;
