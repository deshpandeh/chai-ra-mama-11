"use client"
import { useEffect, useState } from 'react'
import style from "./cmsPages.module.scss"
import PagesIcon from '@mui/icons-material/Pages';
import Image from 'next/image';
import Link from 'next/link';
import CmsEdit from '../cmsEdit/CmsEdit';
import ImageModal from '../imageModal/ImageModal';
import CmsAdd from '../cmsAdd/CmsAdd';
import { useCmsData } from '@/app/admin/cmspages/page';
const CmsPages = () => {
  const { data,helper} = useCmsData()
  const [modal, setModal] = useState({ active: false, image: "",})
  const [editData, setEditData] = useState({ active: false, heading: "", image: "", content: "", _id:""})
  const [addData, setAddData] = useState(false)
  useEffect(()=>{
    helper()
  },[])
  return (

    <div className={style.cmsPages + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <PagesIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>CMS Pages</h3>
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add CMS Page</button>
        <Link href="./home" className='col-auto  btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <ImageModal modal={modal} setModal={setModal} />
      <CmsEdit editData={editData} setEditData={setEditData} />
      <CmsAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >IDs</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Heading</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {data?.map((val,index) => 
                 <tr key={index} className=''>
                  <td >{val?.cmsId}</td>
                  <td className='px-3 text-start'>{val?.cmsHeading }</td>
                  <td > <Image onClick={() => setModal({ active: true, image: val?.cmsImage || "/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.cmsImage || "/assets/images/1.png"} alt="..." /></td>
                  <td ><button onClick={() => setEditData({ active: true,_id:val?._id, heading: val?.cmsHeading, image: val?.cmsImage, content: val?.cmsContent })} className='btn btn-primary text-decoration-none '>Edit</button></td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CmsPages