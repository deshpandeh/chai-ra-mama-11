"use client"
import { useAuth } from '@/app/layout';
import Gallery from '@/ComponentsAdmin/gallery/Gallery';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const galleryContext = createContext()

export const useGalleryData = () => {
  return useContext(galleryContext)
}
 
const page = () => {
  const { adminCred } = useAuth()
  const [data, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"gallery")
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred && 
        <galleryContext.Provider value={{ data, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <Gallery />
          </div>
        </galleryContext.Provider>
      }
    </>
  )
}

export default page