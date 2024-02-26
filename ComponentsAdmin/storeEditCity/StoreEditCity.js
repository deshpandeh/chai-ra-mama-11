"use client"
import { useEffect, useState } from "react";
import style from "./storeEditCity.module.scss"
import { useStoreLocatorContext } from "@/app/admin/store/page";
import { updateStoreCityData } from "@/services/updateStoreCityData";
import PopUp from "../PopUp/PopUp";

const StoreEditCity = ({ editData, setEditData }) => {
  const { helper } = useStoreLocatorContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeCity, setStoreCity] = useState()
  const [_id, setId] = useState("")

  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending update request to Admin" })
    await updateStoreCityData({ _id, storeCity, helper, setEditData, clearForm,setAlert })
  }
  const clearForm = () => {
    setStoreCity("")
  }
  useEffect(() => {
    clearForm()
    setStoreCity(editData?.city)
    setId(editData?._id)
  }, [editData])

  return (
    <>
      <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />

      <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setEditData({ active: false, city: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div>
              <div className={' container-fluid my-4  '}>
                <div className={style.storeEditCity + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Store city</h3>
                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div className=''>
                      <div className={" mb-4 "}>
                        <label className="form-label">City Name</label>
                        <input autocomplete="off" value={storeCity} onChange={(e) => setStoreCity(e.target?.value)} name="city" type="text" className="form-control" placeholder='Write city name here' />
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
              <button onClick={() => setEditData({ active: false, city: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreEditCity