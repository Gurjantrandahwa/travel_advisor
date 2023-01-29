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
                            img: "https://i.pinimg.com/564x/fd/09/f7/fd09f7c5093408bcdd7510347301920f.jpg",
                            title: "1000+ Mountains",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },
                        {
                            img: "https://i.pinimg.com/564x/42/6c/b1/426cb15ccbadcfdd1a860907bc9c3a18.jpg",
                            title: "1000+ Hikings",
                            description: " Although we don’t have cubs of our own we understand the uniqueness of travelling the world with kids."
                        },
                        {
                            img: "https://i.pinimg.com/564x/48/6d/e6/486de695c37a7411074cbc4168001315.jpg",
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
                    <video src={"https://cdn.pixabay.com/vimeo/176277723/Beach%20-%203998.mp4?width=960&expiry=1675008881&hash=7c81f71b02b2183a68f2830f4e665a459b23bc0b"}
                           autoPlay loop
                    type={"video/mp4"}>

                    </video>
                </div>
            </div>
        </div>
    </section>
}