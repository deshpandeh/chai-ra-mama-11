"use client"
import { useAuth } from '@/app/layout';
import ClientFeedback from '@/ComponentsAdmin/clientFeedback/ClientFeedback';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const clientFeedbackContext = createContext()
export const useClientFeedbackContext = () => {
  return useContext(clientFeedbackContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [clientFbData, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"client-feedback")
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])

  return (
    <>
      {
        adminCred && 
        <clientFeedbackContext.Provider value={{clientFbData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <ClientFeedback />
          </div>
        </clientFeedbackContext.Provider>
      }
    </>
  )
}

export default page