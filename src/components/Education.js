const educationEntries = [
    {
      year: "2022-2026",
      institution: "University of Sri Jayawardenepura",
      degree: "Bachelor’s Degree in Information and Communication Technology",
      specialization: "Specialized in Software Technology",
      gpa: "Current GPA 3.6",
      imageSrc: "img/logo/SJP.jpg"  // Update this path accordingly
    },
    {
      year: "2018-2020",
      institution: "Swarnajayanthi College Kegalle",
      degree: "G.C.E. Advance Level (2020)",
      result: "Result A2, B1",
      rank: "District Rank 4",
      imageSrc: "img/logo/SJV.jpg"  // Update this path accordingly
    },
    {
      year: "2011-2017",
      institution: "Parakumba National College Dedigama",
      degree: "G.C.E. Ordinary Level (2017)",
      result: "Result A5, B2, C2",
      imageSrc: "img/logo/DPMV.jpg"  // Update this path accordingly
    }
  ];
  import React from 'react';

  const Education = () => {
    return (
      <div className="container_1">
        <div className="row">
          <div className="col-lg-12">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Education</span>
              <h3>My Milestone</h3>
            </div>
            <ul className="education-list">
              {educationEntries.map((entry, index) => (
                <li key={index} className="education-item">
                  <img src={entry.imageSrc} alt="Education Logo" className="education-logo" />
                  <div className="education-text">
                    <p className="education-year">{entry.year}</p>
                    <p className="education-institution">{entry.institution}</p>
                    <p className="education-degree">{entry.degree}</p>
                    {entry.specialization && <p className="education-info">{entry.specialization}</p>}
                    {entry.gpa && <p className="education-info">{entry.gpa}</p>}
                    {entry.result && <p className="education-info">{entry.result}</p>}
                    {entry.rank && <p className="education-info">{entry.rank}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
  