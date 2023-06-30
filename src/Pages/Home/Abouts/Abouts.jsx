import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Abouts = () => {
  return (
    <div className="px-5 lg:px-20 w-full h-full bg-slate-800 text-white py-10 section-about -mt-36 lg:-mt-24">
      <div className="text-center py-10">
        <h1 className="text-3xl font-sans font-bold text-[#4e9eff] mt-20  lg:mt-10">
          About Me
        </h1>
      </div>
      <div className="space-y-6 lg:flex justify-between mt-8">
        <img
          src="https://i.ibb.co/pJHKFYc/Whats-App-Image-2023-05-26-at-4-15-32-PM-removebg-preview.png"
          className="w-full lg:w-80 h-full rounded-lg border-2 border-[#4e9eff] img-style"
        />
        <div className="lg:ms-6 w-full h-full">
          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Skills</Tab>
              <Tab>Contact</Tab>
            </TabList>
            <TabPanel>
              <p>
                I’m Prashoman Chakrabarti, dedication and hardworking Person.I
                have learn more technology as HTML, CSS3, Bootstrap, tailwind,
                Javascript, react Js, node JS, Express JS, MongoDB etc. To work
                in a challenging environment where I can prove myself by
                utilizing my skills & knowledge and resulting in organizational
                growth as well as individual development.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl font-sans font-bold">My Skills</h2>
              <div className="space-y-3">
                <div>
                  <h1>Expertise :</h1>
                  <div className="space-x-4 space-y-3 text-start">
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      HTML5
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      CSS3
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Bootstrap
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Tailwind
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      JavaScript
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      ES6
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      React JS
                    </button>
                  </div>
                </div>
                <div>
                  <h1>Comfortable : </h1>
                  <div className="space-x-4 text-start">
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Node JS
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Express JS
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      MongoDB
                    </button>
                  </div>
                </div>
                <div>
                  <h1>Familiar with : </h1>
                  <div className="space-x-4 text-start">
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Next js
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      MVC
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Mongoose
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Redux
                    </button>
                  </div>
                </div>
                <div>
                  <h1>Tools :</h1>
                  <div className="space-x-4 text-start space-y-3">
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Visual Studio
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Chrome dev Tool
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Netlify
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Figma
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      Firebase
                    </button>
                    <button className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl"> My Contact Information</h2>
              <div className="w-full h-full py-6 space-y-4">
                <div>
                  <h1 className="flex items-center text-xl">
                    <HiOutlineMail />: prashomanchakrabarti1@gmail.com{" "}
                  </h1>

                  <h1 className="flex items-center text-xl">
                    <HiOutlinePhone />: +8801940617911
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl">
                    Address: Mirpur, Dhaka, Bangladesh
                  </h1>
                </div>
                <div className="flex items-center space-x-5">
                  <a href="https://www.facebook.com/prashmon.chakroborty">
                    {" "}
                    <FaFacebook className="w-10 h-8"></FaFacebook>
                  </a>
                  <a href="https://github.com/Prashoman">
                    <FaGithub className="w-10 h-8"></FaGithub>
                  </a>
                  <a href="https://www.linkedin.com/in/prashoman-chakrabarti-2b827423b/">
                    <FaLinkedinIn className="w-10 h-8"></FaLinkedinIn>
                  </a>
                  <a href="https://www.instagram.com/badhon_chakrabarti_/">
                    <FaInstagram className="w-10 h-8"></FaInstagram>
                  </a>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          <div className="my-3">
            <a
              href="Prashoman Chakrabarti_Resume.pdf"
              download="Resume"
              className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
