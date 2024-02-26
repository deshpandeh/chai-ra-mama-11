"use client"

import { useAuth } from '@/app/layout';
import CmsPages from '@/ComponentsAdmin/cmsPages/CmsPages';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const cmsContext = createContext();
export function useCmsData() {
  return useContext(cmsContext);
}

const page = () => {
  const [data, setData] = useState([])
  const { adminCred } = useAuth()
  const helper = async () => {
    await getDataService(setData,"cms-pages")
  }
  useEffect(() => {
    if(adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred && 
        <cmsContext.Provider value={{data,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <CmsPages />
          </div>
        </cmsContext.Provider>
      }
    </>
  )
}

export default page