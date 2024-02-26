"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import style from "./homeBanner.module.scss"
function HomeBanner() {
    const [banner, setBanner] = useState({
        bannerImg: "/assets/images/banner1.png",
        bannerHeading: {
            "heading1": "What is",
            "heading2": "in your life, you always offer"
            , "bold1": "happening"
            , "bold2": "Tea"
        },
        bannerText: "banner Text"
    })
    useEffect(() => {
        try {
            const data = require("@/data/headerData.json")
            // console.log(data)
            setBanner({ bannerImg: data.bannerImg, bannerHeading: data.bannerHeading, bannerText: data.bannerText })
        }
        catch (e) {

        }
    }, [])
    return (
        <>
            <div className={style.banner + "  container-fluid mx-auto m-0 p-0"} data-bs-ride="carousel">
                <div className={style.bannerInner + " d-flex justify-content-center mx-auto m-0 p-0  "}>
                    <div className={style.imageContainer + " col-12  p-0 m-0"}>
                        <Image width={100} height={580} objectFit="cover" src={banner.bannerImg} className="d-block w-100" alt="..." />
                    </div>
                    <div className={style.bannerItem + "  row col-12  col-md-11 d-flex flex-row justify-content-start align-items-center mx-auto  "}>
                        <div className={style.text + " col-12 col-md-8  "}>
                            <h1 className={style.bannerHeading + " col-12    text-center mb-4 text-light"}>&ldquo; {banner.bannerHeading.heading1}<span className={style.text_blue}> {banner.bannerHeading.bold1}</span> {banner.bannerHeading.heading2} <span className={style.text_orange}>{banner.bannerHeading.bold2}</span> &rdquo;</h1>
                            <p className={style.bannerText + " row mx-auto text-light col-sm-11 col-md-10 text-center"}>{banner.bannerText}</p>
                            <div className={style.orderBtn + " d-flex p-4 d-md-none col-12 col-md-4  justify-content-center"}>
                                <button className="outline-none border-0 text-light  mb-auto my-md-auto shadow-lg rounded-pill ">Order Now</button>
                            </div>
                        </div>
                        <div className={style.orderBtn + " d-none d-md-flex p-4  col-12 col-md-4  justify-content-center"}>
                            <button className="outline-none border-0 text-light  mb-auto my-md-auto shadow-lg rounded-pill ">Order Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeBanner