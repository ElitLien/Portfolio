import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div id='about' className='about'>
        <h1 className="about-title">About me</h1>
        <div className="about-sections">
            <div className="about-left">
                <div className="about-para">
                    <p>I am a persistent and diligent programmer who has worked with technologies such as React and Three.js. I have also spent time working with Angular and Node.js to further develop my programming skills. I like to challenge myself, but I also seek efficient ways to achieve my goals quickly.</p>
                    <p>Currently, I am deepening my expertise in full-stack development and exploring new frameworks to stay ahead in the rapidly evolving tech landscape.</p>
                </div>
            </div>
            <div className="about-right">
                
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "40%"}}/></div>
                    <div className="about-skill"><p>Three JS</p><hr style={{width: "35%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About