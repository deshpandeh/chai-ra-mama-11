"use client"
import { useEffect, useRef, useState } from "react";
import style from "./cmsEdit.module.scss"
import Image from 'next/image';
import { formats, modules } from "@/utils/ReactTextEditor";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { updateCmsData } from "@/services/updateCmsData";
import { useCmsData } from "@/app/admin/cmspages/page";

const CmsEdit = ({ editData, setEditData }) => {
  const { helper } = useCmsData()
  const [cmsHeading, setCmsHeading] = useState()
  const [cmsImage, setCmsImage] = useState()
  const [cmsContent, setCmsContent] = useState()
  const [_id, setId] = useState()
  const imageRef = useRef()
  const UpdateData = async () => {
    await updateCmsData({ cmsHeading, cmsContent, cmsImage, _id ,clearForm,helper,setEditData})

  }
  const clearForm = () => {
    setCmsHeading("")
    setCmsImage("")
    imageRef.current.value = ""
    setCmsContent("")
  }
  useEffect(() => {
    clearForm()
    setCmsHeading(editData?.heading)
    setCmsImage(editData?.image)
    setCmsContent(editData?.content)
    setId(editData?._id)
  }, [editData])
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, _id: "", heading: "", image: "", content: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">

            <div className={' container-fluid my-4 '}>
              <div className={style.cmsEdit + 'row col-12 col-lg-10  shadow rounded-4   p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>{"Edit here: "}</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div>
                    <div className="mb-4">
                      <label for="editHeading" className="form-label">Heading</label>
                      <input autocomplete="off" onChange={(e) => setCmsHeading(e.target.value)} value={cmsHeading} name="cmsHeading" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className="mb-4">
                      <label for="editImage" className="form-label">Upload Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof cmsImage === "string" && cmsImage?.includes("http") ? cmsImage : cmsImage != null && cmsImage instanceof File ? URL.createObjectURL(cmsImage) : "/assets/images/1.png"} hidden={cmsImage ? false : true} alt="..." />
                      <input autocomplete="off" type="file" onChange={(e) => setCmsImage(e.target.files[0])} ref={imageRef} accept="image/*" className="form-control" id="editImage" />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Content</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={cmsContent} onChange={(value) => setCmsContent(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <button onClick={UpdateData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => setEditData({ active: false, heading: "", _id: "", image: "", content: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CmsEdit