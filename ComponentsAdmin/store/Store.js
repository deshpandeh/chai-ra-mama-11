"use client"
import { useEffect, useState } from 'react'
import style from "./store.module.scss"
import StoreIcon from '@mui/icons-material/Store';
import Link from 'next/link';
import EditStore from '../editStore/EditStore';
import AddStore from '../addStore/AddStore';
import { useStoreContext } from '@/app/admin/store/add-store/[id]/page';
import { DeleteDataService } from '@/services/deleteData';
import PopUp from '../PopUp/PopUp';
const Store = () => {
  const { storeData, helper } = useStoreContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [editData, setEditData] = useState({ active: false, _id: "", address: "", map: "", phone: "", })
  const [addData, setAddData] = useState(false)
  const deleteData = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending delete request to Admin" })
    await DeleteDataService({ _id, helper, end_url: "stores" ,setAlert})
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />

      <div className={style.store + ' container-fluid my-4  shadow rounded-4 p-4'}>

        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <div className='col-auto  d-flex flex-row justify-content-start '>
            <StoreIcon className={style.icon + ' col-auto my-auto p-0 '} />
            <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Add Store</h3>
          </div>
          <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add New Store</button>
          <Link href="../" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
        </div>
        <hr />
        <EditStore editData={editData} setEditData={setEditData} />
        <AddStore addData={addData} setAddData={setAddData} />

        <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
          <table className="col-12 table table-bordered table-hover  text-center text-capitalize  ">
            <thead className='border'>
              <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
              <th className='text-capitalize p-2 pb-4 border text-center' >Address</th>
              <th className='text-capitalize p-2 pb-4 border text-center' >Phone Number</th>
              <th className='text-capitalize p-2 pb-4 border text-center' >Map</th>
              <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
            </thead>
            <tbody>
              {
                storeData?.map((val, index) =>
                  <tr key={val?.storePhone + "" + index + "" + Math?.random(10000)} className=''>
                    <td className='align-middle' >{index + 1}</td>
                    <td className='align-middle' >{val?.storeAddress}</td>
                    <td className='align-middle' >{val?.storePhone}</td>
                    <td className='align-middle'><button className='btn btn-secondary text-light text-decoration-none text-uppercase' onClick={() => window.open(val?.storeMap || "", '_blank')}>view map</button> </td>
                    <td className='text-center align-middle'>
                      <button onClick={() => setEditData({ active: true, _id: val?._id, address: val?.storeAddress, phone: val?.storePhone, map: val?.storeMap })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                      <button onClick={() => deleteData(val?._id)} className='btn btn-danger text-decoration-none mx-2'>Delete</button>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Store