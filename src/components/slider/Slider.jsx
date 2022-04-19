import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";
import Particles from "react-particles-js";

const Slider = () => {
    return (
        <>
            {/*  Home Banner */}
            <section
                id="home"
                className="home-banner overlay "
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/banner/1.jpg"
                        })`,
                }}
            >
                <div className="container">
                    <div className="row align-items-center full-screen">
                        <div className="col-lg-12">
                            <div className="hb-typo text-center">
                                <h6>Hi There, I'm</h6>
                                <h1 className="font-alt">
                                    Mohammed <span>El Faza</span>
                                </h1>
                                <h2 className="mb-4">
                                    <TextLoop>
                                        <span className="loop-text">Web Developer</span>
                                        <span className="loop-text"> App Developer</span>
                                    </TextLoop>{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-bottom go-to">
                    <a href="#about">Scroll</a>
                </div>
                <Social />
            </section>
            {/* End Home Banner  */}
        </>
    );
};

export default Slider;
