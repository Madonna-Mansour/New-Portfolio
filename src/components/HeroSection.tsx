import React from "react";
import { Download } from "lucide-react";
import placeholder from "../../public/imgg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <span className="text-purple-300 text-lg">Hello! I Am </span>
          <span className="text-purple-400 font-semibold text-2xl">
            Madonna Mansour
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 p-1 animate-float">
              <div className="w-full h-full rounded-3xl bg-gray-200 flex items-center justify-center">
                <div className=" rounded-2xl flex items-center justify-center">
                  <img src={placeholder} className="w-full rounded-3xl h-44 p- " alt="photo" />
                  <div className="w-20 h-14 bg-gray-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left lg:max-w-lg">
            <h1 className="text-white text-4xl lg:text-5xl text-center lg:text-start font-bold mb-4">
              Front End Developer
            </h1>
            <p className="text-white text-lg mb-2">
              with a passion for building responsive, user-friendly websites. I
              create clean, modern interfaces using HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, Redux Toolkit, Axios.
            </p>
            <a
              href="./Madonna Mansour.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-600 m-auto  lg:ms-auto  mt-4 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download my resume</span>
              </button>
            </a>
          </div>
        </div>

        {/* Professional Title */}
        <div className="text-center">
          <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            I'm a front end developer
          </h3>
          <p className="text-gray-300 text-lg">
            always learning, always building
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
