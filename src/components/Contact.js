import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 p-10">
      <h2 className="text-4xl font-semibold text-center mb-8">Contact Me</h2>
      
      
      <form className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-white border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-white border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 bg-white border border-gray-300 rounded"
        />
        <button className="w-full p-3 bg-blue-500 text-white rounded">Send Message</button>
      </form>
      
      <div className="flex justify-center space-x-6">
        
       <a href="https://www.linkedin.com/in/nikhil-singh-72160628a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <i className="fab fa-linkedin-in fa-2x"></i>
        </a>
        
        <a href="https://www.instagram.com/nv_2905?igsh=MTd3dzAzZm9rN25iNA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/Nv18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
