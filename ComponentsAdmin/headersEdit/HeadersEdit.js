"use client"
import { useEffect, useRef, useState } from 'react'
import style from "./headersEdit.module.scss"
import Image from 'next/image';
import { useHeaderContext } from '@/app/admin/page-headers/page';
import { updateHeaderData } from '@/services/updateHeaderData';

const HeadersEdit = ({ editData, setEditData }) => {
  const { helper } = useHeaderContext()
  const [headerTitle, setHeaderTitle] = useState();
  const [headerImage, setHeaderImage] = useState();
  const [_id,setId]=useState()
  const imageRef = useRef()

  const updateData = async () => {
    await updateHeaderData({ _id,headerImage,helper,setEditData})
    clearForm()
  }
  const clearForm = () => {
    setHeaderImage("")
    setHeaderTitle("")
    setId("")
    imageRef.current.value = ""
  }
  useEffect(() => {
    clearForm()
    setHeaderImage(editData?.image)
    setHeaderTitle(editData?.title)
    setId(editData?._id)
  }, [editData]);
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, image: "", title: "",_id:"" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">

            <div className={' container-fluid my-4  '}>
              <div className={style.headersEdit + 'row col-12 col-lg-10 shadow rounded-4  p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit  Header</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className={" mb-4 "}>
                      <label className="form-label">Header Name</label>
                      <input  autocomplete="off"   disabled={true} value={headerTitle} name="headerName" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Edit Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof headerImage === "string" && headerImage?.includes("http") ? headerImage : headerImage != null && headerImage instanceof File ? URL.createObjectURL(headerImage) : "/assets/images/1.png"} hidden={headerImage ? false : true} alt="..." />
                      <input  autocomplete="off"   onChange={(e) => setHeaderImage(e.target?.files[0])} ref={imageRef}  type="file" accept="image/*" className="form-control" />
                    </div>
                    <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">update</button>
                  </div>
                </div>
              </div>
            </div >
          </div>
          <div className="modal-footer">
            <button onClick={() => setEditData({ active: false, image: "", title: "",_id:"" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadersEdit