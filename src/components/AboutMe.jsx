import React from 'react';
import { Image } from 'react-bootstrap';
import top from '../images/me.png';

function AboutMe() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
      <h1 className="fs-2 fw-bolder pro">Who am I?</h1>
      </div>
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image src={top} alt="Kevine" className="rounded-circle img-fluid" style={{ maxWidth: '250px' }} />
        </div>
        <div className="col-md-7">
          <p className="text-secondary fs-5">
            My name is <strong>Ihimbazwe Niyikora Kevine</strong>. I’m a passionate software engineering student
            who loves to combine technology and creativity. My strengths are in frontend development using React.js,
            UI/UX design tools like Figma, and basic cybersecurity awareness. I also enjoy building apps that solve
            local problems and make everyday life simpler and smarter.
          </p>
          <p className="text-secondary fs-5">
            When I’m not coding, I enjoy painting, sketching, and exploring how tech can inspire positive change
            in my community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
