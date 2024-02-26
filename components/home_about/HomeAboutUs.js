"use client";
import React, { useEffect, useState } from 'react'
import style from "./homeAbout.module.scss"
import Image from "next/image"
const HomeAboutUs = () => {
    const [about, setAbout] = useState({
        aboutImg: "/assets/images/image 7.png",
        description: "dummy text"
    })
    useEffect(() => {
        try {
            const data = require("@/data/aboutData.json")
            setAbout({ aboutImg: data.aboutImg, description: data.description })
        }
        catch (e) {

        }
    }, [])
    return (
        <div className={style.aboutus + " container-fluid mb-md-5 pb-md-5"}>
            <div className="row col-sm-11 col-xxl-10 mx-auto d-flex justify-content-between ">
                <h1 className="text-center d-lg-none mb-3 text-justify"><span className={style.text_blue}>About</span> <span className={style.text_orange}>Us</span></h1>
                <div className={style.about_img + " col-md-10  col-lg-6 text-center d-flex justify-content-center align-items-center mx-auto"}>
                    <Image className="  col-12 mx-auto my-auto" src={about.aboutImg} height={100} width={100} objectFit="cover" alt="about image" />
                </div>
                <div className={style.about_text + " col-md-10 col-lg-6 col-xl-5 d-flex   flex-column mx-auto "}>
                    <h1 className=" d-none d-lg-flex text-start mb-5 text-justify"><span className={style.text_blue}>About</span> <span className={style.text_orange}>Us</span></h1>
                    <p>{about.description}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs