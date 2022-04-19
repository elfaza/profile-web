import React from "react";
import {
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

const SocialShare = [
    { Social: <FaInstagram />, link: "https://www.instagram.com/mef.dev/" },
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohammed-el-faza-39625413b/" }
];

const Social = () => {
    return (
        <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
            {SocialShare.map((val, i) => (
                <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                    {val.Social}
                </a>
            ))}
        </div>
    );
};

export default Social;
