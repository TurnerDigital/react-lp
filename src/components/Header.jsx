import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: robturner2656@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/TurnerDigital",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/robcturner/",
  }
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-1 transition-all duration-300 ease-in-out bg-[#18181b]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          <nav className="space-x-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav className="space-x-6">
            <a href="#projects" onClick={handleClick("projects")} className="text-white hover:text-purple-500">
              Projects
            </a>
            <a href="#contact" onClick={handleClick("contact")} className="text-white hover:text-purple-500">
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;