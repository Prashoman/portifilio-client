import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Abouts = () => {
  return (
    <div className="px-5 lg:px-20 bg-slate-800 text-white py-8 section-about -mt-32 lg:-mt-24">
      <div className="text-center w-56 mx-auto">
        <h1 className="text-4xl font-sans font-bold mt-14 border-b-2 border-orange-700 lg:mt-10">
          About Me
        </h1>
      </div>
      <div className="lg:flex justify-between mt-8">
        <img
          src="https://i.ibb.co/pJHKFYc/Whats-App-Image-2023-05-26-at-4-15-32-PM-removebg-preview.png"
          className="max-w-sm rounded-lg border-2 border-orange-500 img-style"
        />
        <div className="ms-6">
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Skills</Tab>
            </TabList>
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>My Skills</h2>
              <div>
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
              </div>
            </TabPanel>
          </Tabs>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
