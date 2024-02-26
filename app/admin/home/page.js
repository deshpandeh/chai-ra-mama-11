"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import SiteContent from '@/ComponentsAdmin/siteContent/SiteContent';
import SiteSetting from '@/ComponentsAdmin/siteSetting/SiteSetting';
const page = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

 /*  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      // Store the current page location in localStorage
      localStorage.setItem('lastVisitedPage', '/admin/home');
    }
  }, [user,router]) */
  return (
    <>
      {
        // user &&
        <div className='container-fluid p-lg-4  m-0'>
          <SiteContent />
          <SiteSetting/>
        </div>
      }
    </>
  )
}

export default page