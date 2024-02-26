import React from 'react'
import style from "./home_getInTouch.module.scss"
import Image from 'next/image'
const HomeGetInTouch = () => {
    return (
        <div className={style.getInTouch + ' container-fluid m-0 my-5 p-0 py-5'}>
            <h1 className={style.heading + " text-center mb-5 text-justify"}><span className={style.text_blue}>Get In</span> <span className={style.text_orange}>Touch</span></h1>
            <div className={style.container+' row col-11 col-sm-12 col-xl-10 flex-wrap mx-auto d-flex justify-content-between align-content-center'}>
                <div className='row col-12 col-sm-10 col-md-5 my-auto my-0 mx-auto p-0 d-flex justify-content-center'>
                    <Image className='p-0 m-0' src={"/assets/images/g1.png"} width={400} height={300} objectFit='cover' alt='gallery image' />
                </div>
                <div className="row col-12 col-sm-10 col-md-6 py-3 mx-auto mt-5 mt-md-0 p-0 d-flex justify-content-center">
                    <div className={style.form+" row col-12 mx-auto"}>
                        <div className="col-6 mb-4">
                            <input type="text" className="  border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="First name" />
                        </div>
                        <div className="col-6 mb-4">
                            <input type="text" className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Last name"  />
                        </div>
                        <div className="col-12 mb-4">
                            <input type="text" className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Email" />
                        </div>
                        <div className="col-12 mb-4">
                            <input type="text" className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Message"  />
                        </div>
                        <div className={style.submitBtn+" col-12  "}>
                            <button type="submit" className="row col-12 mx-auto d-flex justify-content-center text-light  rounded  border-0 outline-none">Submit</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default HomeGetInTouch