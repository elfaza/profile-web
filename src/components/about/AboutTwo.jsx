import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center services-inner-section">
        <div className="col-lg-5">
          <div className="row g-2">
            <div className="col-6">
              <img
                src="img/about/about-4.jpg"
                alt="about us"
                className="rounded-3"
              />
            </div>
            <div className="col-6">
              <img
                src="img/about/about-2.jpg"
                alt="about us"
                className="rounded-3"
              />
            </div>
            <div className="col-6">
              <img
                src="img/about/about-6.jpg"
                alt="about us"
                className="rounded-3"
              />
            </div>
            <div className="col-6">
              <img
                src="img/about/about-4.jpg"
                alt="about us"
                className="rounded-3"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-7 ps-xl-5">
          <div className="typo-box about-me">
            <h3>Krozo Plakson</h3>
            <h5>
              A Lead <span className="color-theme">UX &amp; UI</span> designer
              based in <span className="color-theme">Canada</span>
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <div className="py-3">
              <img
                className="author-signeture"
                src="img/signature.png"
                alt="author signature"
              />
            </div>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1991</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>info@domain.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>
                <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/resume.png" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
