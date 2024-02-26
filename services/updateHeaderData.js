import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateHeaderData = async ({ _id, headerImage, helper ,setEditData}) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            alert("Unautherized User can't perfrom Update Action")
            return
        }
        let url = ""
        if (typeof headerImage === "string" && headerImage.includes("http")) {
            url = headerImage
        }
        else if (headerImage != "") {
            const imageRef = ref(storage, `images/${v4()+headerImage.name  }`)
            const snapshot = await uploadBytes(imageRef, headerImage);
            url = await getDownloadURL(snapshot.ref);
        }
        const result = await fetch("/api/admin/headers", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                headerImage: url,
            })
        })
        const data = await result.json()
        alert(data?.message)
        helper()
        setEditData({ active: false, image: "", title: "", _id: "" })

    }
    catch (err) {
        console.log("HEADER ERROR: " + err)
    }
}