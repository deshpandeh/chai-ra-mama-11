"use client"
import { useAuth } from '@/app/layout';
import HomeBanners from '@/ComponentsAdmin/homeBanner/HomeBanners';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const homeBannerContext = createContext()
export const useHomeBannerContext = () => {
  return useContext(homeBannerContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [bannerData, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"home-banner")
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred && 
        <homeBannerContext.Provider value={{bannerData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <HomeBanners />
          </div>
        </homeBannerContext.Provider>
      }
    </>
  )
}

export default page