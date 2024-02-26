"use client";
import Image from "next/image";
import style from "./faq.module.scss"
import { useEffect, useState } from 'react';
const FAQ = () => {
    const [accordion, setAccordion] = useState([])
    const [activeAcc,setActiveAcc]=useState(0)
    useEffect(() => {
        try {
            const data = require("@/data/Accordion.json")
            setAccordion(data)
        }
        catch (e) {

        }
    }, [])
    return (
        <div className={style.faq + " container-fluid  pb-5 px-0"}>
            <div className='row col-12 py-5 mx-auto  p-0'>
                <div className={" row col-12  d-flex mx-auto mb-3  d-flex justify-content-center "}>
                    <h2 className={style.faq_title + " p-2 px-3 text-center fw-bold text-light text-uppercase text-justify rounded"}>FAQ</h2>
                </div>
                <div className={style.about_heading + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <h1 className=" col-12  fw-bold text-justify text-center text-uppercase">Frequently asked question</h1>
                </div>
                <div className={style.faqCard + " row col-12 d-flex  mb-3 d-flex mx-auto p-0  d-flex justify-content-center  "}>
                    <div className={" container-fluid my-5"}>
                        <div className="row  col-xl-10 mx-auto d-flex justify-content-around ">
                            <div className={style.custom+" accordion accordion-flush"} id="accordionFlushExample">
                                {
                                    accordion?.map((val, index) => {
                                        return (
                                            <div key={val.title+""+index} className="accordion-item my-2">
                                                <h1 className={" accordion-header  "} id={`flush-heading${index}`} onClick={()=>index!=activeAcc?setActiveAcc(index) :setActiveAcc(-1)}>
                                                    <button className={style.faqHeading+`  accordion-button  outline-none shadow-none border-0 ${index!=activeAcc && "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                       {val?.title}
                                                    </button>
                                                </h1>
                                                <div id={`flush-collaps${index}`} className={style.content+` accordion-collapse collapse p-3  ${index==activeAcc && "show"} `} aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">{val?.content}</div>
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
        </div>
    )
}

export default FAQ