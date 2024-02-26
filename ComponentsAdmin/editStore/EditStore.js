"use client"
import { useEffect, useState } from 'react'
import style from "./editStore.module.scss"
import { useStoreContext } from '@/app/admin/store/add-store/[id]/page'
import { updateStoreData } from '@/services/updateStoreData'
import PopUp from '../PopUp/PopUp'

const EditStore = ({ editData, setEditData }) => {
  const { helper } = useStoreContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeAddress, setStoreAddress] = useState()
  const [storePhone, setStorePhone] = useState()
  const [storeMap, setStoreMap] = useState()
  const [_id, setId] = useState("")
  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending update request to Admin" })
    await updateStoreData({ _id, storeAddress, storeMap, storePhone, helper, setEditData, clearForm,setAlert })
  }
  const clearForm = () => {
    setStoreMap("")
    setStoreAddress("")
    setStorePhone("")
  }
  useEffect(() => {
    clearForm()
    setStoreAddress(editData?.address)
    setStoreMap(editData?.map)
    setStorePhone(editData?.phone)
    setId(editData?._id)
  }, [editData])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
      <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setEditData({ active: false, heading: "", phone: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div>
              <div className={' container-fluid my-4  '}>
                <div className={style.editStore + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Store Details</h3>
                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div className=''>
                      <div className={" mb-4 "}>
                        <label className="form-label">Store Address</label>
                        <input autocomplete="off" value={storeAddress} onChange={(e) => setStoreAddress(e.target?.value)} name="storeHeading" type="text" className="form-control" placeholder='write address here' />
                      </div>
                      <div className={" mb-4 "}>
                        <label className="form-label">Store Contact Number</label>
                        <input autocomplete="off" value={storePhone} onChange={(e) => setStorePhone(e.target?.value)} name="storeContact" type="text" className="form-control" placeholder='write phone number here' />
                      </div>
                      <div className={" mb-4 "}>
                        <label className="form-label">Store Map Link</label>
                        <input autocomplete="off" value={storeMap} onChange={(e) => setStoreMap(e.target?.value)} name="storeContact" type="text" className="form-control" placeholder='write map link here' />
                      </div>
                      <div className='row col-12 '>
                        <button onClick={clearForm} type="reset" className="btn btn-dark d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">reset</button>
                        <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div>
            <div className="modal-footer">
              <button onClick={() => setEditData({ active: false, heading: "", phone: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default EditStore