import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// import './headerStyle.css'
function Header() {
    return (
        <header className="bg-white shadow-md w-full">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center font-heading">

                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img src="src/assets/devLogo.jpg" alt="logo" className="w-10 h-10 object-cover rounded-full bg-gray-200" />
                    <span className="text-xl font-bold text-gray-800">Nikhil Kumar</span>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-orange-700"
              offset={-70}
            >
              Contact Me
            </ScrollLink>
          </li>
                    <li>
                        <NavLink 
                            to="/resume" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                      <NavLink
                      to="/projects"
                      className={({isActive})=>
                      isActive?
                    "text-orange-700 border-b-2 border-orange-700 pb-1":
                  "hover:text-orange-700"}
                      >
                        Projects
                      </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
