"use client"

import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PopUp from '../PopUp/PopUp';
import StoreIncharge from '../storeIncharge/StoreIncharge';
import StoreInchargeRequest from '../storeInchargeRequest/StoreInchargeRequest';
const StoreInchargeContext = createContext()

export const useStoreInchargeData = () => {
  return useContext(StoreInchargeContext)
}

const StoreInchargePage = () => {
  const { adminCred } = useAuth()
  const [data, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const [clientRequest, setClientRetrequest] = useState()
  const getStoresData = async () => await Promise.all([getDataService(setStoreCity, "store-locator"),getDataService(setStoreDetails, "stores/all")])
  
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "store-incharge")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  const fetchRequest = async () => await getDataService(setClientRetrequest, "store-incharge-request")
  const fetchInitailData =async()=>await Promise.all([helper(),getStoresData(),fetchRequest()])
  
  useEffect(() => {
    if (adminCred) fetchInitailData()
  }, [adminCred])
  return (
    <>
      {
        adminCred &&
        <StoreInchargeContext.Provider value={{ data, helper, storeDetails, storeCity,clientRequest,fetchRequest }}>
          <div className='container-fluid p-lg-4 py-4 m-0'>
            <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <Tabs defaultActiveKey="store-incharge" id="store-incharge-tabs">
              <Tab eventKey="store-incharge" title="Store Incharge">
                <StoreIncharge />
              </Tab>
              <Tab eventKey="request" title="Request">
                <StoreInchargeRequest />
              </Tab>
            </Tabs>

          </div>
        </StoreInchargeContext.Provider>
      }
    </>
  )
}
 
export default StoreInchargePage