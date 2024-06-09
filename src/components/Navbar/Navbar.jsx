// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-navbar text-black p-4 flex justify-between items-center z-50">
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="text-2xl cursor-pointer"
      >
        Samail
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:underline cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-navbar text-white flex flex-col items-center justify-center space-y-8 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
