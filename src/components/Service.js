import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Website Development",
    icon: "img/svg/web.svg",
    img: "img/portfolio/5.png",
    description: [
      "As a dedicated web developer, I specialize in creating dynamic and responsive websites using the React framework. My expertise extends to server-side development with Node.js and managing databases with MongoDB. I am proficient in JavaScript, ensuring seamless front-end and back-end integration. For efficient development and deployment, I utilize Vercel for CI/CD processes, enabling fast and reliable delivery of web applications. My portfolio showcases a range of projects that demonstrate my ability to develop scalable and efficient web solutions.",
   ,
    ],
  },
  {
    name: "Mobile Application Development",
    icon: "img/svg/phone.svg",
    img: "img/portfolio/6.png",
    description: [
      "As a mobile app developer, I harness the power of Flutter and Dart to design and build intuitive, aesthetically pleasing mobile applications that provide seamless user experiences across all devices. My technical proficiency allows me to create apps that are not only functional but also scalable and maintainable, with a strong focus on performance optimization. My development process is streamlined with advanced tools and practices to ensure efficient project completion and high-quality outputs. My portfolio showcases a variety of applications that cater to diverse client needs and industry standards.",
    ],
  },
  
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>What I Do</span>
            <h3>TailoredWeb and App Development
            to Drive Your Business Forward</h3>
          
          </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
