"use client"
import { useEffect, useRef, useState } from 'react'
import style from "./homeBannerEdit.module.scss"
import Image from 'next/image';
import { useHomeBannerContext } from '@/app/admin/homebanner/page';
import { updateBannerImage } from '@/services/updateBannerImage';
const HomeBannerEdit = ({ editData, setEditData }) => {
  const { helper } = useHomeBannerContext()
  const [bannerImage, setBannerImage] = useState("");
  const [_id, setId] = useState("")
  const imageRef = useRef()

  const updateData = async () => {
    await updateBannerImage({ _id, bannerImage, helper, clearForm, setEditData })
  }
  const clearForm = () => {
    setBannerImage("")
    imageRef.current.value = ""
  }
  useEffect(() => {
    clearForm()
    setBannerImage(editData?.image)
    setId(editData?._id)
  }, [editData])
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false,_id:"", image: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">

            <div className={' container-fluid my-4  '}>
              <div className={style.homeBannerEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit home banner</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div>
                    <div className="mb-4">
                      <label for="editImage2" className="form-label">Edit Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof bannerImage === "string" && bannerImage?.includes("http") ? bannerImage : bannerImage != null && bannerImage instanceof File ? URL.createObjectURL(bannerImage) : "/assets/images/1.png"} hidden={bannerImage ? false : true} alt="..." />
                      <input  autocomplete="off"   onChange={(e) => setBannerImage(e.target?.files[0])} ref={imageRef} type="file" accept="image/*" className="form-control" id="editImage2" />
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
            <button onClick={() => setEditData({ active: false,_id:"", image: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBannerEdit