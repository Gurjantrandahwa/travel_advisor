import React from "react";
import "./search.scss"
import {Button, InputLabel} from "@mui/material";

export default function Search() {
    return <div className={"search"}>
        <form>
            <div>
                <InputLabel>Location</InputLabel>
                <input
                    type={"text"}
                    size={"small"}
                    placeholder={"Dream Destination"}
                />
            </div>
            <div>
                <InputLabel>Distance</InputLabel>
                <input
                    type={"text"}
                    size={"small"}
                    placeholder={"11/Meters"}
                />
            </div>
            <div>
                <InputLabel>Price Range</InputLabel>
                <input
                    type={"text"}
                    placeholder={"₹500-₹999"}
                    size={"small"}
                />
            </div>

            <Button
                type={"submit"}
                variant={"contained"}
            >
                Search
            </Button>
        </form>

    </div>
}