import React from "react";
import "./footer.scss";
import {SiYourtraveldottv} from "react-icons/si";
import {ImFacebook} from "react-icons/im";
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

export default function Footer() {
    return <div className={"footer"}>
        <div className={"secContainer container grid"}>
            <div className={"logo-div"}>
                <div className={"footer-logo"}>
                    <a href={"#"} className={"logo flex"}>
                        <h2 className={"flex"}>
                            <SiYourtraveldottv className={"icon"}/>
                            Travel Advisor
                        </h2>
                    </a>
                </div>
                <div className={"socials flex"}>
                    <ImFacebook className={"icon"}/>
                    <BsTwitter className={"icon"}/>
                    <AiFillInstagram className={"icon"}/>
                </div>
            </div>
            <div className={"footer-links"}>
                <span className={"linkTitle"}>Information</span>
                <li>
                    <a href={"#"}>Home</a>
                </li>
                <li>
                    <a href={"#"}>Explore</a>
                </li>
                <li>
                    <a href={"#"}>Travel</a>
                </li>
                <li>
                    <a href={"#"}>Blogs</a>
                </li>

                <span className={"linkTitle"}>
                        Contact Us
                </span>
                <span className={"phone"}>+1234567890</span>
                <span className={"email"}>test123@gmail.com</span>
            </div>

        </div>
    </div>
}