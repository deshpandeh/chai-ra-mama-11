import OurChef from '@/components/about_OurChef/OurChef'
import AboutDesc from '@/components/about_aboutDesc/AboutDesc'
import AboutBanner from '@/components/about_banner/AboutBanner'
import BestCoffee from '@/components/about_bestCoffee/BestCoffee'
import WhyToChooseUs from '@/components/about_whyToChooseUs/WhyToChooseUs'


const page = () => {
  return (
    <>
      <AboutBanner />
      <AboutDesc/>
      <WhyToChooseUs/>
      <BestCoffee/>
      <OurChef/>
    </>

  )
}

export default page