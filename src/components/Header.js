import React from 'react'
import {Link} from 'react-scroll';
import './header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>DEVELO<span>Per</span></h1>
        </div>
        <div className='header__right'>
            <Link to='about' smooth={true} duration={500} >
            <h4>About Me</h4>
            </Link>

            <Link to='skills' smooth={true} duration={500} >
            <h4>Skills</h4>
            </Link>

            <Link to='projects' smooth={true} duration={500} >
            <h4>Projects</h4>
            </Link>

            <Link to='exp' smooth={true} duration={500} >
            <h4>Experience</h4>
            </Link>

            <Link to='contact' smooth={true} duration={500} >
            <h4>Contact</h4>
            </Link>

             <div className='call'><h4>Call</h4></div>
            
            
            
        </div>
      
    </div>
  )
}

export default Header
