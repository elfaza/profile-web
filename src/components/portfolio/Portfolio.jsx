import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
    const portfolio = [{
        name: "Company Profile",
        category: {
            id: "website-dev",
            name: "Website Dev"
        },
        img: "/img/portfolio/Company_Profile/1.png",
        url: "http://wangkam.media/",
        description: ""
    }, {
        name: "Restaurant",
        category: {
            id: "website-design",
            name: "Website Design"
        },
        img: "/img/portfolio/Restaurant/1.png",
        url: "https://mef-dev.com/restaurant/",
        description: ""
    }, {
        name: "Online Tutor",
        category: {
            id: "website-dev",
            name: "Website Dev"
        },
        img: "/img/portfolio/Online_Class/1.png",
    }, {
        name: "Convection",
        category: {
            id: "website-design",
            name: "Website Design"
        },
        img: "/img/portfolio/Convection/2.png",
        url: "https://mef-dev.com/convection/",
        description: ""
    }, {
        name: "Simulation",
        category: {
            id: "website-dev",
            name: "Website Dev"
        },
        img: "/img/portfolio/Simulation/1.png",
    }]

    return (
        <SimpleReactLightbox>
            <div className="positon-relative">
                <div className="portfolio-filter-01">
                    <Tabs>
                        <TabList className="filter d-flex justify-content-center">
                            <Tab>All</Tab>
                            <Tab>Web Dev</Tab>
                            <Tab>Web Design</Tab>
                        </TabList>
                        {/* End tablist */}

                        <SRLWrapper>
                            <TabPanel>
                                <div className="portfolio-content row lightbox-gallery">
                                    {portfolio.map(datum =>
                                        <div className="col-sm-6 col-lg-4 grid-item product">
                                            <div className="portfolio-box-01">
                                                <div className="portfolio-img">
                                                    <div className="portfolio-info">
                                                        <a href={datum.url} target="_blank">
                                                            <h5>{datum.name}</h5>
                                                        </a>
                                                        <span>{datum.category.name}</span>
                                                    </div>
                                                    {/* End .portfolio-info */}
                                                    <a href={datum.img} className="gallery-link">
                                                        <img src={datum.img} alt="Company Profile" />
                                                        <div className="portfolio-icon">
                                                            <span className="ti-plus"></span>
                                                        </div>
                                                        {/* End .portfolio-icon */}
                                                    </a>
                                                    {/* End gallery link */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* grid item  */}
                                </div>
                                {/* End list wrapper */}
                            </TabPanel>

                            <TabPanel>
                                <div className="portfolio-content row lightbox-gallery">
                                    {portfolio.filter(datum => datum.category.id === "website-dev").map(datum =>
                                        <div className="col-sm-6 col-lg-4 grid-item product">
                                            <div className="portfolio-box-01">
                                                <div className="portfolio-img">
                                                    <div className="portfolio-info">
                                                        <h5>{datum.name}</h5>
                                                        <span>{datum.category.name}</span>
                                                    </div>
                                                    {/* End .portfolio-info */}
                                                    <a href={datum.img} className="gallery-link">
                                                        <img src={datum.img} alt="Company Profile" />
                                                        <div className="portfolio-icon">
                                                            <span className="ti-plus"></span>
                                                        </div>
                                                        {/* End .portfolio-icon */}
                                                    </a>
                                                    {/* End gallery link */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* grid item  */}
                                </div>
                                {/* End list wrapper */}
                            </TabPanel>

                            <TabPanel>
                                <div className="portfolio-content row lightbox-gallery">
                                    {portfolio.filter(datum => datum.category.id === "website-design").map(datum =>
                                        <div className="col-sm-6 col-lg-4 grid-item product">
                                            <div className="portfolio-box-01">
                                                <div className="portfolio-img">
                                                    <div className="portfolio-info">
                                                        <h5>{datum.name}</h5>
                                                        <span>{datum.category.name}</span>
                                                    </div>
                                                    {/* End .portfolio-info */}
                                                    <a href={datum.img} className="gallery-link">
                                                        <img src={datum.img} alt="Company Profile" />
                                                        <div className="portfolio-icon">
                                                            <span className="ti-plus"></span>
                                                        </div>
                                                        {/* End .portfolio-icon */}
                                                    </a>
                                                    {/* End gallery link */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* grid item  */}
                                </div>
                                {/* End list wrapper */}
                            </TabPanel>
                        </SRLWrapper>
                        {/* End tabpanel */}
                    </Tabs>
                </div>
            </div>
        </SimpleReactLightbox>
    );
};

export default Portfolio;
