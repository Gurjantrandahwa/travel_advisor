import React from "react";
import "./about.scss";

export default function About() {
    return <section className={"about section"}>
        <div className={"secContainer"}>
            <div className={"title"}>
                Why Hikings ?
            </div>
            <div className={"mainContent container grid"}>

                {
                    [
                        {
                            img: "https://i.pinimg.com/564x/25/3d/e5/253de59d59105f24e3d2183d1c83f01e.jpg",
                            title: "1000+ Mountains",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },
                        {
                            img: "https://i.pinimg.com/564x/cb/c4/29/cbc4291d3fbf0ccc92e325923f528990.jpg",
                            title: "1000+ Hikings",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },
                        {
                            img: "https://i.pinimg.com/564x/3f/68/a1/3f68a1d14bcb3f86629275103a730a6c.jpg",
                            title: "1000+ Customers",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },

                    ].map((value, index) => {
                        return <div className={"singleItem"} key={index}>
                            <img src={value.img} alt={"Image Name"}/>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    })
                }
            </div>
            <div className={"videoCard container"}>
                <div className={"cardContent grid"}>
                    <h2>Wonderful House experience in there!</h2>
                    <p>
                        It’s important to spend those 18 summers with your children wisely.
                        Take them someplace that can create lasting memories.
                    </p>
                </div>
                <div className={"cardVideo"}>
                    <img
                        src={"https://i.pinimg.com/originals/34/69/f5/3469f579034feb8cc90f3702abe06f13.gif"}
                        alt={""}
                    />

                </div>
            </div>
        </div>
    </section>
}