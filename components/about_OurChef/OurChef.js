"use client";
import React, { useEffect, useState } from 'react'
import style from "./ourChef.module.scss"
import Image from 'next/image'
const OurChef = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        try {
            const data = require("@/data/ourChef.json")
            setCards(data)
            // console.log(cards)
        }
        catch (e) {

        }
    }, [])
    return (
        <>
            <div className={style.wcu + " container-fluid mt-5 py-5"}>
                <div className='row col-12 py-5 '>
                    <div className={" row col-12  d-flex mx-auto mb-5  d-flex justify-content-center "}>
                        <h2 className={style.wcu_title + " p-2 px-3 text-center fw-bold text-light text-uppercase text-justify rounded"}>Our Chef</h2>
                    </div>
                    <div className={style.about_heading + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                        <h1 className=" col-6  fw-bold text-justify text-center text-uppercase">meet our professional</h1>
                    </div>
                    <div className={style.wcuCardContainer + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                        <div className={" container-fluid my-5"}>
                            <div className="row  col-12 mx-auto d-flex justify-content-around ">
                                {
                                    cards?.map((val) => {
                                        return (
                                            <div key={val?.name + val?.experince} className={style.wcuCard + "  card col-3 rounded-4 d-flex justify-content-center align-items-center  border-1 p-4 pb-0"}>
                                                <div className={style.imgContainer + " col-12 px-2 mx-auto my-3  "}>
                                                    <Image className={style.bgImg + " d-block w-100 m-0 p-0  "} width={100} height={100} objectFit="cover" src={val?.img} alt="..." />
                                                </div>
                                                <div className="row col-12 col-12 card-body  px-0 ">
                                                    <h5 className={style.name + " fw-bold mb-3 card-title text-uppercase "}>{val?.name}</h5>
                                                    <h5 className={style.experince + " fw-bold mb-3 card-title text-uppercase "}>{val?.experience}</h5>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurChef