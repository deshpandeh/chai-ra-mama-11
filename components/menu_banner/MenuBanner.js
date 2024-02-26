import Image from "next/image"
import style from "./menubanner.module.scss"
const MenuBanner = () => {
    return (
        <div className={style.menuBanner + " row col-12 d-flex justify-content-center mx-auto m-0 p-0  "}>
            <div className={style.imageContainer + "  col-12  p-0 m-0"}>
                <Image  className="d-block w-100"  width={100} height={350} objectFit="cover" src={"/assets/images/about.jpeg"}alt="..." />
            </div>
            <div className={style.menuText + "  col-12  d-flex justify-content-center align-items-center"}>
                <h1 className={style.bannerHeading+" text-uppercase"}>Menu</h1>
            </div>
        </div>
    )
}

export default MenuBanner