import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    title: "Development",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-image",
    title: "Graphic",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-layout",
    title: "Web Design",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-brush-alt",
    title: "Web Design",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-camera",
    title: "Photography",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-world",
    title: "Mobile apps",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <Zoom>
              <div className="feature-box-01">
                <Fade bottom>
                  <div>
                    <div className="icon">
                      <i className={val.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h5>{val.title}</h5>
                      <p>{val.descriptions}</p>
                    </div>
                  </div>
                </Fade>
              </div>
              {/* End .feature-box-01 */}
            </Zoom>
          </div>
        ))}
        {/* End .col */}
      </div>
    </>
  );
}
