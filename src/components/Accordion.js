import { Fragment, useState } from "react";

const accordionData = [
  {
    title: "Bank Trainee at BOC",
    details:
      "I have done the job skill development program at Bank Of Ceylon Nelumdeniya Branch. From that I have been developed my communication skill (Customer service), collaborate with others (Team work), Financial Management also E banking and Core banking System (Linux).",
  },
  {
    title: "Full-stack Web Developer Trainee at Payshia",
    details:
      "I was working as Full-stack Web Developer Trainee at Payshia Software solutions. It's a Startup company. From that I have build and modify Webb application using PHP language.Other Skills that I experienced Mysql Database, Postman Also how the communication handle in team by using Slack.",
  },
  {
    title: " Open Source Contributor",
    details:
      "I was a open source contributor at github. I have been developed my technical skill by contributing to open source projects",
  },
  {
    title: "J'pura CryptX 1.0  From ICT Society J’Pura",
    details:
      "I was working as Financer in Finance Team. from that I have been developed my financial management skill. Also I have been developed my communication skill by collaborating with others.",
  },
  {
    title: " IEEE Student Branch of University of Sri Jayewardenepura",
    details:
      "I was a member of IEEE Student Branch of University of Sri Jayewardenepura. From that I have been developed my communication skill, leadership skill and also I have been developed my technical skill by participating in workshops and seminars.",
  },
];

const Accordion = () => {
  // Initialize 'active' state to 0 to have the first section open by default
  const [active, setActive] = useState(0);

  const onClick = (index) => {
    // Toggle 'active' state between null and the index
    setActive(active === index ? null : index);
  };

  return (
    <Fragment>
      <div className="devman_tm_accordion">
        {accordionData.map((item, index) => (
          <div
            className={`accordion_in ${active === index ? "acc_active" : ""}`}
            key={index}
          >
            <div className="acc_head" onClick={() => onClick(index)}>
              <span className="plus" />
              <p>{item.title}</p>
            </div>
            <div
              className={`acc_content ${active === index ? "show" : "hide"}`}
            >
              <div className="acc_content_in">
                <p>{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Accordion;
