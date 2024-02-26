"use client";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import AdminFooter from '@/ComponentsAdmin/adminFooter/AdminFooter';
import UserFooter from '../userFooter/UserFooter';
const Footer = () => {
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
                userRole == "admin" && <AdminFooter />
            }
            {
                userRole == "user" && <UserFooter />
            }

        </>
    );
};
export default Footer;