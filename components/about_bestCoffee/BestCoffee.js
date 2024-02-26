import React from 'react'
import style from "./bestCoffee.module.scss"
import Image from 'next/image'
import Link from 'next/link'
const BestCoffee = () => {
    return (
        <>
            <div className={style.container + " container-fluid m-0 mb-5 p-0"}>
                <div className={style.bestCoffee + " flex-row d-flex justify-content-end mx-auto m-0 p-0  "}>
                    <div className={style.imageContainer + " row col-12 my-0  mx-auto p-0  "}>
                        <Image className={style.bgImg + " d-block w-50 m-0 p-0 rounded "} width={100} height={100} objectFit="cover" src={"/assets/images/g1.png"} alt="..." />
                    </div>
                    <div className={style.content + "  row col-10 d-flex justify-content-center align-items-center mx-auto h-100 "}>
                        <div className={style.card+" row shadow-lg col-8 d-flex justify-content-center mx-auto h-auto rounded-3 p-4 py-5 "}>
                            <div className={" col-10 p-0 mt-0 "}>
                                <h1 className={style.heading + " m-0 p-0 h1 my-4 fw-bold text-black"}>TRY THE BEST COFFEE IN THE HOUSING CITY</h1>
                                <p className={style.text+ ' my-4 '}>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
                                    suscipit ligula volutpat, a feugiat urna maximus. Cras massa
                                    nibhtincidunt.

                                </p>
                                <p className={style.text+ ' my-4 '}>
                                    Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam
                                    quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.
                                    Aliquam erat volutpat. Aenean
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestCoffee