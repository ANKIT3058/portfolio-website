import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a third-year Computer Science student passionate about software engineering and problem solving. My interests include full-stack web development, machine learning, and system design.</p>
                <p>I enjoy building projects that solve practical problems and continuously improving my technical skills through hands-on development and competitive programming.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>MAJOR PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>500+</h1>
            <p>DSA PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS PROGRAMMING EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About
