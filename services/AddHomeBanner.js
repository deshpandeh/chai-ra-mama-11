import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddHomeBanner = async ({bannerImage, helper, clearForm, setAddData }) => {
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
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    bannerImage: url
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
        console.log("HOME BANNER ERROR: " + err)
    }
}