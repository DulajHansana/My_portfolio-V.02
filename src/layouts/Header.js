import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
            
            <a className="dark" href="#">
              <img src="img/logo/dark.png" alt="" />
            </a>
          </div>
          <div className="media">
          <ul>
              <li className="media">
                <a href="https://github.com/DulajHansana" target="blank"><img className="s_img" src="img/logo/github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/dulaj-hansana-7ab300259/" target="blank"><img className="s_img" src="img/logo/linkedin.png" alt="" /></a>
              </li>
              </ul> 
            </div>
            

          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="download_cv">
                <a href="img/cv/Dulaj Hansana's CV V3.pdf" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
