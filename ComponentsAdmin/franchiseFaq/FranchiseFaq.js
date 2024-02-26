"use client"
import { useEffect, useState } from 'react'
import style from "./franchiseFaq.module.scss"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from 'next/link';
import FranchiseFaqEdit from '../franchiseFaqEdit/FranchiseFaqEdit';
import FranchiseFaqAdd from '../franchiseFaqAdd/FranchiseFaqAdd';
import { DeleteDataService } from '@/services/deleteData';
import PopUp from '../PopUp/PopUp';
import { usefaqContext } from '../adminPages/FranchiseFaqPage';
const FranchiseFaq = () => {
  const { faqData, helper } = usefaqContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [editData, setEditData] = useState({ active: false, _id: "", question: "", answer: "" })
  const [addData, setAddData] = useState(false)
  const deleteData = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending delete request to Admin" })
    await DeleteDataService({ _id, helper, end_url: "franchise-faq" ,setAlert})
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
      <div className={style.franchiseFaq + ' container-fluid my-4  shadow rounded-4 p-4'}>
        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <div className='col-auto  d-flex flex-row justify-content-start '>
            <QuestionAnswerIcon className={style.icon + ' col-auto my-auto p-0 '} />
            <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Franchise Questions</h3>
          </div>
          <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Franchise Question</button>
          <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
        </div>
        <hr />

        <FranchiseFaqEdit editData={editData} setEditData={setEditData} />
        <FranchiseFaqAdd addData={addData} setAddData={setAddData} />

        <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
          {
            faqData ?
              <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
                <thead className='border'>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Questions</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Answer</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                </thead>
                <tbody>
                  {
                    faqData?.map((val, index) =>
                      <tr key={index + "" + Math?.random(10000)} className=''>
                        <td className='align-middle' >{index + 1}</td>
                        <td className='align-middle' dangerouslySetInnerHTML={{ __html: val?.faqQuestion }}></td>
                        <td className='align-middle' dangerouslySetInnerHTML={{ __html: val?.faqAnswer }} ></td>
                        <td className='text-center align-middle'>
                          <button onClick={() => setEditData({ active: true, _id: val?._id, question: val?.faqQuestion, answer: val?.faqAnswer })} className='btn btn-primary text-decoration-none mx-2 text-capitalize'>Edit</button>
                          <button onClick={() => deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2 text-capitalize'>Delete</button>
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
              : <p className='text-center   text-capitalize'>oops..! No record found</p>
          }
        </div>
      </div>
    </>
  )
}

export default FranchiseFaq