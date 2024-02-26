import { useState, useEffect } from "react";
import style from "./franchiseFaqAdd.module.scss"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";

import { AddFaqData } from "@/services/AddFaqData";
import PopUp from "../PopUp/PopUp";
import { usefaqContext } from "../adminPages/FranchiseFaqPage";

const FranchiseFaqAdd = ({ addData, setAddData }) => {
  const { helper } = usefaqContext()
  const [faqQuestion, setFaqQuestion] = useState();
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [faqAnswer, setFaqAnswer] = useState();
  const AddData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await AddFaqData({ faqQuestion, faqAnswer, helper, setAddData, clearForm ,setAlert})
  }
  const clearForm = () => {
    setFaqAnswer("")
    setFaqQuestion("")
  }
  useEffect(() => {
    clearForm()
  }, [])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />

      <div className={style.modal + ` modal fade ${addData && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setAddData(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body  d-flex justify-content-center align-items-center">

              <div className={' container-fluid my-4  '}>
                <div className={style.franchiseFaqAdd + ' row col-12 col-lg-10 shadow rounded-4 p-4  mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto pb-2 text-capitalize'}>Add Franchise Question</h3>
                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div className=''>

                      <div className={" mb-4 "}>
                        <label className="form-label">Question</label>
                        {typeof document !== 'undefined' && (
                          <ReactQuill modules={modules} value={faqQuestion} onChange={(value) => setFaqQuestion(value)} formats={formats}
                            placeholder="Write something..." />
                        )}
                      </div>
                      <div className={" mb-4 "}>
                        <label className="form-label">Answer</label>
                        {typeof document !== 'undefined' && (
                          <ReactQuill modules={modules} value={faqAnswer} onChange={(value) => setFaqAnswer(value)} formats={formats}
                            placeholder="Write something..." />
                        )}
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

export default FranchiseFaqAdd