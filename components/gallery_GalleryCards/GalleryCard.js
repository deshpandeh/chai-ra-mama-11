"use client";
import Image from "next/image";
import style from "./galleryCard.module.scss"
import { useEffect, useState } from "react";
const GalleryCard = () => {
    const [activeTab, setActiveTab] = useState("all")
    const [tabs, setTabs] = useState([])
    useEffect(() => {
        try {
            const data = require("@/data/menuTabs.json")
            setTabs(data)
        }
        catch (e) {

        }
    }, [])
    return (
        <div className={style.galleryCard + " container-fluid px-0 mx-auto  pb-5"}>
            <div className='row col-12 py-5 mx-auto '>

                <div className={style.tabsContainer + "  row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                    <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <ul className={style.ul_tabs + " border rounded overflow-auto col-md-8 px-3 flex-nowrap d-flex justify-content-start nav nav-pills mb-3"} id="pills-tab" role="tablist">
                            <li className={` flex-nowrap  nav-item col-auto m-2  `} role="presentation">
                                <button onClick={() => setActiveTab("all")} className={`${activeTab == "all" ? style.active_tab : style.not_active} nav-link ${activeTab == "all" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "all" ? "true" : "false"} `}>All</button>
                            </li>

                            {
                                tabs?.map((val) => {
                                    return (
                                        <li key={val?.title} className={` nav-item col-auto m-2`} role="presentation">
                                            <button onClick={() => setActiveTab(val?.title)} className={`${activeTab == val?.title ? style.active_tab : style.not_active} nav-link text-uppercase ${activeTab == val?.title && "active"} `} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected={`false ${activeTab == val?.title ? "true" : "false"} `}>{val?.title}</button>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className={style.galleryItem + " row col-md-11 col-xxl-12 p-0  mx-auto tab-content  m-0 my-5"} id="pills-tabContent">
                        <div className={` row col-12    p-0 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "all" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            {
                                tabs?.map((val) => {
                                    return (

                                        val?.items?.map((item) => {
                                            return (
                                                <div key={val?.title+item?.itmeName+"all"} className=' col-sm-10  p-2  col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-xxl-1 '>
                                                    <Image className=' rounded-3 h-100 w-100' src={item?.img} width={400} height={300} objectFit='cover' alt='gallery image' />
                                                </div>
                                            )
                                        })


                                    )
                                })
                            }
                        </div>
                        {
                            tabs?.map((val) => {
                                return (
                                    <div className={` row col-12    p-0 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == val?.title ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        {
                                            val?.items?.map((item) => {
                                                return (
                                                    <div key={val?.title+item?.itmeName+"sep"} className=' col-sm-10  p-2  col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-xxl-1 '>
                                                        <Image className=' rounded-3 h-100 w-100' src={item?.img} width={400} height={300} objectFit='cover' alt='gallery image' />
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <button className={style.loadmore + " col-auto fw-bold text-light rounded px-5 text-uppercase text-center py-3 outline-none border-0 "}>Load more</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default GalleryCard