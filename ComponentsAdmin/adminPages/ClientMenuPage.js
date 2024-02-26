"use client"
import { useAuth } from '@/app/layout';

import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import ClientMenu from '../clientMenu/ClientMenu';
const clientMenuContext = createContext()
export const useClientMenuContext = () => {
  return useContext(clientMenuContext)
}
const ClientMenuPage = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [clientMenuData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "client-menu")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <clientMenuContext.Provider value={{ clientMenuData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <ClientMenu />
          </div>
        </clientMenuContext.Provider>
      }
    </>
  )
}

export default ClientMenuPage