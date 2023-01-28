import React from "react";
import "./home.scss";

export function Home() {
    return <section className={"home"}>
        <div className={"container"}>
            <div className={"home-text"}>
                <h1>
                    Plan Your Trip With Travel Advisor
                </h1>

                <p>
                    Travel to your favourite city with respectful of the environment!
                </p>

                <button className={"btn"}>
                    <a href={"#"}>Explore Now</a>
                </button>

            </div>
            <div className={"home-card grid"}>
<form>
    <div>
        <label htmlFor={"location"}>Location</label>
        <input />
    </div>

</form>
            </div>
        </div>
    </section>
}