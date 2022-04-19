import React from "react";
import {
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

const SocialShare = [
    { Social: <FaInstagram />, link: "https://www.instagram.com/mef.dev/" },
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohammed-el-faza-39625413b/" }
];

const Footer = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-6 my-2">
                    <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
                        {SocialShare.map((val, i) => (
                            <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                                {val.Social}
                            </a>
                        ))}
                    </div>
                    {/* End .nav */}
                </div>
                {/* End .col */}

                <div className="col-md-6 my-2 text-center text-md-right">
                    <p>
                        © {new Date().getFullYear()} copyright{" "}
                        <a
                            href="https://themeforest.net/user/ib-themes/portfolio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            MEF
                        </a>{" "}
                        all right reserved
                    </p>
                </div>
                {/* End .col */}
            </div>
            {/* End .row */}
        </>
    );
};

export default Footer;
