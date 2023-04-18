import React from "react";
import { useState, useContext } from 'react';
import '../styles/NavBar.css';
import { ThemeContext } from '../App';
import {IoMdArrowDropdown } from 'react-icons/io';

const NavBar = () => {
    // for the active link
    const [activeLink, setActiveLink] = useState('home');

    // for hamburger menu
    const [hamburgeropen, setHamburgerOpen] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((th) => (th === "light" ? "dark" : "light"));
    }


    return (
        <div className="navbar-wrapper">
            {/* the left portion  */}
            <div className="left">
                <div className="logo-container">
                    <h1><a href="/">Lasya Priya</a></h1>
                </div>
                <div className="toggle-btn" >
                    <i onClick={toggleTheme} className={theme === "dark" ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"}
                    >
                    </i>
                </div>
            </div>

            {/* the right portion */}
            <div className={hamburgeropen ? 'right open' : 'right'}>
                <a
                    href="#home"
                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('home')}>
                    Home
                </a>

                <a
                    href="#about"
                    className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('about')}>
                    About
                </a>

                <a
                    href="#skills"
                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('skills')}>
                    Skills
                </a>

                <a
                    href="#projects"
                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('projects')}>
                    Projects
                </a>

                <a
                    href="#experience"
                    className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => setActiveLink('experience')}>
                    Experience
                </a>

                <p id="more">More <span><IoMdArrowDropdown/></span>
                    <div className="dropdown"> 
                        <a
                            href="#tech"
                            className={activeLink === 'tech' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('tech')}>
                            Tech
                        </a>
                        <a
                            href="#achievements"
                            className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('achievements')}>
                            Achievements
                        </a>
                        <a
                            href="#testimonials"
                            className={activeLink === 'testimonials' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => setActiveLink('testimonials')}>
                            Testimonials
                        </a>
                      
                    </div>
                </p>

                {/* social callouts  */}
                <div className="social-icon">
                    <a href="https://linkedin.com/in/lasya-priya-vakkapatla-41a166215/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Lasya-Priya24" target="_blank"><i className="fa-brands fa-github-alt"></i></a>
                </div>
            </div>
            <button
                onClick={() => setHamburgerOpen(!hamburgeropen)}
                className="hamburger-icon">
                <i className={hamburgeropen ? "fa-solid fa-xmark" : " fa-solid fa-bars"}></i>
            </button>

        </div> // parent wrapper div
    );
}
export default NavBar;
