
"use client"
import SignIn from "@/ComponentsAdmin/admin_SignIn/SignIn"
import { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/admin/home');
    }
  }, [user,router])
  return (
    <>
      {
        !user && <SignIn />
      }
    </>
  )
}

export default page