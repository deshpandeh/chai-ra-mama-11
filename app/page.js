"use client"
import style from "./page.module.scss"
import HomeBanner from "@/components/home_banner/HomeBanner"
import HomeHeaderCard from "@/components/home_headerCard/HomeHeaderCard"
import HomeAboutUs from "@/components/home_about/HomeAboutUs"
import HomeGallery from "@/components/home_gallery/HomeGallery"
import HomeMenu from "@/components/home_menu/HomeMenu"
import HomeTestimonial from "@/components/home_testimonial/HomeTestimonial"
import HomeGetInTouch from "@/components/home_getInTouch/HomeGetInTouch"
import { useEffect, useState } from "react"

const page = () => {
  const [data, setData] = useState()
  const getHomeData = async (e) => {
    try {
      const result = await fetch("/api/home/all", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
      })
      const data = await result.json()
     setData(data)
    }
    catch (err) {
      console.log("error in fetching home data" + err)
    }
  }
  const helper = async () => {
    await getHomeData()
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      {/* banner */}
      <HomeBanner props={data?.homeBannerData[0] }/>

      {/* card */}
      <HomeHeaderCard props={data?.homeHeaderCardData } />

      {/* about us */}
      <HomeAboutUs props={data?.homeAboutUsData[0] } />

      {/* Our gallery */}
      <HomeGallery props={data?.homeGalleryData } />

      {/* menu */}
      <HomeMenu props={data?.homeMenuCardData } />

      {/* Testimonials */}
      <HomeTestimonial props={data?.homeTestimonialCardData } />

      {/* Get in Touch */}
      <HomeGetInTouch props={data?.homeGetInTouchImageData } />

    </>
  )
}

// Static MetaTag
// export const metadata = {
//   title: " Static title",
//   description: "Static Desciption"
// }

// dynamic metadata

// export async function generateMetadata({ params }) {
//   return {
//     title: 'Dynamic Title',
//     description: "Dynamic Desciption"
//   }
// }

export default page
