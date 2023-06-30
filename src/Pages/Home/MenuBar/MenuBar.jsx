import Lottie from "lottie-react";
import profile from "../../../assets/profile.json";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="hero w-full min-h-screen bg-gray-700 text-white px-5 lg:px-20 section-style">
      <div className="w-full lg:flex justify-between items-center">
        <div className="w-full  lg:w-1/2">
          <h1 className="text-xl lg:text-3xl font-bold">
            Hi I Am{" "}
            <span className="text-2xl lg:text-4xl  font-bold">
              Prashoman Chakrabarti
            </span>
          </h1>
          <div className="animated-text">
            <h1>A MERN STACK DEVELOPER</h1>
            <h1>A FRONT END DEVELOPER</h1>
            <h1>A WEB DEVELOPER</h1>
          </div>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm">
            See More Project
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <Lottie animationData={profile} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
