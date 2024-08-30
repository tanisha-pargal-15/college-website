import  "./Navbar.css"
import React, { useEffect, useState } from "react"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from "react-scroll"
import logo from "../../assets/smvdlogo.png"

const Navbar = () => {
const [sticky,setSticky]=useState(false)

  useEffect(()=>{
window.addEventListener("scroll",()=>{
  window.scrollY>500?setSticky(true):setSticky(false);
})
    
  },[]);

  const [mobileMenu,setMobileMenu]=useState(false)
const toggleMenu=()=>{
mobileMenu? setMobileMenu(false) :setMobileMenu(true);
  
}


  
  return(
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt="Logo" className="logo" />
      <p1>Shri Mata Vaishno Devi University</p1>
     <ul className={mobileMenu?'':'hide-mobile-menu'} > 
       <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
       <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
       <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
       <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
       <li><Link to='testimonials' smooth={true} offset={-200} duration={500}>Events</Link></li>
       
       <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
       <li><a href="https://admission.smvdu.ac.in/" target="_blank" rel="noopener noreferrer">Why & How SMVDU</a></li>
      </ul>
  <img src={menu_icon} alt="" className="menu-icon"onClick={toggleMenu } />
      
    </nav>
  )
}
export default Navbar