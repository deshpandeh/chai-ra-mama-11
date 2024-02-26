"use client"
import ChangePassword from '@/ComponentsAdmin/changePassword/ChangePassword';
import { useAuth } from '@/app/layout';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <ChangePassword/>
        </div>
      }
    </>
  )
}

export default page