import React from "react";
import Fade from "react-reveal/Fade";

const ServiceContent = [
    {
        icon: "ti-ruler-pencil",
        no: "01",
        service: "RESPONSIVE LAYOUT",
        title: "Responsive layout design meeting clients needs."
    },
    {
        icon: "ti-image",
        no: "02",
        service: "DEVELOPMENT",
        title: "Development gorgeous graphic design meeting clients needs."
    },
    {
        icon: "ti-brush-alt",
        no: "03",
        service: "WEB DESIGN",
        title: "Web Design gorgeous graphic design meeting clients needs."
    },
];

const ServiceTwo = () => {
    return (
        <>
            <div className="row gy-4">
                {ServiceContent.map((val, i) => (
                    <div className="col-sm-6 col-lg-4" key={i}>
                        <div className="feature-box-02">
                            <Fade bottom>
                                <div className="icon">
                                    <i className={val.icon}></i>
                                </div>
                                <h6>
                                    <span>{val.no}.</span> {val.service}
                                </h6>
                                <h5>{val.title}</h5>
                                <p>{val.desc}</p>
                            </Fade>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ServiceTwo;
