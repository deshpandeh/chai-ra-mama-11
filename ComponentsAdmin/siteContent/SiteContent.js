
import style from "./siteContent.module.scss"
import PagesIcon from '@mui/icons-material/Pages';
import SourceIcon from '@mui/icons-material/Source';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ImageIcon from '@mui/icons-material/Image';
import GroupIcon from '@mui/icons-material/Group';
import CollectionsIcon from '@mui/icons-material/Collections';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const SiteContent = () => {
 
    return (
        <div className={style.siteContent + ' container-fluid my-4  shadow rounded-4 p-4'}>
            <div className={style.header + ' row col-12 mx-auto'}>
                <SourceIcon className={style.icon + ' col-auto my-auto p-0 '} />
                <h3 className={style.heading + ' fw-bold col-auto my-auto'}>Site Content</h3>
            </div>
            <hr />
            <div className='row col-12 mx-auto  px-2 px-lg-3'>
                <Link href="./cmspages" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer1 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><PagesIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> CMS Pages</p></div>
                    </div>
                </Link>
                <Link href="./homebanner" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer2 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><ViewCarouselIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Home Banners</p></div>
                    </div>
                </Link>
                <Link href="./page-headers" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer3 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><ImageIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Header Images</p></div>
                    </div>
                </Link>
                <Link href="./client-feedback" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer4 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><GroupIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Client Feedback</p></div>
                    </div>
                </Link>
                <Link href="./gallery" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer5 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><CollectionsIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Gallery</p></div>
                    </div>
                </Link>
                <Link href="./franchise-faq" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer6 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><QuestionAnswerIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Franchise Question</p></div>
                    </div>
                </Link>
                <Link href="./menu" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer7 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><WidgetsIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> User Menu</p></div>
                    </div>
                </Link>
                <Link href="./client-menu" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer7_1 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><RestaurantMenuIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Client Menu</p></div>
                    </div>
                </Link>
                <Link href="./store" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer8 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><StoreIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Store Locators</p></div>
                    </div>
                </Link>
                <Link href="./store-incharge" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer10 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><SupervisorAccountIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Store incharge</p></div>
                    </div>
                </Link>
                <Link href="./site-enquiries" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer9 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><InfoIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Site Enquiries</p></div>
                    </div>
                </Link>
                <Link href="./staff-request" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer11 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><CircleNotificationsIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'>Staff Request</p></div>
                    </div>
                </Link>
                <Link href="./product-orders" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                        <div className={style.iconContainer1 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><ShoppingBasketIcon className={style.icon} /></div>
                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'>Product Orders</p></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SiteContent