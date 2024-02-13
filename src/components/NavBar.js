import React from 'react';
import { Link } from 'react-router-dom' ;
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


export default function NavBar() {
  return (
    <nav>
        <div className='navigation'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Work'>Work</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </div>
        <div className='social-media'>
            <a href="https://www.linkedin.com/in/akshay-patra-6a8b67259"><FaLinkedin size={24} style={{marginRight:'10px'}}/></a>
            <a href='https://github.com/akshaypatra'><FaGithub size={24} style={{marginRight:'10px'}}/></a> 
            <a href="mailto:akshay.patra114@gmail.com"><IoMail size={24} style={{marginRight:'10px'}}/></a>
            <a href="https://www.instagram.com/_akshay_patra_" ><FaInstagram size={24} style={{marginRight:'7vh'}}/></a> 
            </div>
    </nav>
  )
}
