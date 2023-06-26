import Marquee from "react-fast-marquee";

const SkillsSection = () => {
  return (
    <div className="bg-gray-700 py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-sans font-bold text-white">My Skills</h1>
      </div>
      <Marquee>
        <div className=" space-x-4">
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            HTML5
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            CSS3
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            Bootstrap
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            Tailwind
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            JavaScript
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            React JS
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            Node JS
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            Express JS
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            MongoDB
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            Mongoose
          </button>
          <button className="border-2 text-white border-white px-4 py-3 hover:bg-gray-500">
            MVC
          </button>
        </div>
      </Marquee>
    </div>
  );
};

export default SkillsSection;
