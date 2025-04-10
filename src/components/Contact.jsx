import React from 'react';
import { Image } from 'react-bootstrap';
import call from '../images/call.png';
import lin from '../images/lin.png';
import email from '../images/email.png';
import tsap from '../images/tsap.png';

function Contact() {
  return (
    <div className="container py-5">
         <div style={{ height: '50px' }}></div> 
      <h1 className="fs-2 fw-bolder text-center pro">Let's Talk</h1>
      <p className="fs-5 fw-bold text-secondary text-center mb-5">
        Feel free to reach out with any questions and get your project done!
      </p>
      
      <div className="row g-4 align-items-start">
        {/* Contact Info Column */}
        <div className="col-md-5">
          <div className="d-flex align-items-center mb-3">
            <Image src={call} alt="Call" width={40} height={40} className="me-3 rounded-circle cust-color" />
            <p className="fs-6 fw-bold text-dark mb-0">+250 793 106 509</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image src={tsap} alt="WhatsApp" width={40} height={40} className="me-3 rounded-circle cust-color" />
            <p className="fs-6 fw-bold text-dark mb-0">+250 793 106 509</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image src={lin} alt="LinkedIn" width={40} height={40} className="me-3 rounded-circle cust-color" />
            <p className="fs-6 fw-bold text-dark mb-0">www.linkedin.com/in/ihimbazwe-niyikora-kevine</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image src={email} alt="Email" width={40} height={40} className="me-3 rounded-circle cust-color" />
            <p className="fs-6 fw-bold text-dark mb-0">niyikorakevine@gmail.com</p>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="col-md-7">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="fname" className="form-label fs-6 fw-bold text-secondary">First name</label>
              <input type="text" className="form-control heroo" id="fname" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="sname" className="form-label fs-6 fw-bold text-secondary">Last name</label>
              <input type="text" className="form-control heroo" id="sname" required />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label fs-6 fw-bold text-secondary">Email</label>
              <input type="email" className="form-control heroo" id="email" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label fs-6 fw-bold text-secondary">Message</label>
              <textarea className="form-control heroo" id="message" rows="4" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn custom-button px-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
