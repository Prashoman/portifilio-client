import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" py-6 bg-slate-800 text-white px-5 lg:px-20 fixed top-0 left-0 w-full z-50  shadow-lg">
      <div
        className="flex justify-between items-center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <Link to="/">
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
            className={`lg:flex lg:space-x-7  absolute lg:relative ${
              open
                ? "top-24  border-2 border-[#4e9eff] py-4 space-y-4 right-1 text-center z-10 lg:top-0 bg-slate-800 text-white w-40 h-auto lg:w-0 lg:h-0 "
                : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[#4e9eff]" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-[#4e9eff]" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "text-[#4e9eff]" : "")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-[#4e9eff]" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "text-[#4e9eff]" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-[#4e9eff]" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-3">
          <motion.a
            whileHover={{
              scale: 1.2,
              //textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="Prashoman Chakrabarti_Resume.pdf"
            download="Resume"
            className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
          >
            Resume
          </motion.a>
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
