import React from "react";
import "./Header.css"; // Ensure this path is correct

const Header = () => {
  return (
    <header className="bg-black text-white p-6 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold glitch">Jatin Sharma</h1>
        <p className="text-blue-400">Front-End Developer</p>
      </div>
      <nav className="flex space-x-8 text-left font-light">
        <a
          href="https://github.com/jatinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/jatinsharma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200"
        >
          LinkedIn
        </a>
        <a href="#resume" className="hover:text-blue-400 transition duration-200">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
