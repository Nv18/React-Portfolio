import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="p-8 sm:p-12 md:p-16 bg-gray-300 text-gray-900" 
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 sm:mb-14 md:mb-16 tracking-wider text-gray-900">
        My Educational Journey
      </h2>
      <div className="flex flex-col sm:flex-row md:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-8">
       
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-80 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="fas fa-graduation-cap text-4xl text-teal-500 mr-4 hover:text-teal-700 transition-colors duration-300"></i>
            <h3 className="text-2xl font-semibold text-gray-800">Bachelor's Degree</h3>
          </div>
          <p className="text-gray-700 text-lg">Currently pursuing my BTech degree at the National Institute Of Technology, Silchar.</p>
          <p className="text-gray-500">Current CGPA: 7.87</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-80 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="fas fa-building text-4xl text-yellow-500 mr-4 hover:text-yellow-600 transition-colors duration-300"></i>
            <h3 className="text-2xl font-semibold text-gray-800">Senior Secondary Schooling</h3>
          </div>
          <p className="text-gray-700 text-lg">Attended Hindustani Kendriya Vidyalaya, Guwahati.</p>
          <p className="text-gray-500">Percentage: 92.2</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 md:w-80 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="fas fa-graduation-cap text-4xl text-green-500 mr-4 hover:text-green-700 transition-colors duration-300"></i>
            <h3 className="text-2xl font-semibold text-gray-800">Secondary Schooling</h3>
          </div>
          <p className="text-gray-700 text-lg">Attended Shishu Niketan High School, Guwahati.</p>
          <p className="text-gray-500">Percentage: 92</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
