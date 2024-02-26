"use client";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import UserNavbar from '../userNavbar/UserNavbar';
import AdminNavbar from '@/ComponentsAdmin/adminNavbar/AdminNavbar';
const Navbar = () => {
    const url = usePathname()
    const [userRole, setUserRole] = useState("")
    useEffect(() => {
        if (url.toLowerCase().includes("admin")||url.toLowerCase().includes("auth")) {
            setUserRole("admin")
        }
        else {
            setUserRole("user")
        }
    }, [url])
    return (
        <>
            {
                userRole == "admin" && <AdminNavbar />
            }
            {
                userRole == "user" && <UserNavbar />
            }

        </>
    )
}

export default Navbar