"use client"
import { useEffect, useState } from 'react'
import style from "./homeBanner.module.scss"
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import HomeBannerEdit from '../homeBannerEdit/HomeBannerEdit';
import HomeBannerAdd from '../homeBannerAdd/HomeBannerAdd';
import { useHomeBannerContext } from '@/app/admin/homebanner/page';
import { deleteHomeBanner } from '@/services/deleteHomeBanner';
const HomeBanners = () => {
  const { bannerData, helper } = useHomeBannerContext()
  const [modal, setModal] = useState({ active: false, image: "" })
  const [editData, setEditData] = useState({ active: false, _id: "", image: "" })
  const [addData, setAddData] = useState(false)
  const deleteData=async(_id)=>{
    await deleteHomeBanner({_id,helper})
  }
  useEffect(() => {
    helper()
  }, [])
  return (

    <div className={style.homeBanner + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <ViewCarouselIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Home Banners</h3>
        </div>
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Home Banners</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <ImageModal modal={modal} setModal={setModal} />
      <HomeBannerEdit editData={editData} setEditData={setEditData} />
      <HomeBannerAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {
              bannerData?.map((val, index) =>
                <tr  key={index+""+Math?.random(10000)} className=''>
                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.bannerImage||"/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.bannerImage||"/assets/images/1.png"} alt="..." /></td>
                  <td className='text-center align-middle'>
                    <button onClick={() => setEditData({ active: true, image: val?.bannerImage,_id:val?._id })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                    <button onClick={()=>deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2'>Delete</button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomeBanners