"use client"
import { useEffect, useState } from 'react'
import style from "./storeInchargeRequest.module.scss"
import Link from 'next/link';
import { DeleteDataService } from '@/services/deleteData';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import { Button } from '@mui/material';

import PopUp from '../PopUp/PopUp';
import { updateRequestForStoreIncharge } from '@/services/updateRequestForStoreIncharge';
import { useStoreInchargeData } from '../adminPages/StoreInchargePage';

const StoreInchargeRequest = () => {
  const [modal, setModal] = useState({ active: false, storeAdd: "", storeContact: "", storeMap: "" })
  const { clientRequest, fetchRequest, storeCity, storeDetails } = useStoreInchargeData()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [addData, setAddData] = useState(false)
  const [editData, setEditData] = useState({ active: false, _id: "", name: "", email: "", phone: "" })
  const [city, setCity] = useState("all");
  const [store, setStore] = useState("");
  const rejectRequest = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await DeleteDataService({ _id, end_url: "store-incharge-request", setAlert })
    fetchRequest()
  }
  const approveRequest = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await updateRequestForStoreIncharge({ _id, end_url: "store-incharge-request", setAlert ,fetchRequest})
   
  }
  useEffect(() => {
    fetchRequest() 
  }, [])

  return (
    <>
      <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />

      <div className={style.storeInchargeRequest + ' container-fluid my-4  shadow rounded-4 p-4'}>
        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <div className='col-auto  d-flex flex-row justify-content-start '>
            <h5 className={style.heading + '  col-auto my-auto mx-2 text-capitalize'}>Client Request for Store Incharge</h5>
          </div>
          <button onClick={() => fetchRequest()} className='col-auto  ms-auto btn btn-secondary text-decoration-none m-2 text-capitalize'> Refresh</button>
          
        </div>
        <hr />

        <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
          <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
            <thead className='border'>
              <tr>
                <th className='text-capitalize p-2 pb-4 border text-center' >Name</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Email</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Phone</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Store</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                clientRequest?.map((val, index) => {
                  return (
                    <tr key={val?._id + "" + index + "" + Math?.random(10000)} className=''>
                      <td className='align-middle' >{val?.inchargeName}</td>
                      <td className='align-middle'> {val?.inchargeEmail}</td>
                      <td className='align-middle'> {val?.inchargePhone}</td>
                      <td className='align-middle'> <Button className=' bg-info ' onClick={() => setModal({ active: true, storeAdd: val?.storeDetails?.storeAddress, storeContact: val?.storeDetails?.storePhone, storeMap: val?.storeDetails?.storeMap })}>View Store</Button></td>
                      <td className='text-center align-middle'>
                        <button  className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Approve</button>
                        <button  className='btn btn-danger text-decoration-none m-2'>Reject</button>
                      </td>
                    </tr>)
                })
              }
            </tbody>
          </table>
        </div>
        <div className={style.modal + ` modal fade ${modal?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button onClick={() => setModal({ active: false, storeAdd: "", storeContact: "", storeMap: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                <div className={" mb-4 row col-12 mx-auto"}>
                  <label className="form-label">Store Address</label>
                  <input  autoComplete="off"  value={modal?.storeAdd} disabled type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4  row col-12 mx-auto "}>
                  <label className="form-label">Store Contact</label>
                  <input  autoComplete="off"  value={modal?.storeContact} disabled type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4  row col-12 mx-auto "}>
                  <label className="form-label">Store Map</label>
                  <button className='btn btn-secondary text-light text-decoration-none text-uppercase' onClick={() => window.open(modal?.storeMap || "", '_blank')}>view map</button>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={() => setModal({ active: false, storeAdd: "", storeContact: "", storeMap: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreInchargeRequest