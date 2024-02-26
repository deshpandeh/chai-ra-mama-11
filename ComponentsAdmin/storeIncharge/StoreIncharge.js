"use client"
import { useEffect, useState } from 'react'
import style from "./storeIncharge.module.scss"
import Link from 'next/link';
import { DeleteDataService } from '@/services/deleteData';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import StoreInchargeAdd from '../StoreInchargeAdd/StoreInchargeAdd';
import { Button } from '@mui/material';
import StoreInchargeEdit from '../StoreInchargeEdit/StoreInchargeEdit';
import PopUp from '../PopUp/PopUp';
import { useStoreInchargeData } from '../adminPages/StoreInchargePage';

const StoreIncharge = () => {
  const [modal, setModal] = useState({ active: false, storeAdd: "", storeContact: "", storeMap: "" })
  const { data, helper, storeCity, storeDetails } = useStoreInchargeData()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [addData, setAddData] = useState(false)
  const [editData, setEditData] = useState({ active: false, _id: "", name: "", email: "", phone: "" })
  const [city, setCity] = useState("all");
  const [store, setStore] = useState("");
  const deleteData = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending delete request to Admin" })
    await DeleteDataService({ _id, helper, end_url: "store-incharge" ,setAlert})
  }
  useEffect(() => {
    helper()
  }, [])

  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />

      <div className={style.storeIncharge + ' container-fluid my-4  shadow rounded-4 p-4'}>
        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <div className='col-auto  d-flex flex-row justify-content-start '>
            <SupervisorAccountIcon className={style.icon + ' col-auto my-auto p-0 '} />
            <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Store Incharge</h3>
          </div>
          <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add store incharge</button>
          <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
        </div>
        <hr />

        <StoreInchargeEdit editData={editData} setEditData={setEditData} />
        <StoreInchargeAdd addData={addData} setAddData={setAddData} />

        <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
          <div className='row col-12 mx-auto mt-2'>

            <div className=" col-4 mb-4">
              <label className="form-label text-capitalize">Select City</label>
              <select className="form-select shadow-none" value={city} onChange={(e) => { setCity(e.target?.value); setStore("") }}>
                <option value="" disabled selected>Select Store City</option>
                <option value="all" selected>All</option>
                {
                  storeCity?.map((val, index) => {
                    return (
                      <option key={val?._id + index} value={val?._id}>{val?.storeCity}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className=" col-5 mb-4">
              <label className="form-label text-capitalize">Select Store</label>
              <select className="form-select shadow-none" value={store} onChange={(e) => setStore(e.target?.value)}>
                <option value="" disabled selected>Select Store</option>
                {
                  storeDetails?.map((val, index) => {
                    return (
                      <>
                        {
                          val?.parentId == city ?
                            <option key={val?._id + index} value={val?._id}>{val?.storeAddress}</option>
                            : null
                        }
                      </>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
            <thead className='border'>
              <tr>
                {/* <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th> */}
                <th className='text-capitalize p-2 pb-4 border text-center' >Name</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Email</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Phone</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Store</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((val, index) => {
                  return (
                    val?.storeId == store || city == "all" ? <tr key={val?._id + "" + index + "" + Math?.random(10000)} className=''>
                      {/* <td className='align-middle' >{index + 1}</td> */}
                      <td className='align-middle' >{val?.inchargeName}</td>
                      <td className='align-middle'> {val?.inchargeEmail}</td>
                      <td className='align-middle'> {val?.inchargePhone}</td>
                      <td className='align-middle'> <Button className=' bg-info ' onClick={() => setModal({ active: true, storeAdd: val?.storeDetails?.storeAddress, storeContact: val?.storeDetails?.storePhone, storeMap: val?.storeDetails?.storeMap })}>View Store</Button></td>
                      <td className='text-center align-middle'>
                        <button onClick={() => setEditData({ active: true, _id: val?._id, name: val?.inchargeName, email: val?.inchargeEmail, phone: val?.inchargePhone })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                        <button onClick={() => deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2'>Delete</button>
                      </td>
                    </tr> : null)
                }
                )
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
                  <input autoComplete="off" value={modal?.storeAdd} disabled type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4  row col-12 mx-auto "}>
                  <label className="form-label">Store Contact</label>
                  <input autoComplete="off" value={modal?.storeContact} disabled type="text" className="form-control shadow-none" placeholder='write name here' />
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

export default StoreIncharge