
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className='navbar-list-item'>About</li>
                <li className='navbar-list-item'>Services <IoIosArrowDown className='navbar-icon'/></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar


