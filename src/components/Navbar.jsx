import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = () => setNav(!nav);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[80px] flex items-center px-4 text-gray-300 transition-all duration-300 
    ${scrollNav ? 'bg-[#0d1b3e] shadow-md' : 'bg-[#0a192f]'}`}>
      {/* menu */}
      <ul className="hidden md:flex space-x-6">
        {['home', 'about', 'skills', 'work', 'contact'].map(item => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item)}
              className={`cursor-pointer transition duration-300 hover:text-pink-600 ${
                activeSection === item ? 'border-b-2 pb-1 border-pink-600' : ''
              }`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 
        ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        {['home', 'about', 'skills', 'work', 'contact'].map(item => (
          <li key={item} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item)}
              className={`${activeSection === item ? 'border-b-2 border-pink-600' : ''}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-1/3 left-0 z-50">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rodney-cunanan-bb7512b4">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/Rodney_Cunanan_CV.pdf"
              download="Rodney_CV.pdf">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
