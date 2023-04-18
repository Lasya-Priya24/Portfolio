import React from "react";
import pic from '../assets/Pic.jpg';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <>
      <div className="banner-wrapper" id="home">

        <section className="banner-slogan-container">
          <p className="bn-small-text">
            Hi there,
          </p>
          <h1>I'm <span>Lasya Priya</span>, <span>welcome</span> to my <span>portfolio website</span></h1>
          <p>
            <i className="fa-solid fa-laptop-code"></i> {"  "}
            A passionate web developer
          </p>
          <div className="banner-buttons-container">
            <button><a href="#contact">Let's talk ✉</a></button>
            <button id="resume-btn">Resume ↗</button>
        </div>
        </section>

        <section >
          
        
          <img src={pic} alt="" width="450px"/>
          
        </section>

      </div>
    </>
  )
}

export default Banner;