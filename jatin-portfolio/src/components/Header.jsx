import React from "react";
import "./Header.css"; // Ensure this path is correct
import { Link } from "react-router-dom";


const Header = () => {
  return (
    
    <header className="bg-black text-white p-6 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold glitch">Jatin Sharma</h1>
        <p className="text-blue-400 text-">Front-End Developer</p>
      </div>
      <nav className="flex space-x-8 text-left font-light">
        <Link
          to ="https://github.com/jatinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200">
          GitHub
        </Link>
        <Link
          to="https://linkedin.com/in/jatinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200" >
          LinkedIn
        </Link>
        <Link to="#resume" className="hover:text-blue-400 transition duration-200">
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;
