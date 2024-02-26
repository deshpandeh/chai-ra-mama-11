"use client";
import Image from "next/image";
import style from "./popularMenu.module.scss"
import { useEffect, useState } from "react";
const PopularMenu = () => {
    const [activeTab, setActiveTab] = useState("all")
    const [tabs, setTabs] = useState([])
    useEffect(() => {
        try {
            const data = require("@/data/menuTabs.json")
            console.log(data)
            setTabs(data)

        }
        catch (e) {

        }
    }, [])
    return (
        <div className={style.popularMenu + " container-fluid  pb-5"}>
            <div className='row col-12 py-5 '>
                <div className={" row col-12  d-flex mx-auto mb-5  d-flex justify-content-center "}>
                    <h2 className={style.menu_title + " p-2 px-3 text-center fw-bold text-light text-uppercase text-justify rounded"}>Menu</h2>
                </div>
                <div className={style.heading + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <h1 className=" col-6  fw-bold text-justify text-center text-uppercase">Our Popular Menu</h1>
                </div>
                <div className={style.tabsContainer + " row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                    <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <ul className={style.ul_tabs + " border rounded overflow-auto col-10 px-3 flex-nowrap d-flex justify-content-start nav nav-pills mb-3"} id="pills-tab" role="tablist">
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
                    <div className={style.menuItems + " row col-11  mx-auto tab-content p-2 m-0 my-5"} id="pills-tabContent">

                       
                        {
                            tabs?.map((val) => {
                                return (
                                    <div className={` row col-12 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "all"? "show active":"d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        {val?.items?.map((item) => {
                                            return (
                                                <div className={style.itemCard + "  m-auto col-6  d-flex justify-content-center align-items-center my-4 p-0  "} >
                                                    <div className="col-2 m-0 p-0 d-flex justify-content-center align-items-center my-auto">
                                                        <Image className="m-0 p-0 rounded-pill" src={item?.img} width={300} height={300} objectFit='cover' alt="menu item" />
                                                    </div>
                                                    <div className="col-10 border ps-4 py-5 rounded shadow d-flex justify-content-around align-items-center  my-auto">
                                                        <h3 className={style.itemName + " col-auto text-uppercase text-black my-auto fw-bold h5 text-light py-2 px-0"}>{item?.itemName}</h3>
                                                        <h6 className={style.price + " col-auto py-2 px-0 fw-bold text-center my-auto "}>RS. {item?.itemPrice}/-</h6>
                                                    </div>

                                                </div>

                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                        {
                            tabs?.map((val) => {
                                return (
                                    <div className={` row col-12 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == val?.title? "show active":"d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        {val?.items?.map((item) => {
                                            return (
                                                <div className={style.itemCard + "  m-auto col-6  d-flex justify-content-center align-items-center my-4 p-0  "} >
                                                    <div className="col-2 m-0 p-0 d-flex justify-content-center align-items-center my-auto">
                                                        <Image className="m-0 p-0 rounded-pill" src={item?.img} width={300} height={300} objectFit='cover' alt="menu item" />
                                                    </div>
                                                    <div className="col-10 border ps-4 py-5 rounded shadow d-flex justify-content-around align-items-center  my-auto">
                                                        <h3 className={style.itemName + " col-auto text-uppercase text-black my-auto fw-bold h5 text-light py-2 px-0"}>{item?.itemName}</h3>
                                                        <h6 className={style.price + " col-auto py-2 px-0 fw-bold text-center my-auto "}>RS. {item?.itemPrice}/-</h6>
                                                    </div>

                                                </div>

                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <button className={style.loadmore + " col-auto fw-bold text-light rounded px-5 text-uppercase text-center py-3 outline-none border-0 "}>Load more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularMenu