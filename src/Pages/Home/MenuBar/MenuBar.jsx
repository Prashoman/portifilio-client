import Lottie from "lottie-react";
import profile from "../../../assets/profile.json";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="hero min-h-screen bg-gray-700 text-white px-5 lg:px-20 section-style">
      <div className="w-full lg:flex justify-between items-center">
        <div className="w-full  lg:w-1/2">
          <h1 className="text-3xl font-bold">Hi I Am Prashoman Chakrabarti</h1>
          <h1>A MERN STACK DEVELOPER</h1>
          <h1>A FRONT END DEVELOPER</h1>
          <h1>A WEB DEVELOPER</h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="w-full lg:w-1/2">
          <Lottie animationData={profile} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
