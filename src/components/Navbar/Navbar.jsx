import React, { useRef, useState } from 'react'
import "./Navbar.css"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        <svg className='nav-logo' version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 300" width="209" height="57">
	        <path id="Layer" class="s0" d="m1010.6 34.3l-21.2 57v57.1c5.4 2 9.3 7.2 9.3 13.3 0 3.8-1.5 7.4-4.1 10.1-2.7 2.6-6.3 4.1-10.1 4.1-3.8 0-7.4-1.5-10.1-4.1-2.7-2.7-4.2-6.3-4.2-10.1 0-6.5 4.3-11.8 10.3-13.6v-58.4l20.6-55.4h-23.1l-28.3 69.9v77.7c3.4 0.8 6.5 2.8 8.5 5.6 2 2.9 3 6.4 2.6 9.9-0.4 3.4-2.1 6.7-4.7 9-2.6 2.3-6 3.6-9.5 3.6-1.9 0-3.7-0.4-5.5-1.1-1.7-0.7-3.3-1.7-4.6-3.1-1.3-1.3-2.4-2.9-3.1-4.6-0.7-1.7-1.1-3.6-1.1-5.4 0-5.7 3.3-10.5 8.1-12.8h-0.1v-80.6l0.1-0.3 27.5-67.8h-31.1l-28.3 69.9v108.7c4.6 2.4 7.8 7.1 7.8 12.6 0 5.5-3.2 10.5-8.2 12.8-5 2.4-10.9 1.7-15.1-1.8-4.3-3.5-6.2-9.1-4.8-14.5 1.3-5.3 5.6-9.4 11-10.5v-109.1l0.1-0.3 27.4-67.8h-82.2v231.6h24.6v-189.4c-5.6-1.8-9.8-7.1-9.8-13.4 0-3.7 1.5-7.3 4.2-10 2.7-2.6 6.3-4.1 10-4.1 3.8 0 7.4 1.5 10.1 4.1 2.6 2.7 4.1 6.3 4.1 10q0 2.1-0.6 4.1-0.5 2-1.7 3.7-1.1 1.7-2.7 3.1-1.6 1.3-3.5 2.1v189.9h100.8v-42.7h0.1l46.7-47.3v-64.7c-5.7-1.8-9.8-7.1-9.8-13.4 0-3.8 1.5-7.4 4.2-10 2.7-2.7 6.3-4.2 10.1-4.2 3.8 0 7.4 1.5 10.1 4.2 2.7 2.6 4.2 6.2 4.2 10 0 6.3-4.2 11.6-9.9 13.5v68l0.1 0.1-46.9 47.5v39h33v-17.3c-6.1-1.6-10.6-7.1-10.6-13.7 0-3.8 1.5-7.4 4.2-10.1 2.7-2.6 6.3-4.1 10.1-4.1 3.8 0 7.4 1.5 10.1 4.1 2.7 2.7 4.2 6.3 4.2 10.1 0 6.4-4.3 11.8-10.2 13.6v17.4h33.2v-231.7z"/>
	        <path id="Layer" class="s0" d="m237.9 49.8h43.3l-101.3 205.6q-2.4 4.8-7.1 7.6-4.7 3-10.3 3-5.5 0-10.2-3-4.7-2.8-7.2-7.6l-101.1-205.6h43.4l75.1 153.6zm131.7 174.5v38.6h-17.4q-8.3 0-17.7-2.8-9.5-2.8-17.8-9.3-8.1-6.4-13.5-16.8-5.4-10.3-5.4-25.3v-174.4h38.8v174.4q0 7.1 4.5 11.4 4.5 4.2 11.1 4.2zm191.3-68.8v54.2q0 8-2.9 17.3-2.8 9.3-9.2 17.3-6.3 7.9-16.5 13.3-10.2 5.3-24.8 5.3h-69.9q-8.1 0-17.4-2.8-9.3-2.8-17.3-9.2-8-6.2-13.4-16.5-5.3-10.1-5.3-24.7 0-8 2.8-17.4 2.8-9.3 9.2-17.3 6.3-8 16.5-13.3 10.2-5.3 24.9-5.3h69.9v36.8h-69.9q-8 0-12.3 4.8-4.3 4.9-4.3 12 0 7.6 5 11.8 5 4.3 11.8 4.3h69.7q7.9 0 12.2-4.8 4.3-4.8 4.3-11.9v-53.9q0-7.7-4.7-12.1-4.7-4.4-11.8-4.4h-85.1v-36.8h85.1q8 0 17.3 2.8 9.4 2.9 17.3 9.2 8 6.3 13.4 16.5 5.4 10.2 5.4 24.8zm209.8-121.2v174.4q0 9.9-2.5 17.9-2.5 8-6.7 14-4.2 5.9-9.7 10.2-5.5 4.3-11.5 7-6.1 2.6-12.3 3.8-6.2 1.3-11.7 1.3h-69.9q-10 0-17.9-2.5-7.9-2.5-13.9-6.8-6-4.2-10.3-9.7-4.3-5.5-6.9-11.5-2.7-6.1-4-12.2-1.3-6.2-1.3-11.5v-52.3q0-14.9 5.5-25.2 5.4-10.4 13.5-16.8 8.1-6.5 17.7-9.4 9.6-2.8 17.6-2.8h69.9v38.7h-69.6q-7.7 0-11.8 3.9-4 4-4 11.6v52q0 7.8 4 11.8 3.9 4.1 11.5 4.1h69.9q7.9 0 11.8-4.1 3.9-4 3.9-11.5v-174.4z"/>
        </svg>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
