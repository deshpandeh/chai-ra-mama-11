import React from 'react'
import style from "./contactDetails.module.scss"
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
const ContactDetails = () => {
    return (
        <div className={style.contact + ' container-fluid p-2 my-5 pb-5'}>
            <div className={style.cardContainer + ' row col-xl-11 col-xxl-10 mx-auto py-5 p-xl-5   rounded-3 border'}>
                <div className={' row col-12 mx-auto  '}>
                    <div className={style.card + ' col-md-6 col-lg-4   p-1 p-lg-3 d-flex justify-content-between'}>
                        <div className={style.iconContainer + ' col-3 border d-flex justify-content-center align-items-center  p-0 my-auto py-3 rounded-3'}>
                            <DraftsOutlinedIcon className={style.icon + " p-0"} />
                        </div>
                        <div className='col-8'>
                            <p className={style.title1 + ' text-uppercase fw-bold p-0  mx-0 my-1'}>Contact Us</p>
                            <p className={style.title2 + ' p-0  mx-0 my-1'}>sdfdf@gmail.com</p>
                            <p className={style.title3 + ' p-0  mx-0 my-1'}>+91 343434555</p>
                        </div>
                    </div>
                    <div className={style.card + ' col-md-6 col-lg-4   p-1 p-lg-3 d-flex justify-content-between'}>
                        <div className={style.iconContainer + ' col-3 border d-flex justify-content-center align-items-center  p-0 my-auto py-3 rounded-3'}>
                            <FmdGoodOutlinedIcon className={style.icon + " p-0"} />
                        </div>
                        <div className='col-8'>
                            <p className={style.title1 + ' text-uppercase fw-bold p-0  mx-0 my-1'}>Our location</p>
                            <p className={style.title2 + ' p-0  mx-0 my-1'}>hera road 2344-78</p>
                            <p className={style.title3 + ' p-0  mx-0 my-1'}>Australia 989 - South</p>
                        </div>
                    </div>
                    <div className={style.card + ' col-md-6 col-lg-4   p-1 p-lg-3 d-flex justify-content-between'}>
                        <div className={style.iconContainer + ' col-3 border d-flex justify-content-center align-items-center  p-0 my-auto py-3 rounded-3'}>
                            <AccessTimeOutlinedIcon className={style.icon + " p-0"} />
                        </div>
                        <div className='col-8'>
                            <p className={style.title1 + ' text-uppercase fw-bold p-0  mx-0 my-1'}>Opening Hours</p>
                            <p className={style.title2 + ' p-0  mx-0 my-1'}>Mon - Sat (8:00 -6:00)</p>
                            <p className={style.title3 + ' p-0  mx-0 my-1'}>Sunday Closed</p>
                        </div>
                    </div>
                    <div className={style.card + ' row col-12 mx-auto  px-1 px-lg-3 d-flex justify-content-between'}>
                        <div className="col-md-6 my-3">
                            <input required type="text" className=" px-3  border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Enter your Name" />
                        </div>
                        <div className="col-md-6 my-3">
                            <input required type="email" className=" px-3  border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Enter your Email" />
                        </div>
                    </div>
                    <div className={style.card + ' row col-12 mx-auto px-1 px-lg-3  d-flex justify-content-between'}>
                        <div className="col-12 my-3">
                            <input required type="text" className=" px-3  border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Enter your Subject" />
                        </div>
                        <div className="col-12 mt-4">
                            <textarea required type="text" className=" px-3  border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Enter your Message" ></textarea>
                        </div>
                    </div>

                </div>
                <div className=" col-auto col-md-6  mx-auto my-5 ">
                    <button type="submit" className="row text-uppercase h5 col-12 my-4 my-lg-0 m-auto d-flex justify-content-center text-light  rounded fw-bold border-0 outline-none ">send message</button>
                </div>

            </div>
        </div>
    )
}

export default ContactDetails