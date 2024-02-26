"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/footer/Footer'
import { createContext, useContext, useEffect, useState } from 'react'
import { checkAdminLoginToken } from '@/services/checkAdminLoginToken'
import style from "./page.module.scss"
import Cookies from 'js-cookie';
import { getDataService } from '@/services/getDataService'
import { checkUserLoginToken } from '@/services/checkUserLoginToken'

const siteDataUIContext = createContext()
export const useSiteDataUIContext = () => {
  return useContext(siteDataUIContext)
}

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const headerCMSUiContext = createContext()
export const useHeaderAndCMSUiContext = () => {
  return useContext(headerCMSUiContext)
}

export default function RootLayout({ children }) {
  const [adminCred, setAdminCred] = useState("")
  const [isAdminAuthorized, setAdminAuthentication] = useState(false)
  const [userCred, setUserCred] = useState("")
  const [headers, setHeaders] = useState()
  const [cmsData, setCmsData] = useState()
  const [siteUIData, setData] = useState()

  const helper = async () => {
    await getDataService(setData, "site-details/ui")
  }
  const getHeaderAndCms = async () => {
    await getDataService(setHeaders, "headers")
    await getDataService(setCmsData, "cms-pages")
  }

  const getAdmin = async () => {
    const cookie = Cookies.get("teaToken")
    try {
      const data = await checkAdminLoginToken(cookie)
      if ("id" in data) {
        setAdminCred(data?.id)
        setAdminAuthentication(data?.authorized)
      }
      else setAdminCred("")
    }
    catch (err) {
      setAdminCred("")
    }
  }
  const getUser = async () => {
    const cookie = Cookies.get("localUserToken")
    try {
      const data = await checkUserLoginToken(cookie)
      console.log("useToken" + data)
      if ("id" in data) setUserCred(data?.id)
      else setUserCred("")
    }
    catch (err) {
      setUserCred("")
    }
  }
  const isAdminLogin = () => getAdmin()
  const isUserLogin = () => getUser()
  const logOutAdmin = () => {
    setAdminCred("")
    Cookies.remove('teaToken');
  }
  const logOutUser = () => {
    setUserCred("")
    Cookies.remove('localUserToken');
  }
  useEffect(() => {
    getAdmin()
    getUser()
    getHeaderAndCms()
    helper()
  }, [])
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthContext.Provider value={{ adminCred, userCred, isAdminLogin, isUserLogin, logOutAdmin, logOutUser,isAdminAuthorized }}>
            <siteDataUIContext.Provider value={{ siteUIData, helper }}>
              <Navbar />
              <headerCMSUiContext.Provider value={{ headers, cmsData }}>
                <div className={style.bodyContent}>
                  {children}
                </div>
              </headerCMSUiContext.Provider>
              <Footer />
            </siteDataUIContext.Provider>
          </AuthContext.Provider>
        </main>
      </body>
    </html>
  )
}
