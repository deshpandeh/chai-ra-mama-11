"use client"
import { useEffect, useState } from "react";
import style from "./cmsAdd.module.scss"
import Image from 'next/image';
import { formats, modules } from "@/utils/ReactTextEditor";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { useCmsData } from "@/app/admin/cmspages/page";
import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
const CmsAdd = ({ addData, setAddData }) => {
  const { data } = useCmsData()
  const [cmsId, setCmsId] = useState()
  const [cmsHeading, setCmsHeading] = useState()
  const [cmsImage, setCmsImage] = useState()
  const [cmsContent, setCmsContent] = useState()

  const UpdateData = async() => {

  //   if (cmsImage == null) return;
  //   const imageRef = ref(storage, `images/${cmsImage.name + v4()}`)
  //   const snapshot = await uploadBytes(imageRef, cmsImage);
  //   const url = await getDownloadURL(snapshot.ref);
  //   console.log(url);
  //   alert('Image uploaded');
  }

  return (
    <div className={style.modal + ` modal fade ${addData && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setAddData(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">

            <div className={' container-fluid my-4 '}>
              <div className={style.cmsAdd + 'row col-12 col-lg-10  shadow rounded-4   p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>{"Add  here"}</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-3'>
                  <div>
                    <div className="mb-4">
                      <label className="form-label">Select Cms Id</label>
                      <select class="form-select" value={cmsId} onChange={(e) => setCmsId(e.target.value)} aria-label="Default select example">
                        {
                          data?.map((val) => val?.status == "None" ? <option key={val?._id} value={val?.cmsId}>{val?.cmsId}</option> : null)
                        }
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Heading</label>
                      <input onChange={(e) => setCmsHeading(e.target.value)} value={cmsHeading} name="cmsHeading" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Upload Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={cmsImage!=null?URL.createObjectURL(cmsImage):"/assets/images/1.png"} hidden={cmsImage ? false : true} alt="..." />
                      <input type="file" onChange={(e) => setCmsImage(e.target.files[0])} accept="image/*" className="form-control" id="editImage" />
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
            <button onClick={() => setAddData(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CmsAdd