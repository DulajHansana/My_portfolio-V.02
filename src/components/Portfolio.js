import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>Some of My Amazing Works</h3>
              <p>
              Excited to take on new projects and collaborate.
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/1.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">SparkChat</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                          Web Application
                            <br /> for Massaging 
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://github.com/DulajHansana/Spark-Chat-V.0.1.git">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      
                      href="https://github.com/DulajHansana/Spark-Chat-V.0.1.git"
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/2.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">CareerPluse</a>
                        </span>
                        <h3 className="title">
                          <a href="https://github.com/DulajHansana/CareerPulse-Mobile-App.git">
                          Mobile Application for
                            <br /> Internship Find
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://github.com/DulajHansana/CareerPulse-Mobile-App.git">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/3.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Eflyer</a>
                        </span>
                        <h3 className="title">
                          <a href="https://github.com/DulajHansana/E-Commerce-web-Site.git">
                            E Commerce Web Application
                            <br /> for Shopping
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="https://github.com/DulajHansana/E-Commerce-web-Site.git">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://github.com/DulajHansana/E-Commerce-web-Site.git"
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="img/portfolio/4.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="https://slpn.lk/">SLPN Printers</a>
                        </span>
                        <h3 className="title">
                          <a href="https://slpn.lk/">
                          E commerce website 
                            <br /> with Wordpress
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://slpn.lk/"
                    />
                  </div>
                </li>
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
