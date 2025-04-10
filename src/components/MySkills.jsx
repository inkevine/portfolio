import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function MySkills() {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Cybersecurity Basics', level: 50 },
    { name: 'MySQL & Databases', level: 80 },
    { name: 'Php', level: 70 },
    { name: 'Python', level: 50 },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fs-2 fw-bolder pro">Skills</h1>
      </div>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-10 col-md-6 mb-4">
            <h6 className="mb-1" style={{ color: '#555' }}>{skill.name}</h6>
            <ProgressBar 
              now={skill.level} 
              label={`${skill.level}%`} 
              style={{ height: '20px', borderRadius: '10px'}}
              variant='custc'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
