import React from 'react';

function Footer() {
  return (
    <div className="container mt-5">
      <footer className="text-center text-lg-start text-dark heroo">
      <div style={{ height: '50px' }}></div> 
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="fw-bold">inkevine.</h6>
               
                <p>
                I’m a software engineering student 
                 passionate about frontend 
                 development, UI/UX design, and 
                 cybersecurity
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Quick Links</h6>
               
                <p><a href="#!" className="text-dark">Home</a></p>
                <p><a href="#!" className="text-dark">About me</a></p>
                <p><a href="#!" className="text-dark">Projects</a></p>
                <p><a href="#!" className="text-dark">Contacts</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Contacts</h6>
               
                <p><a href="#!" className="text-dark">+250 777 888 999</a></p>
                <p><a href="#!" className="text-dark">+250 777 888 999</a></p>
                <p><a href="#!" className="text-dark">linkedurl/wat/ok</a></p>
                <p><a href="#!" className="text-dark">email@example.com</a></p>
              </div>

            </div>
          </div>
        </section>

        <div className="text-center p-3 last">
        copyrights @ 2024. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
