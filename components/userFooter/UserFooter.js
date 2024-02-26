import React from "react";
import style from "./userFooter.module.scss";
import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const UserFooter = () => {
   
    return (
        <div className={style.footer + " container-fluid m-0 p-0"}>
            <div className={style.footerInner + "  d-flex justify-content-center mx-auto m-0 p-0  "}>
                <div className={style.imageContainer + " col-12  p-0 m-0"}>
                    <Image className={style.bgImg + " d-block w-100"} width={100} height={100} objectFit="cover" src={"/assets/images/g1.png"} alt="..." />
                </div>
                <div className={style.footerItem + "   row col-10 d-flex mx-auto mt-2 "}>
                    <div className=" row col-12  mb-1 mt-3  mx-auto ">
                        <div className=" col-12  d-flex justify-content-center justify-content-md-center col-sm-auto my-0   m-0 p-0">
                            <Link href="#" className="p-0 m-0  d-flex p-0">
                                <Image className="" width={140} height={100} objectFit="cover" alt="logo" src={"/assets/images/logo.png"}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={" row col-12  m-0  mx-auto d-flex justify-content-center "}>
                        <div className={style.contactUs + " col-12 col-md-9  col-lg-4  mb-5 my-lg-0 p-0 px-2"}>
                            <h5 className={style.text + " text-light text-center text-lg-start py-3 p-lg-0 mb-lg-5 "}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </h5>
                            <div className={" col-12  p-0 m-0 my-2 my-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center"}>
                                <PhoneIcon className="h2 my-auto me-3" />
                                <span className="">0866241503</span>
                            </div>
                            <div className={" col-12  p-0 m-0  d-flex justify-content-center justify-content-lg-start  align-items-center"}>
                                <EmailIcon className="h2 my-auto me-3" />
                                <span className="">contact@chairamama.in</span>
                            </div>
                        </div>
                        <div className={style.company + " col-sm-6  col-lg-4 p-0 mt-0 px-2 mb-3"}>
                            <h1 className="m-0 p-0 h3 fw-bold text-center text-sm-start">Company</h1>
                            <ul className="m-0 mt-4 px-3 mx-auto text-center text-sm-start">
                                <li className="my-2 p-0"><Link href="#">FAQs</Link></li>
                                <li className="my-2 p-0"><Link href="#">Contact Us</Link></li>
                                <li className="my-2 p-0"><Link href="#">Disclaimer</Link></li>
                                <li className="my-2 p-0"><Link href="#">Privacy Policy</Link></li>
                                <li className="my-2 p-0"><Link href="#">Terms and Conditions</Link></li>
                                <li><Link href="#">Site Map</Link></li>
                            </ul>
                        </div>
                        <div className={style.quickLink + "  col-sm-6  col-lg-4 p-0 mt-5 mt-sm-0 px-2 "}>
                            <h1 className="m-0 p-0 h3 fw-bold text-center text-sm-start">Quick Links</h1>
                            <ul className="m-0 mt-4 px-3 mx-auto text-center text-sm-start">
                                <li className="my-2 p-0"><Link href="#">About Us</Link></li>
                                <li className="my-2 p-0"><Link href="#">Menu</Link></li>
                                <li className="my-2 p-0"><Link href="#">Gallery</Link></li>
                                <li className="my-2 p-0"><Link href="#">Contact Us</Link></li>

                            </ul>
                        </div>

                    </div>
                    <div className={" row col-12  mt-5  mx-auto "}>
                        <div className={style.separater + " mx-auto row col-6 my-4 border border-1 bg-primary"}></div>
                        <div className={style.copyright + " row col-12 mx-auto d-flex justify-content-center"}>
                            <p className="col-6 text-center">&copy; Copyright 2020. All rights reserved.</p>
                        </div>
                        <div className={style.socialMedia + " row col-23 mx-auto d-flex justify-content-center "}>
                            <Link className="col-auto  text-decoration-none text-light mx-2" href={"#"}>
                                <FacebookIcon className={style.icon + " h3 m-0 p-0 "} />

                            </Link>
                            <Link className="col-auto  text-decoration-none text-light mx-2" href={"#"}>
                                <InstagramIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>

                            <Link className="col-auto  text-decoration-none text-light mx-2" href={"#"}>
                                <TwitterIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>

                            <Link className="col-auto  text-decoration-none text-light mx-2" href="#">
                                <YouTubeIcon className={style.icon + " h3 m-0 p-0 "} />
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserFooter;