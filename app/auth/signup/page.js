"use client"
import SignUp from "@/ComponentsAdmin/admin_SignUp/SignUp"
import { useEffect } from "react";
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
      <SignUp/>
    </>

  )
}

export default page