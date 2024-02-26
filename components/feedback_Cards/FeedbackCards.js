"use client"
import Image from "next/image"
import style from "./feedbackCards.module.scss"
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useEffect, useState } from "react";
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<StarIcon className={style.icon + " "} />);
    }
    if (halfStar >= 0.5) {
        stars.push(<StarHalfIcon className={style.icon + " "} />);
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(< StarBorderIcon className={style.icon + " "} />)
    }
    return (
        <>
            {stars}
        </>
    );
}

const FeedbackCards = ({ props }) => {
    const [cards, setCards] = useState()
    useEffect(() => {
        try {
            const data = require("@/data/feedback.json")
            setCards(data)
        }
        catch (e) {
        }
    }, [])
    return (
        <div className={style.feedbackCards + " container-fluidm-0 p-0 my-5 "}>
            <div className="row col-12 col-xxl-10 mx-auto py-5 px-3 d-flex justify-content-around">
                {
                    cards?.map((val) => {
                        return (
                            <div key={val?.name + "" + val?.rating} className="col-sm-10 col-md-6 col-lg-5 col-xl-4 mb-5 d-flex flex-column ">
                                <div className={style.card + " row col-12 border border-2 d-flex justify-content-center flex-row align-items-start   rounded p-2 px-4  mx-auto"}>
                                    <div className={style.rating + " col-12 d-flex   my-3"}>
                                        <StarRating rating={parseFloat(val?.rating)} />
                                    </div>
                                    <div className={style.textContainer + " col-12 d-flex  p-0 mb-auto"}>
                                        <p className={style.feedbackText + " p-2 m-0"}>{val?.feedbackText}</p>
                                    </div>
                                </div>
                                <div className={style.feedbackProfile + "  row rounded  px-2 py-3 col-12 mx-auto d-flex justify-content-center align-items-center"}>
                                    <div className={style.cardImage + "  col-auto m-0 p-0 d-flex justify-content-center align-items-center flex-column my-auto"}>
                                        <PlayArrowRoundedIcon className={style.arrow + " row col-12 mx-auto  p-0 my-0 d-flex "} />
                                        <Image className="row col-12 mx-auto m-0 p-0 my-2 rounded-pill " src={"/assets/images/g1.png"} width={300} height={300} objectFit='cover' alt="menu item" />
                                    </div>
                                    <div className={style.cardBody + " col-8 d-flex justify-content-around align-items-center flex-column flex-wrap  my-auto"}>
                                        <h3 className={style.name + " col-12 text-uppercase  my-auto fw-bold h5  px-0 text-uppercase"}>{val?.name}</h3>
                                        <p className={style.designation + " col-12 py-2 px-0 fw-bold my-auto text-uppercase"}>{val?.designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeedbackCards
