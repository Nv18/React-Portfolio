import React from "react";
import { ReactTyped } from "react-typed";
import myImage from "../assets/myImage.jpg"; 

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex bg-gray-900" 
    >
      <div className="w-1/2 h-full flex justify-center items-center text-white">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold mb-6 text-yellow-300">Hi, I'm Nikhil</h1>
          <h2 className="text-3xl mb-6">
            <ReactTyped
              strings={["A Web Developer", "A Designer", "A Problem Solver"]}
              typeSpeed={50}
              backSpeed={60}
              backDelay={1000}
              loop
            />
          </h2>
          <button className="bg-yellow-300 text-black p-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-yellow-400 transition-all duration-300">
            <a href="mailto:niksng101@gmail.com">Contact Me</a>
          </button>
        </div>
      </div>
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "60%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}

export default Home;
