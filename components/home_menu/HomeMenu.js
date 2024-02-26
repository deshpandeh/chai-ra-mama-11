"use client"
import React, { useEffect, useState } from 'react'
import style from "./homeMenu.module.scss"
import Image from 'next/image'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const HomeMenu = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        try {
            const data = require("@/data/menuCard.json")
            setCards(data)
            // console.log(cards)
        }
        catch (e) {

        }
    }, [])
    return ( 
        <div className={style.menu + ' container-fluid m-0 mt-5 p-0 py-5'}>
            <h1 className={style.heading + " text-center my-3 my-lg-5 text-justify"}><span className={style.text_blue}>Our</span> <span className={style.text_orange}>Menu</span></h1>
            <div className='row col-11 col-xl-10 mx-auto d-flex justify-content-between my-5'>
                {
                    cards.map((val) => {
                        return (
                            <div className={style.itemCard + " col-12 col-lg-6  p-2  mb-4"} >
                                <div className="row col-12 mx-auto m-0 p-0 d-flex justify-content-start ">
                                    <div className="col-md-2 m-0 mb-3 p-0">
                                        <Image className="m-0 p-0 rounded" src={val.img} width={300} height={300} objectFit='cover' alt="menu item" />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="px-3 row-col-12 mx-auto">
                                            <h3 className="col-12 text-light text-center text-md-start">{val.title}</h3>
                                            <p className="col-12">{val.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
                
            </div>
            <div className={style.viewMore + ' row col-10 mx-auto d-flex justify-content-center mt-md-5 py-md-5'}>
                <button className='border-0 outline-none col-auto py-3 px-5 rounded '>View more <KeyboardArrowRightIcon />  </button>
            </div>
        </div>
    )
}

export default HomeMenu