import React from 'react'
import style from "./FranchisePartnership.module.scss"
import Image from 'next/image'
const FranchisePartnership = () => {
    return (
        <div className={style.franchisePartnershipDesc + " container-fluid my-5 pb-lg-5"}>
            <div className="row  col-12 mx-auto  d-flex justify-content-center align-items-center ">
                <div className={style.franchisePartnership_img + "  col-md-8 col-lg-6  text-center"}>
                <div className={" row col-12 d-flex d-lg-none mx-auto mb-4  d-flex justify-content-lg-start justify-content-center  "}>
                        <h2 className={style.franchisePartnership_title + " p-2 px-3 text-start fw-bold text-light mx-lg-0 text-uppercase  rounded"}>Partnership</h2>
                    </div>
                    <Image className="  col-12 mx-auto" src={"/assets/images/franchisePartner.png"} height={100} width={100} objectFit="cover" alt="about image" />
                </div>
                <div className='col-lg-6 col-xxl-5 py-5 '>
                    <div className={" row col-12 d-none d-lg-flex mx-auto mb-4  d-flex justify-content-lg-start justify-content-center  "}>
                        <h2 className={style.franchisePartnership_title + " p-2 px-3 text-start fw-bold text-light mx-lg-0 text-uppercase  rounded"}>Partnership</h2>
                    </div>
                    <div className={style.heading + " row col-12 col-md-10  mx-auto col-lg-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                        <h1 className=" col-12  fw-bold  text-uppercase  p-0 text-center text-lg-start">Franchise Partnership</h1>
                    </div>
                    <div className={style.franchisePartnership_desc + "  col-md-10  mx-auto col-lg-12 d-flex mb-3   "}>
                        <p className="  ">
                            Mauris rhoncus orci in imperdiet placerat. Vestibulum
                            euismod nisl suscipit ligula volutpat, a feugiat urna
                            maximus. Cras massa nibhtincidunt.
                        </p>
                    </div>
                    <div className={style.franchisePartnership_list + " row col-12  mx-auto col-lg-12 d-flex  p-0 justify-content-around align-items-center  "}>
                        <div className="col-12  p-0  col-md-8 col-xl-9 mx-auto">
                            <input type="email" className=" p-2 mx-auto col-12 lh-lg  border border-1 outline-none form-control shadow-none fw-bold text-capitalize" placeholder="Enter your email id" />
                        </div>
                        <div className="col-6 col-md-3 col-xl-3 mx-auto ">
                            <button type="submit" className="row text-uppercase h5 col-12 my-4 my-lg-0 m-auto d-flex justify-content-center text-light  rounded  border-0 outline-none ">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FranchisePartnership