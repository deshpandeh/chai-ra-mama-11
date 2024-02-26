"use client"
import { useEffect, useState } from 'react'
import style from "./clientFeedback.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import ClientFeedbackEdit from '../clientFeedbackEdit/ClientFeedbackEdit';
import ClientFeedbackAdd from '../clientFeedbackAdd/ClientFeedbackAdd';

import { useClientFeedbackContext } from '@/app/admin/client-feedback/page';
import { DeleteDataService } from '@/services/deleteData';
const ClientFeedback = () => {
  const{clientFbData, helper}= useClientFeedbackContext()
  const [modal, setModal] = useState({ active: false, image: "" })
  const [editData, setEditData] = useState({ active: false, name: "", image: "", content: "",designation:"", _id: "" })
  const [addData, setAddData] = useState(false)
  const deleteData = async (_id) => {
    await DeleteDataService({ _id, helper,end_url:"client-feedback" })
  }
  useEffect(() => {
    helper()
  }, [])
  return (

    <div className={style.clientFeedback + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <GroupIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Client Feedback</h3>
        </div>
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Client Feedback</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <ImageModal modal={modal} setModal={setModal} />
      <ClientFeedbackEdit editData={editData} setEditData={setEditData} />
      <ClientFeedbackAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Designation</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Feedback</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {
              clientFbData?.map((val, index) =>
                <tr key={index+""+Math?.random(10000)} className=''>
                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.clientName}</td>
                  <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.clientImage||"/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.clientImage||"/assets/images/1.png"} alt="..." /></td>
                  <td className='align-middle' >{val?.clientDesignation}</td>
                  <td className='align-middle' dangerouslySetInnerHTML={{ __html: val?.clientComment}}></td>
                  <td className='text-center align-middle'>
                    <button onClick={() => setEditData({ name:val?.clientName,_id:val?._id,designation:val?.clientDesignation, image: val?.clientImage, content:val?.clientComment, active: true })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                    <button onClick={()=>deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2 text-capitalize'>Delete</button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClientFeedback
