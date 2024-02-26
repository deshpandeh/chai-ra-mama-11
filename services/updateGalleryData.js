import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateGalleryData = async ({_id, galleryImage, galleryTitle ,helper,setEditData,clearForm,setAlert}) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        if (galleryTitle.trim() == ""||galleryImage=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
            return
        }
        else {
            let url = ""
            if (typeof galleryImage === "string" && galleryImage.includes("http")) {
                url = galleryImage
            }
            else if (galleryImage!="") {
                const imageRef = ref(storage, `images/${v4()+galleryImage.name  }`)
                const snapshot = await uploadBytes(imageRef, galleryImage);
                url = await getDownloadURL(snapshot.ref);
            }
            const result = await fetch("/api/admin/gallery", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    galleryTitle: galleryTitle,
                    galleryImage: url,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            // helper()
            clearForm()
            setEditData({ active: false, _id: "", title: "", image: "" })
        }
    }
    catch (err) {
        console.log("GALLERY ERROR: " + err)
    }
}