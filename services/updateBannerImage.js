import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const updateBannerImage = async ({ _id, bannerImage, helper, clearForm, setEditData }) => {
    try {
        let url = ""
        if (bannerImage == "") {
            alert("Image is not selected")
        }
        else {

            if (typeof bannerImage === "string" && bannerImage?.includes("http")) {
                url = bannerImage
            }
            else if (bannerImage != "") {
                const imageRef = ref(storage, `images/${v4()+bannerImage?.name  }`)
                const snapshot = await uploadBytes(imageRef, bannerImage);
                url = await getDownloadURL(snapshot.ref);
            }
            const result = await fetch("/api/admin/home-banner", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    bannerImage: url
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", image: "" })
        }
    }
    catch (err) {
        console.log("HOME BANNER ERROR: " + err)
    }
}