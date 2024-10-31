import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import {motion} from "framer-motion"


const Header = () => {
  const HeaderAnimation = {
    initial: {y: -50, opacity: 0},
    animate: {y: 0, opacity: 1, transition: {duration:
        0.5}},
    exit: {y: -50, opacity: 0}
} 
  return (
    <motion.header className="bg-black text-white p-6 flex justify-between items-center header-wrapper"variants={HeaderAnimation} initial="initial"animate="animate"exit="exit">
      <div className="profile-wrapper">
      <img src="../public/Jatin.jpeg" alt="Jatin's Image" className="profile-picture"/>  
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
    </motion.header>
  );
};

export default Header;
