import React from "react";

function Skills() {
  return (
    <section id="skills" className="bg-gray p-12 text-white">
      <h2 className="text-5xl font-semibold text-center text-gray-900 mb-12 tracking-wider">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-72 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <i className="fab fa-html5 text-4xl text-orange-400 mr-4"></i>
            <h3 className="text-2xl font-semibold text-white">HTML</h3>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-orange-500 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>

        
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-72 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <i className="fab fa-css3-alt text-4xl text-blue-500 mr-4"></i>
            <h3 className="text-2xl font-semibold text-white">CSS</h3>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>

        
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-72 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <i className="fab fa-js-square text-4xl text-yellow-400 mr-4"></i>
            <h3 className="text-2xl font-semibold text-white">JavaScript</h3>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>

        
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-72 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <i className="fab fa-react text-4xl text-teal-500 mr-4"></i>
            <h3 className="text-2xl font-semibold text-white">React</h3>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-teal-500 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>

        
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-72 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <i className="fab fa-tailwindcss text-4xl text-teal-400 mr-4"></i>
            <h3 className="text-2xl font-semibold text-white">Tailwind CSS</h3>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-teal-500 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
