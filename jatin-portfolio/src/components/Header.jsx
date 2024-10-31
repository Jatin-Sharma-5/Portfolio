import React from "react";
import "./Header.css"; // Ensure this path is correct
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  return (
    <header className="bg-black text-white p-6 flex justify-between items-center header-wrapper">
      <div className="profile-wrapper">
        <div className="profile-picture"> </div>
        <img src="../public/Jatin.jpeg" alt="Jatin's Image" />  
        <div className="profile-details-section">
            <div className="profile-name">Jatin Sharma</div>
            <div className="profile-title">Front-End Developer</div>
        </div>
      </div>
      <nav className="flex space-x-8 text-left font-light">
        <Link className="header-link">Contact <GoArrowUpRight size={20}/></Link>
        <Link className="header-link">Resume <GoArrowUpRight size={20}/></Link>
        <Link className="header-link">LinkedIn <GoArrowUpRight size={20}/></Link>
        <Link className="header-link">Github <GoArrowUpRight size={20}/></Link>
      </nav>
    </header>
  );
};

export default Header;
