"use client"
import { useEffect, useState } from 'react'
import style from "./storeInchargeEdit.module.scss"
import { updateStoreIncharge } from '@/services/updateStoreIncharge';
import PopUp from '../PopUp/PopUp';
import { useStoreInchargeData } from '../adminPages/StoreInchargePage';

const StoreInchargeEdit = ({ editData, setEditData }) => {
  const { helper } = useStoreInchargeData()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [inchargeName, setInchargeName] = useState("")
  const [inchargeEmail, setInchargeEmail] = useState("");
  const [inchargePhone, setInchargePhone] = useState("");
  const [_id, setId] = useState("")

  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending update request to Admin" })
    await updateStoreIncharge({ _id, inchargeName, inchargePhone, inchargeEmail, helper, setEditData, clearForm ,setAlert})
  }

  const clearForm = () => {
    setInchargeName("")
    setInchargeEmail("")
    setInchargePhone("")
  }
  useEffect(() => {
    clearForm()
    setInchargeName(editData?.name)
    setInchargeEmail(editData?.email)
    setInchargePhone(editData?.phone)
    setId(editData?._id)
  }, [editData])

  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />

      <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setEditData({ active: false, _id: "", name: "", email: "", phone: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body  d-flex justify-content-center align-items-center">

              <div className={' container-fluid my-4  '}>
                <div className={style.storeInchargeEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit store incharge</h3>
                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div>
                      <div className="mb-4">
                        <div className={" mb-4 "}>
                          <label className="form-label">Name</label>
                          <input  autoComplete="off"  value={inchargeName} onChange={(e) => setInchargeName(e.target?.value)} type="text" className="form-control shadow-none" placeholder='write name here' />
                        </div>
                        <div className={" mb-4 "}>
                          <label className="form-label">Email</label>
                          <input  autoComplete="off"  value={inchargeEmail} onChange={(e) => setInchargeEmail(e.target?.value)} type="email" className="form-control shadow-none" placeholder='write email here' />
                        </div>
                        <div className={" mb-4 "}>
                          <label className="form-label">Phone</label>
                          <input  autoComplete="off"  value={inchargePhone} onChange={(e) => setInchargePhone(e.target?.value)} type="number" className="form-control shadow-none" placeholder='write phone number here' />
                        </div>
                      </div>
                      <div className='row col-12 '>
                        <button onClick={clearForm} type="reset" className="btn btn-dark d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">reset</button>
                        <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setEditData({ active: false, _id: "", name: "", email: "", phone: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreInchargeEdit