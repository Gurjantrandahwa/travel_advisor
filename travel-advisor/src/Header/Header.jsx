import React from "react";
import "./Header.scss";
import {Button} from "@mui/material";
import {motion} from "framer-motion";

export default function Header() {
    return <div className={"header"}
                style={{
                    backgroundImage: "url(https://i.redd.it/m6y3b2fkyie51.jpg)",
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: "100%"
                }}
    >
        <motion.div className={"title-wrapper"}
             initial={{
                 x: -500,
                 opacity: 0,
                 scale: 0.5
             }}
             animate={{
                 x: 0,
                 opacity: 1,
                 scale: 1
             }}
             transition={{
                 duration: 1.5,
             }}
        >
            <h5>Travel Advisor</h5>
            <div className={"list"}>
                {
                    [
                        {
                            text: "Home"
                        },
                        {
                            text: "Products"
                        },
                        {
                            text: "Resources"
                        },
                        {
                            text: "Contact"
                        },
                        {
                            text: "Blog"
                        },
                        {
                            text: <Button
                                sx={{
                                    border: "1px solid hsl(26,93%,50%)"
                                }}
                                variant={"outlined"}
                            >
                                Login
                            </Button>
                        },
                        {
                            text: <Button
                                sx={{
                                    backgroundColor:"hsl(26,93%,50%)"
                                }}
                                variant={"contained"}
                            >
                                Sign Up
                            </Button>
                        }
                    ].map(((value, index) => {
                        return <ul key={index}>
                            <li>{value.text}</li>
                        </ul>
                    }))
                }
            </div>

        </motion.div>
        <div className={"text-wrapper"}>

            <h1>
                Plan your trip with Travel
            </h1>
            <h1>
                Travel Advisor
            </h1>
            <div className={"city"}>
                <p>Travel to your favorite city with respectful of the</p>
                <p>Environment</p>
            </div>

            <Button
                sx={{
                    backgroundColor:"hsl(285, 90%, 12%)"
                }}
                variant={"contained"}
            >Explore Now</Button>
        </div>

    </div>
}