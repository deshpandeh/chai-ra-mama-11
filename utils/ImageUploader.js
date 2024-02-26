import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const ImageUploder = async ({ cmsHeading, cmsImage, cmsContent,_id }) => {
    try {
        let url=""
        if(typeof cmsImage==="string" && cmsImage.includes("http")){
            url=cmsImage
        }
        else if (cmsImage != null) {
            const imageRef = ref(storage, `images/${cmsImage.name + v4()}`)
            const snapshot = await uploadBytes(imageRef, cmsImage);
            url = await getDownloadURL(snapshot.ref);
        }
        
        const result = await fetch("/api/admin/cms-pages", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },  
            body: JSON.stringify({
                cmsHeading, cmsImage:url, cmsContent,_id
            })
        })
        const data = await result.json()
        alert(data.message)
    }
    catch (err) {
        console.log("CMS ERROR: " + err)
    }
}