import React from 'react'
import style from "./imageModal.module.scss"
import Image from 'next/image';
const ImageModal = ({modal,setModal}) => {
    return (
        <>
            <div className={style.modal + ` modal fade ${modal?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={() => setModal({ active: false, image: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center align-items-center">
                            <Image className="rounded w-100 h-100" width={250} height={200} objectFit="cover" src={modal?.image || "/assets/images/1.png"} alt="..." />
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setModal({ active: false, image: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageModal