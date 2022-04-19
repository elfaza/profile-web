import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function SimpleSlider() {
  const AllDemos = [
    {
      imageName: "dark-theme",
      title: "Dark Theme",
      routePath: "home-dark",
    },
    {
      imageName: "dark-animation",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
    },
    {
      imageName: "light-theme",
      title: "Light Theme",
      routePath: "home-light",
    },
    {
      imageName: "light-animation",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
    },
    {
      imageName: "video-light",
      title: "Video Light Theme",
      routePath: "home-video-light",
    },
    {
      imageName: "video-dark",
      title: "Video Dark Theme",
      routePath: "home-video-dark",
    },
  ];
  const LightDemos = [
    {
      imageName: "video-light",
      title: "Video Light Theme",
      routePath: "home-video-light",
    },
    {
      imageName: "light-animation",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
    },

    {
      imageName: "light-theme",
      title: "Light Theme",
      routePath: "home-light",
    },
  ];
  const DarkDemos = [
    {
      imageName: "dark-theme",
      title: "Dark Theme",
      routePath: "home-dark",
    },
    {
      imageName: "dark-animation",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
    },

    {
      imageName: "video-dark",
      title: "Video Dark Theme",
      routePath: "home-video-dark",
    },
  ];
  const AnimationDemos = [
    {
      imageName: "dark-animation",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
    },
    {
      imageName: "light-animation",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
    },
  ];

  return (
    <>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex justify-content-center">
            <Tab>All</Tab>
            <Tab>Light</Tab>
            <Tab>Dark</Tab>
            <Tab>Animation Effect</Tab>
          </TabList>
          {/* End tablist */}

          <TabPanel>
            <div className="row">
              {AllDemos.map((val, i) => (
                <div className="col-lg-4 col-md-6 m-15px-tb" key={i}>
                  <Fade>
                    <div>
                      <div className="single-demo">
                        <div>
                          <Link to={val.routePath} target="_blank">
                            <div className="product-img">
                              <img
                                src={`img/preview/${val.imageName}.png`}
                                alt="intro page"
                              ></img>
                            </div>
                          </Link>
                        </div>
                        <div className="title text-center">
                          <h3 className="dark-color">{val.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {LightDemos.map((val, i) => (
                <div className="col-lg-4 col-md-6 m-15px-tb" key={i}>
                  <Fade>
                    <div>
                      <div className="single-demo">
                        <div>
                          <Link to={val.routePath} target="_blank">
                            <div className="product-img">
                              <img
                                src={`img/preview/${val.imageName}.png`}
                                alt="intro page"
                              ></img>
                            </div>
                          </Link>
                        </div>
                        <div className="title text-center">
                          <h3 className="dark-color">{val.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {DarkDemos.map((val, i) => (
                <div className="col-lg-4 col-md-6 m-15px-tb" key={i}>
                  <Fade>
                    <div>
                      <div className="single-demo">
                        <div>
                          <Link to={val.routePath} target="_blank">
                            <div className="product-img">
                              <img
                                src={`img/preview/${val.imageName}.png`}
                                alt="intro page"
                              ></img>
                            </div>
                          </Link>
                        </div>
                        <div className="title text-center">
                          <h3 className="dark-color">{val.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {AnimationDemos.map((val, i) => (
                <div className="col-lg-4 col-md-6 m-15px-tb" key={i}>
                  <Fade>
                    <div>
                      <div className="single-demo">
                        <div>
                          <Link to={val.routePath} target="_blank">
                            <div className="product-img">
                              <img
                                src={`img/preview/${val.imageName}.png`}
                                alt="intro page"
                              ></img>
                            </div>
                          </Link>
                        </div>
                        <div className="title text-center">
                          <h3 className="dark-color">{val.title}</h3>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>

          {/* End tabpanel */}
        </Tabs>
      </div>
    </>
  );
}
