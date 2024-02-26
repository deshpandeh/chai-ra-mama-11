"use client"
import { useAuth } from '@/app/layout';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import Store from '@/ComponentsAdmin/store/Store';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const storeContext = createContext()
export const useStoreContext = () => {
  return useContext(storeContext)
}
const page = ({ params }) => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeData, setData] = useState()

  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, `stores?_id=${params?.id}`)
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <storeContext.Provider value={{ pId: params?.id, helper, storeData }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <Store />
          </div>
        </storeContext.Provider>
      }
    </>
  )
}

export default page