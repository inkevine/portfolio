import React from 'react';
import { Image } from 'react-bootstrap';
import top from '../images/image.png';
import des from '../images/des.png';
import front from '../images/front.png';
import cyb from '../images/cyb.png';
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <div>
    <div className='heroo p-5 position-relative'>
      <div className='container'>
        <div className="row align-items-center">
          <div className="col-md-6 offset-md-1 mb-4">
            <h2 className="fs-5">Hello, I am</h2>
            <h1 className="fs-1 fw-bolder name">Ihimbazwe Niyikora Kevine,</h1>
            <h2 className="fs-5 type-effect">A Software Engineer & Creative Designer.</h2>
            <p className="fs-6 text-secondary">
              I’m a software engineering student passionate about frontend
              development, UI/UX design, and cybersecurity. I create functional,
              user-friendly applications with a touch of creativity.
            </p>
            <a href="/cv.pdf" download>
            <Button variant="outline-primary" className="mb-3">Download CV</Button>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <Image src={top} alt="Profile" className="rounded-circle img-fluid anim" />
          </div>
        </div>
      </div>

      {/* Skills Boxes */}
<div 
  className="position-absolute start-50 translate-middle-x w-100" 
  style={{ top: '85%' }} // adjust this top value as needed
>
  <div className="d-flex flex-wrap justify-content-center gap-3">
    <div className="p-3 border rounded text-center shadow bg-white sc" style={{ width: '250px' }}>
      <Image src={des} alt="UI/UX" className="rounded img-fluid w-50 mb-2" />
      <h2 className='h5'>UI/UX Design</h2>
      <p className="fs-6 text-secondary">Designing & Animating experiences.</p>
    </div>

    <div className="p-3 rounded text-center shadow text-white sc cust-color" style={{ width: '250px' }}>
      <Image src={front} alt="Frontend" className="rounded img-fluid w-75 mb-2" />
      <h2 className='h5'>Software Development</h2>
      <p className="fs-6">Coding functional and beautiful apps.</p>
    </div>

    <div className="p-3 border rounded text-center shadow bg-white sc" style={{ width: '250px' }}>
      <Image src={cyb} alt="Cybersecurity" className="rounded img-fluid w-50 mb-2" />
      <h2 className='h5'>Cybersecurity</h2>
      <p className="fs-6 text-secondary">Securing systems and data.</p>
    </div>
  </div>
</div>
      {/* Spacer to allow floating boxes */}
      <div style={{ height: '200px' }}></div>
      
    </div>
    <div className="skills-spacer"></div>
    </div>
  );
}

export default Hero;
