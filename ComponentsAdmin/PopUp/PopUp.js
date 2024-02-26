"use client"
import { useEffect, useRef, useState } from "react";
import style from "./popUp.module.scss"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';
const PopUp = ({ modalActive, workStatus, message }) => {
  const [active, setActive] = useState(false)
  const [status, setStatus] = useState()
  useEffect(() => {
    setActive(modalActive)
    setStatus(workStatus)
  }, [workStatus])
  return (
    <div className={style.modal + ` modal fade ${active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">

          <div className="modal-body  d-flex justify-content-center align-items-center">
            <div className={' container-fluid my-4  '}>
              <div className={style.popUp + ' row col-12  p-4 mx-auto d-flex justify-content-center align-items-center'}>
                {status == "progress" && <HourglassEmptyRoundedIcon className={style.icon} />}
                {status == "done" && <CheckCircleOutlineRoundedIcon className={style.icon} />}
                {status == "failed" && <SentimentVeryDissatisfiedRoundedIcon className={style.icon} />}
              </div>
              <h5 className="text-center">{message}</h5>
            </div>
          </div>
          <div className="modal-header">
            <button onClick={() => setActive(false)} type="button" className=" ms-auto btn btn-primary shadow-none" data-bs-dismiss="modal" aria-label="Close">OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp