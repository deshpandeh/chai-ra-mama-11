"use client"
import { useAuth } from '@/app/layout';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import StoreCity from '@/ComponentsAdmin/storeCity/StoreCity';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const storeLocatorContext = createContext()
export const useStoreLocatorContext = () => {
  return useContext(storeLocatorContext)
}
const page = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeCityData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "store-locator")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <storeLocatorContext.Provider value={{ storeCityData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <StoreCity />
          </div>
        </storeLocatorContext.Provider>
      }
    </>
  )
}

export default page