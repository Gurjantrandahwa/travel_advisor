import React from "react";
import "./home.scss";

export function Home() {
    return <section className={"home"}>
        <div className={"container secContainer"}>
            <div className={"home-text"}>
                <h1 className={"title"}>
                    Plan Your Trip With Travel Advisor
                </h1>

                <p className={"sub-title"}>
                    Travel to your favourite city with respectful of the environment!
                </p>

                <button className={"btn"}>
                    <a href={"#"}>Explore Now</a>
                </button>

            </div>
        </div>
    </section>
}