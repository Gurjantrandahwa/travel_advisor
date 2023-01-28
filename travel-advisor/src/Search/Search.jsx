import React from "react";
import "./search.scss"


export default function Search() {
    return <div className={"search"}>
        <form>
            <div>
                <label>Location</label>
                <input
                    type={"text"}
                    size={"small"}
                    placeholder={"Dream Destination"}
                />
            </div>
            <div>
                <label>Distance</label>
                <input
                    type={"text"}
                    size={"small"}
                    placeholder={"11/Meters"}
                />
            </div>
            <div>
                <label>Price Range</label>
                <input
                    type={"text"}
                    placeholder={"₹500-₹999"}
                    size={"small"}
                />
            </div>

            <button
                type={"submit"}

            >
                Search
            </button>
        </form>

    </div>
}