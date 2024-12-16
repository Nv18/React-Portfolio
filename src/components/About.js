import React from "react";
import myImage from "../assets/img2.jpg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center p-16 bg-gray-100 text-gray-900" 
    >
      
      <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <img
          src={myImage}
          alt="Your Image"
          className="rounded-full w-72 h-72 object-cover shadow-2xl transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      
      <div className="lg:w-1/2 lg:pl-10 text-center lg:text-left">
        <h2 className="text-5xl font-semibold mb-6 text-gray-900">About Me</h2>
        <p className="text-lg text-gray-800 mb-6">
          I am a dedicated and passionate student pursuing a B.Tech degree in Electronics and Communication Engineering at the National Institute of Technology, Silchar. As I head into my second year, I am deeply passionate about web development and competitive programming. My academic journey has equipped me with a strong foundation in technology and problem-solving skills, which I continually strive to enhance through practical projects and challenges. My goal is to blend my technical expertise with creativity to build innovative web solutions while excelling in the competitive programming arena.
        </p>
        
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-yellow-300 text-lg font-semibold rounded-md shadow-lg hover:bg-yellow-400 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default About;
