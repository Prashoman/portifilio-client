import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear;
  return (
    <div className="bg-gray-700 w-full px-6 lg:px-24 py-6  text-white">
      <div className="lg:flex justify-between items-center space-y-3">
        <Link>
          {" "}
          <img
            className="w-24 h-12"
            src="https://i.ibb.co/j4gw6wb/logo-no-background.png"
            alt=""
          />{" "}
        </Link>
        <div>
          <p className="lg:text-xl font-sans">
            © {date} Prashoman Chakrabarti. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <a
            href="https://www.facebook.com/prashmon.chakroborty"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer  rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaFacebook className="w-10 h-8"></FaFacebook>
          </a>
          <a
            href="https://github.com/Prashoman"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaGithub className="w-10 h-8"></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/prashoman-chakrabarti-2b827423b/"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaLinkedinIn className="w-10 h-8"></FaLinkedinIn>
          </a>
          <a
            href="https://www.instagram.com/badhon_chakrabarti_/"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaInstagram className="w-10 h-8"></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
