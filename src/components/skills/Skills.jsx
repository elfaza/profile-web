import React from "react";

const Skills = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <div className="sm-title">
                        <h4 className="font-alt">Education</h4>
                    </div>
                    <ul className="aducation-box theme-bg">
                        <li>
                            <span className="dark-bg">2017-2017</span>
                            <h6>Information Technology</h6>
                            <p>Fachhochschule Südwestfalen</p>
                        </li>
                        <li>
                            <span className="dark-bg">2014-2018</span>
                            <h6>Information Technology</h6>
                            <p>Swiss German University</p>
                        </li>
                    </ul>
                    {/* End  .aducation-box */}
                </div>
                {/* End .col */}

                <div className="col-lg-4 my-3">
                    <div className="sm-title">
                        <h4 className="font-alt">Experience</h4>
                    </div>
                    <ul className="aducation-box dark-bg">
                        <li>
                            <span className="theme-bg">2020 - Present</span>
                            <h6>Software Developer</h6>
                            <p>PT. Kelas Digital</p>
                        </li>
                        <li>
                            <span className="theme-bg">2018 - Present</span>
                            <h6>Lead Software Developer</h6>
                            <p>commsult AG</p>
                        </li>
                        <li>
                            <span className="theme-bg">2017-2017</span>
                            <h6>Internship Web Developer</h6>
                            <p>Swiss German University</p>
                        </li>
                        <li>
                            <span className="theme-bg">2015-2016</span>
                            <h6>Internship System Analyst</h6>
                            <p>PT. Infomedia Nusantara</p>
                        </li>
                    </ul>
                    {/* End  .aducation-box */}
                </div>
                {/* End .col */}

                <div className="col-lg-4 ml-auto my-3">
                    <div className="sm-title">
                        <h4 className="font-alt">My Skills</h4>
                    </div>
                    <div className="gray-bg skill-box">
                        <div className="skill-lt">
                            <h6>React js</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in theme-bg"
                                    style={{ width: 92 + "%" }}
                                >
                                    <span>92%</span>
                                </div>
                            </div>
                        </div>
                        {/* End skill-lt */}

                        <div className="skill-lt">
                            <h6>Node js</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in theme-bg"
                                    style={{ width: 75 + "%" }}
                                >
                                    <span>75%</span>
                                </div>
                            </div>
                        </div>
                        {/* End skill-lt */}

                        <div className="skill-lt">
                            <h6>Laravel</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in theme-bg"
                                    style={{ width: 86 + "%" }}
                                >
                                    <span>86%</span>
                                </div>
                            </div>
                        </div>
                        {/* End skill-lt */}

                        <div className="skill-lt">
                            <h6>PHP</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in theme-bg"
                                    style={{ width: 88 + "%" }}
                                >
                                    <span>88%</span>
                                </div>
                            </div>
                        </div>
                        {/* End skill-lt */}

                        <div className="skill-lt">
                            <h6>CSS3</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in theme-bg"
                                    style={{ width: 92 + "%" }}
                                >
                                    <span>92%</span>
                                </div>
                            </div>
                        </div>
                        {/* End skill-lt */}
                    </div>
                </div>
                {/* End .col */}
            </div>
        </>
    );
};

export default Skills;
