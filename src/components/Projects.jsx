import React from 'react';
import masiziMp4 from '../images/masizi.mp4';
import masiziWebm from '../images/masizi.webm';

import tdMp4 from '../images/TekaDrop.mp4';
import tdWebm from '../images/TekaDrop.webm';

import tyunMp4 from '../images/tyun.mp4';
import tyunWebm from '../images/tyun.webm';

import figMp4 from '../images/fig.mp4';
import figWebm from '../images/fig.webm';

function Projects() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fs-2 fw-bolder pro">Projects & Designs</h1>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-semibold text-dark">Local Community App</h5>
              <p className="card-text text-secondary">
                An app for my locality to view latest news, weather, get daily bible verses and be able to make announcements.
                <a href='https://github.com/inkevine/masizi_app'> Link to github repository</a>
              </p>
              <video className="w-100 rounded" controls preload="none">
                <source src={masiziWebm} type="video/webm" />
                <source src={masiziMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-semibold text-dark">Mood Matcher</h5>
              <p className="card-text text-secondary">
                Enter your mood, and it will provide a video, quote, and image that matches your emotions.
                <a href='https://github.com/inkevine/Tyun'> Link to github repository</a>
              </p>
              <video className="w-100 rounded" controls preload="none">
                <source src={tyunWebm} type="video/webm" />
                <source src={tyunMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-semibold text-dark">TekaDrop UI</h5>
              <p className="card-text text-secondary">
                UI for TekaDrop, a food delivery app that lets customers order dishes and have them delivered quickly.
              </p>
              <video className="w-100 rounded" controls preload="none">
                <source src={tdWebm} type="video/webm" />
                <source src={tdMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-semibold text-dark">Figma Prototype</h5>
              <p className="card-text text-secondary">
                Prototyping skills, showing smooth animations and transitions.
              </p>
              <video className="w-100 rounded" controls preload="none">
                <source src={figWebm} type="video/webm" />
                <source src={figMp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div> 

      <div className="text-center mt-5">
        <p className="fs-5 fw-bold text-secondary">
          It doesn't end here! Feel free to check out my GitHub and LinkedIn for more interesting projects and designs.
        </p>
      </div>
    </div>
  );
}

export default Projects;
