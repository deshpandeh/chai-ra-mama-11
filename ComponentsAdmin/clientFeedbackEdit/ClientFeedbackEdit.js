"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import style from "./clientFeedbackEdit.module.scss"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";
import { useClientFeedbackContext } from "@/app/admin/client-feedback/page";
import { updateClientFbData } from "@/services/updateClientFbData";

const ClientFeedbackEdit = ({ editData, setEditData }) => {
  const { helper } = useClientFeedbackContext()
  const [clientName, setClientName] = useState("")
  const [clientComment, setClientComment] = useState("")
  const [clientDesignation, setClientDesignation] = useState("")
  const [clientImage, setclientImage] = useState("");
  const [_id, setId] = useState("")
  const imageRef = useRef()

  const updateData = async () => {
    await updateClientFbData({ _id, clientName, clientImage, clientComment,clientDesignation, helper, setEditData, clearForm })
  }

  const clearForm = () => {
    setClientName("")
    setClientComment("")
    setclientImage("")
    setClientDesignation("")
    imageRef.current.value = ""
  }
  useEffect(() => {
    clearForm()
    setClientName(editData?.name)
    setClientComment(editData?.content)
    setId(editData?._id)
    setclientImage(editData?.image);
    setClientDesignation(editData?.designation);
  }, [editData]);



  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, _id: "", name: "", image: "", content: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div className={' container-fluid my-4  '}>
              <div className={style.clientFeedbackEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Client Feedback</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className={" mb-4 "}>
                      <label className="form-label">Client Name</label>
                      <input  autocomplete="off"   value={clientName} onChange={(e) => setClientName(e.target?.value)} name="clientName" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Client Designation</label>
                      <input  autocomplete="off"   value={clientDesignation} onChange={(e) => setClientDesignation(e.target?.value)} name="clientName" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Edit Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof clientImage === "string" && clientImage?.includes("http") ? clientImage : clientImage != null && clientImage instanceof File ? URL.createObjectURL(clientImage) : "/assets/images/1.png"} hidden={clientImage ? false : true} alt="..." />
                      <input  autocomplete="off"   onChange={(e) => setclientImage(e.target?.files[0])} ref={imageRef} type="file" accept="image/*" className="form-control" id="editImage2" />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Client Feedback</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} formats={formats} value={clientComment} onChange={(value) => setClientComment(value)}
                          placeholder="Write something..." />
                      )}
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
            <button onClick={() => setEditData({ active: false,_id:"", name: "", image: "", content: "",designation:"" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientFeedbackEdit