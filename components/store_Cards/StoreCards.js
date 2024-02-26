"use client"
import Image from "next/image"
import style from "./storeCards.module.scss"
import { useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import Link from "next/link";
const StoreCards = () => {
    const [cards, setCards] = useState()
    useEffect(() => {
        try {
            const data = require("@/data/store.json")
            setCards(data)
        }
        catch (e) {
        }
    }, [])
    return (
        <div className={style.storeCards + " container-fluidm-0 p-0 my-5 "}>
            <div className="row col-12 col-xxl-10 mx-auto py-5 px-3 d-flex justify-content-around">
                {
                    cards?.map((val,index) => {
                        return (
                            <div key={val?.address+" "+index} className={style.card + " col-sm-10 col-md-6 col-lg-4 p-4 my-4 border border-2 rounded-3 d-flex justify-content-between flex-column"}>
                                <div className={style.cardData + "  row col-12 mx-auto d-flex p-md-2 align-items-start flex-column  "}>
                                    <div className="row col-12 my-2 m-auto  mx-auto px-2  d-flex justify-content-center  align-items-center">
                                        <div className={style.iconContainer + " row col-2 mx-auto  px-2  rounded mb-auto"}>
                                            <LocationOnIcon className={style.icon + "  rounded px-2 "} />
                                        </div>
                                        <p className="row col-10 mx-auto ps-2 my-auto ">{val?.address}</p>
                                    </div>
                                    <div className="row col-12 mb-2 mx-auto  p-2  justify-content-center   align-items-center">
                                        <div className={style.iconContainer + " row col-2 mx-auto  px-2  rounded"}>
                                            <LocalPhoneRoundedIcon className={style.icon + "  rounded px-2 "} />
                                        </div>
                                        <p className="row col-10 mx-auto ps-2 my-auto ">{val?.countryId} {val?.phone}</p>
                                    </div>
                                </div>
                                <div className={style.mapLink + " row col-11 d-flex flex-column  my-2 mx-auto p-0"}>
                                    <Link className="text-uppercase col-12 text-center  mx-auto fw-bold  rounded-3 p-3" href={val?.link}>View on Map</Link>
                                </div>
                                <div className={style.badge +  "  text-center fw-bold d-flex justify-content-center align-items-center"}>
                                    {index+1}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default StoreCards
