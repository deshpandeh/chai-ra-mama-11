"use client";
import React, { useEffect, useState } from 'react'
import style from "./franchisePartnerProfit.module.scss"
import Image from "next/image"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const FranchisePartnerProfit = () => {
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
        <div className={style.franchise + " container-fluid mt-2 "}>
            <div className="row mx-auto  col-12 mx-auto d-flex justify-content-center my-4">

                <div className={style.franchise_img + "  col-md-8 p-0 col-lg-6 text-center d-flex flex-column"}>
                    <div className={" row col-12 d-flex d-lg-none mx-auto mb-4  "}>
                        <h2 className={style.franchise_title + " col-auto p-2 px-3 text-start mx-auto  mx-lg-0 fw-bold text-light text-uppercase text-justify rounded"}>Partnership Profit</h2>
                    </div>
                    <video className='row col-12 d-flex m-auto' width="320" height="240" controls>
                        <source src="/assets/video/franchiseVideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={style.about_text + " col-lg-6 col-xxl-5 py-5   "}>
                    <div className={" row col-12 d-none d-lg-flex mx-auto mb-4   "}>
                        <h2 className={style.franchise_title + " col-auto p-2 px-3 text-start mx-auto  mx-lg-0 fw-bold text-light text-uppercase text-justify rounded"}>Partnership Profit</h2>
                    </div>
                    <div className={style.heading + " row col-12 col-md-10  mx-auto col-lg-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                        <h1 className=" col-12  fw-bold text-center text-lg-start text-uppercase  p-0">Advantage of being  a Franchise Partnership</h1>
                    </div>
                    <div className={style.franchisePartnership_desc + "   col-md-10  mx-auto col-lg-12  d-flex mb-3    "}>
                        <p className="">
                            Mauris rhoncus orci in imperdiet placerat. Vestibulum
                            euismod nisl suscipit ligula volutpat, a feugiat urna
                            maximus. Cras massa nibhtincidunt.
                        </p>
                    </div>
                    <div className={style.about_list + " col-md-10  mx-auto col-lg-12 d-flex p-0  "}>
                        <ul className='p-0'>
                            <li className=' d-flex justify-content-around'>
                                <CheckCircleIcon className={style.icon + "  col-auto"} />
                                <p className=" mb-4 col-10">What is Lorem Ipsum Lorem Ipsum is simply.</p>
                            </li>
                            <li className=' d-flex justify-content-around'>
                                <CheckCircleIcon className={style.icon + "  col-auto"} />
                                <p className=" mb-4 col-10">Dummy text of the printing text.</p>
                            </li>
                            <li className=' d-flex justify-content-around'>
                                <CheckCircleIcon className={style.icon + "  col-auto"} />
                                <p className=" mb-4 col-10">Typesetting industry Lorem Ipsum has been the industry's </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchisePartnerProfit