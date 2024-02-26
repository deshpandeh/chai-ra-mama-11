"use client"
import { AddStoreCityData } from "@/services/AddStoreCityData";
import style from "./storeAddCity.module.scss"
import { useEffect, useState } from "react";
import { useStoreLocatorContext } from "@/app/admin/store/page";
import PopUp from "../PopUp/PopUp";

const StoreAddCity = ({ addData, setAddData }) => {
  const { storeCityData, helper } = useStoreLocatorContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeCity, setStoreCity] = useState()
  const AddData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await AddStoreCityData({ storeCity, helper, setAddData, clearForm ,setAlert})
  }
  const clearForm = () => {
    setStoreCity("")
  }
  useEffect(() => {
    clearForm()
  }, [storeCityData])
  return (
    <>
      <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />

      <div className={style.modal + ` modal fade ${addData && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setAddData(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body  d-flex justify-content-center align-items-center">

              <div className={' container-fluid my-4  '}>

                <div className={style.storeAddCity + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add Store city</h3>
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
                        <button onClick={AddData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div>
            <div className="modal-footer">
              <button onClick={() => setAddData(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreAddCity