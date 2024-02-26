"use client"
import { useEffect, useState } from 'react'
import style from "./gallery.module.scss"
import CollectionsIcon from '@mui/icons-material/Collections';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import GalleryEdit from '../galleryEdit/GalleryEdit';
import GalleryAdd from '../galleryAdd/GalleryAdd';
import { useGalleryData } from '@/app/admin/gallery/page';
import { DeleteDataService } from '@/services/deleteData';
const Gallery = () => {
  const { data, helper } = useGalleryData()
  const [modal, setModal] = useState({ active: false, image: ""})
  const [addData, setAddData] = useState(false)
  const [editData, setEditData] = useState({ active: false, _id:"", title:"", image: ""})
  
  const deleteData=async(_id)=>{
    await DeleteDataService({_id,helper,end_url:"gallery"})
  }
  useEffect(() => {
    helper() 
  }, []) 

  return (

    <div className={style.gallery + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <CollectionsIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>gallery images</h3>
        </div>
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add gallery images</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <ImageModal modal={modal} setModal={setModal} />
      <GalleryEdit editData={editData} setEditData={setEditData} />
      <GalleryAdd addData={addData} setAddData={setAddData} />

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
              data?.map((val, index) =>
                <tr key={val?.galleryTitle+""+index+""+Math?.random(10000)} className=''>
                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.galleryTitle }</td>
                  <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.galleryImage||"/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.galleryImage || "/assets/images/1.png"} alt="..." /></td>
                  <td className='text-center align-middle'>
                    <button onClick={() => setEditData({ active: true,_id:val?._id,title:val?.galleryTitle, image: val?.galleryImage})} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                    <button onClick={()=>deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2'>Delete</button>
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

export default Gallery