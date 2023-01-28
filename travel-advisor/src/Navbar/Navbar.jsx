import React, {useState} from "react";
import "./Navbar.scss";
import {SiYourtraveldottv} from "react-icons/si";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";

export default function Navbar() {
    const [active, setActive] = useState("navbar");
    const showNav = () => {
        setActive('navbar activeNavbar')
    }
    const removeNav = () => {
        setActive('navbar')
    }
    return <section className={"navbar-Section"}>
        <div className={"header"}>
            <div className={"logo-div"}>
                <a href={"#"}>
                    <h1 className={"flex"}>
                        <SiYourtraveldottv/>
                        Travel
                    </h1>
                </a>
            </div>
            <div className={active}>
                <ul className={"navLists flex"}>
                    {
                        [
                            {
                                text: <a href={"#"} className={"navLink"}>Home</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Products</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Resources</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Contact</a>
                            },
                            {
                                text: <a href={"#"} className={"navLink"}>Blog</a>
                            },

                        ].map(((value, index) => {
                            return <li className={"navItem"} key={index}>
                                {value.text}
                            </li>


                        }))
                    }
                    <div className={"header-btn flex"}>
                        <button className={"btn login-btn"}>
                            <a href={"#"}>Login</a>
                        </button>
                        <button className={"btn"}>
                            <a href={"#"}>Sign Up</a>
                        </button>
                    </div>
                </ul>
                <div className={"closeNavbar"}
                >
                    <AiFillCloseCircle
                        onClick={removeNav}
                        className={"icon"}/>
                </div>
            </div>
            <div
                onClick={showNav}
                className={"toggleNavbar"}>
                <TbGridDots className={"icon"}/>
            </div>
        </div>
    </section>
}