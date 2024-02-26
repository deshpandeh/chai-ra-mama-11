import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddGalleryData = async ({ galleryImage, galleryTitle ,helper,setAddData,clearForm}) => {
    try {
        if (galleryTitle.trim() == ""||galleryImage=="") {
            alert("Please fill all the fields")
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
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    galleryTitle: galleryTitle,
                    galleryImage: url
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setAddData(false)
        }
    }
    catch (err) {
        console.log("GALLERY ERROR: " + err)
    }
}