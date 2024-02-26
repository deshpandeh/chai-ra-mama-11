"use client"
import style from "./headersAdd.module.scss"
import Image from 'next/image';

import { useState } from "react";

const HeadersAdd = ({ addData, setAddData }) => {
  const [headerName, setHeaderName] = useState();
  const [image, setImage] = useState();

  return (
    <div className={style.modal + ` modal fade ${addData && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setAddData(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">
            <div className={' container-fluid my-4  '}>
              <div className={style.headersAdd + 'row col-12 col-lg-10 shadow rounded-4  p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add  Header</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                  <div className={" mb-4 "}>
                      <label className="form-label">Header Name</label>
                      <input  autocomplete="off"   value={headerName} onChange={(e)=>setHeaderName(e.target?.value)} name="headerName" type="text" className="form-control" placeholder='write something here' />
                    
                    </div>
                    <div className="mb-4 ">
                      <label for="editImage" className="form-label">Upload Header Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." />
                      <input  autocomplete="off"   type="file" accept="image/*" className="form-control" id="editImage" />
                    </div>
                    <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">submit</button>
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
  )
}

export default HeadersAdd