"use client"
import { useEffect, useState } from 'react'
import style from "./clientMenu.module.scss"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from 'next/link';
import Image from 'next/image';;
import { DeleteDataService } from '@/services/deleteData';
import PopUp from '../PopUp/PopUp';
import ImageModal from '../imageModal/ImageModal';


import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useClientMenuContext } from '../adminPages/ClientMenuPage';

const ClientMenu = () => {
  const { clientMenuData, helper } = useClientMenuContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [modal, setModal] = useState({ active: false, image: "" })
  const [editData, setEditData] = useState({ active: false, _id: "", itemName: "", itemPrice: "",itemImage:"" })
  const [addData, setAddData] = useState(false)
  const deleteData = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending delete request to Admin" })
    await DeleteDataService({ _id, helper, end_url: "client-menu" ,setAlert})
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
      <div className={style.clientMenu + ' container-fluid my-4  shadow rounded-4 p-4'}>
        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <div className='col-auto  d-flex flex-row justify-content-start '>
            <RestaurantMenuIcon className={style.icon + ' col-auto my-auto p-0 '} />
            <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Client Menu</h3>
          </div>
          <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Menu Item</button>
          <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
        </div>
        <hr />
        <ImageModal modal={modal} setModal={setModal} />


        <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
          {
            clientMenuData ?
              <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
                <thead className='border'>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Item Name</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Item image</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Item Price</th>
                  <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                </thead>
                <tbody>
                  {
                    clientMenuData?.map((val, index) =>
                      <tr key={index + "" + Math?.random(10000)} className=''>
                        <td className='align-middle' >{index + 1}</td>
                        <td className='align-middle' >{val?.clientMenuName}</td>
                        <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.clientMenuImage || "/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.clientMenuImage || "/assets/images/1.png"} alt="..." /></td>
                        <td className='align-middle' >{val?.clientMenuPrice}</td>
                        <td className='text-center align-middle'>
                          <button  className='btn btn-primary text-decoration-none mx-2 text-capitalize'>Edit</button>
                          <button  className='btn btn-danger text-decoration-none m-2 text-capitalize'>Delete</button>
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

export default ClientMenu