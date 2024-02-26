"use client"
import { useState } from 'react'
import style from "./changePassword.module.scss"
import Link from 'next/link';
import LockResetIcon from '@mui/icons-material/LockReset';

const ChangePassword = () => {
  const [currentPassword,setCurrentPassword]=useState()
  const [newPassword,setNewPassword]=useState()
  const [confirmNewPassword,setConfirmNewPassword]=useState()
 
  return (

    <div className={style.changePassword + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <LockResetIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Site Details</h3>
        </div>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 ms-auto text-capitalize'> Go back</Link>
      </div>
      <hr />
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <div className='col-md-12 col-lg-8 col-xxl-6'>
          <table className=" table table-borderless text-capitalize ">
            <tbody>
              <tr className=''>
                <td className='align-middle' >Current Password</td>
                <td className='align-middle' ><input value={currentPassword} onChange={(e)=>setCurrentPassword(e.target?.value)} name="currentPassword" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >New Password</td>
                <td className='align-middle' ><input value={newPassword} onChange={(e)=>setNewPassword(e.target?.value)} name="newPassword" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >Confirm new Password</td>
                <td className='align-middle' ><input value={confirmNewPassword} onChange={(e)=>setConfirmNewPassword(e.target?.value)} name="confirmNewPassword" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className='col-12'>
         <button type="submit" className="btn btn-primary d-flex col-auto px-4 py-2 mx-auto text-center justify-content-center text-capitalize">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword