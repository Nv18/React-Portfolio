import React from "react";
import Slider from "react-slick";


import movieSearchImg from "../assets/movie-searching.png"; 
import amazonCloneImg from "../assets/amazon-clone.png";  
import portfolioImg from "../assets/portfolio.png";  
import funGamesImg from "../assets/rps.png";
import currencyConverterImg from "../assets/cc.png";

function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="bg-gray-900 p-12 text-white">
      <h2 className="text-4xl font-semibold text-center text-yellow-300 mb-12 tracking-wider">
        My Projects
      </h2>
      <Slider {...settings}>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="relative mb-4">
            <img
              src={movieSearchImg}  
              alt="Movie-Searching Website"
              className="w-36 h-36 object-cover rounded-full border-4 border-teal-500 transform hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-full opacity-50"></div>
          </div>
          <h3 className="text-xl font-semibold text-yellow-400">Movie-Searching Website</h3>
          <p className="text-gray-300 mb-4">
            Developed 'Movie-Searching Website', a dynamic movie website leveraging the OMDB API. Transforming it into an online movie streaming platform with a subscription model.
          </p>
          <div className="mt-4">
            <button className="bg-gray-500 text-white p-2 rounded mr-2 transform hover:scale-110 transition-all duration-300">
              Work Under Progress
            </button>
          </div>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="relative mb-4">
            <img
              src={amazonCloneImg}  
              alt="Amazon-Clone"
              className="w-36 h-36 object-cover rounded-full border-4 border-blue-500 transform hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-full opacity-50"></div>
          </div>
          <h3 className="text-xl font-semibold text-yellow-400">Amazon-Clone</h3>
          <p className="text-gray-300 mb-4">
            Developed an Amazon clone website using HTML and CSS, replicating the e-commerce giant's layout and design. The project features product listings, navigation menus, and a shopping cart.
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white p-2 rounded transform hover:scale-110 transition-all duration-300">
              <a href="https://github.com/Nv18/Amazon-Clone.git">Source Code</a>
            </button>
          </div>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="relative mb-4">
            <img
              src={portfolioImg}  
              alt="Portfolio"
              className="w-36 h-36 object-cover rounded-full border-4 border-yellow-500 transform hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-full opacity-50"></div>
          </div>
          <h3 className="text-xl font-semibold text-yellow-400">Portfolio</h3>
          <p className="text-gray-300 mb-4">
            Developed a dynamic portfolio website using HTML, CSS, and JavaScript. Showcases my web development skills with responsive design, interactive elements, and a user-friendly interface.
          </p>
          <div className="mt-4">
            <button className="bg-gray-500 text-white p-2 rounded mr-2 transform hover:scale-110 transition-all duration-300">
              Work Under Progress
            </button>
          </div>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="relative mb-4">
            <img
              src={funGamesImg}  
              alt="Fun Games"
              className="w-36 h-36 object-cover rounded-full border-4 border-teal-500 transform hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-full opacity-50"></div>
          </div>
          <h3 className="text-xl font-semibold text-yellow-400">Fun Games</h3>
          <p className="text-gray-300 mb-4">
            Rock Paper Scissors and Tic Tac Toe are fun, interactive JavaScript games showcasing game logic and user interaction. Features include real-time results, engaging gameplay, and sleek interfaces.
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white p-2 rounded mr-2 transform hover:scale-110 transition-all duration-300">
              <a href="https://github.com/Nv18/Rock-Paper-Scissors-Game.git">Source Code</a>
            </button>
            <button className="bg-blue-500 text-white p-2 rounded mt-2 transform hover:scale-110 transition-all duration-300">
              <a href="https://github.com/Nv18/Tic-Tac-Toe-Game.git">Source Code</a>
            </button>
          </div>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="relative mb-4">
            <img
              src={currencyConverterImg}  
              alt="Currency Converter"
              className="w-36 h-36 object-cover rounded-full border-4 border-blue-500 transform hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-full opacity-50"></div>
          </div>
          <h3 className="text-xl font-semibold text-yellow-400">Currency Converter</h3>
          <p className="text-gray-300 mb-4">
            A JavaScript-based currency converter that dynamically updates exchange rates, allowing users to convert between various currencies seamlessly.
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white p-2 rounded transform hover:scale-110 transition-all duration-300">
              <a href="https://github.com/Nv18/Currency-Converter.git">Source Code</a>
            </button>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Projects;
