"use client"
import { useEffect, useState } from 'react'
import style from "./headers.module.scss"
import ImageIcon from '@mui/icons-material/Image';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import HeadersEdit from '../headersEdit/HeadersEdit';
import HeadersAdd from '../headerAdd/HeadersAdd';
import { useHeaderContext } from '@/app/admin/page-headers/page';
const HeadersList = () => {
  const { headerData,helper } = useHeaderContext()
  const [modal, setModal] = useState({ active: false, image: "" })
  const [editData, setEditData] = useState({ active: false, image: "",title:"",_id:"" })
  const [addData,setAddData]=useState(false)
  useEffect(() => {
    helper() 
  }, []) 

  return (

    <div className={style.headers + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <ImageIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Header Images</h3>
        </div>
        <button  onClick={()=>setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Header Images</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none ms-auto text-capitalize'> Go back</Link>
      </div>
      <hr />
      <ImageModal modal={modal} setModal={setModal} />
      <HeadersEdit editData={editData} setEditData={setEditData} />
      <HeadersAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Title</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {
              headerData?.map((val, index) =>
                <tr key={val?.headerTitle+""+index+""+Math?.random(10000)} className=''>
                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.headerTitle}</td>
                  <td className='align-middle'> <Image onClick={() => setModal({ active: true, image:val?.headerImage|| "/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.headerImage|| "/assets/images/1.png"} alt="..." /></td>
                  <td className='text-center align-middle'>
                    <button onClick={() => setEditData({ active: true, image: val?.headerImage, title: val?.headerTitle,_id:val?._id })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HeadersList