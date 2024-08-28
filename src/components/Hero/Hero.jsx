import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <h1><span>I'm Vlad Miahkykh,</span> frontend <br /> developer based in Ukraine.</h1>
        <p>I am a frontend developer from Stryi, Ukraine.</p>
        <div className="hero-action">
            <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
        </div>
    </div>
  )
}

export default Hero