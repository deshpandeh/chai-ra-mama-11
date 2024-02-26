import Image from "next/image"
import style from "./galleryBanner.module.scss"
const GalleryBanner = () => {
    return (
        <div className={style.galleryBanner + " row col-12 d-flex justify-content-center mx-auto m-0 p-0  "}>
            <div className={style.imageContainer + "  col-12  p-0 m-0"}>
                <Image  className="d-block w-100"  width={100} height={350} objectFit="cover" src={"/assets/images/about.jpeg"}alt="..." />
            </div>
            <div className={style.menuText + "  col-12  d-flex justify-content-center align-items-center"}>
                <h1 className={style.bannerHeading+" text-uppercase"}>Gallery</h1>
            </div>
        </div>
    )
}

export default GalleryBanner