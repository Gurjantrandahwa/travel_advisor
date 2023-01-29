import React from "react";
import "./home.scss";

export default function Home() {
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


                    <form className={"home-card grid"}>
                        <div>
                            <label htmlFor={"location"}>Location</label>
                            <input type={'text'} placeholder={"Dream Destination"}/>
                        </div>
                        <div>
                            <label htmlFor={"distance"}>Distance</label>
                            <input type={'text'} placeholder={"11/Meters"}/>
                        </div>
                        <div>
                            <label htmlFor={"price"}>Price</label>
                            <input type={'text'} placeholder={"₹500-₹1000"}/>
                        </div>
                        <button className={"btn"}>
                            Search
                        </button>
                    </form>

        </div>
    </section>
}