import React from "react";
import "./about.scss";

export default function About() {
    return <section className={"about section"}>
        <div className={"secContainer"}>
            <div className={"title"}>
                Why Hikings?
            </div>
            <div className={"mainContent container grid"}>

                {
                    [
                        {
                            img: "",
                            title: "100+ Mountains",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        }
                    ].map((value, index) => {
                        return <div className={"singleItem"} key={index}>
                            <img src={""} alt={"Image Name"}/>
                            <h3>{value.title}</h3>
                            <p>{value.description}  </p>

                        </div>
                    })
                }

            </div>
        </div>
    </section>
}