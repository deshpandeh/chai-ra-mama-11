import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateClientFbData = async ({ _id, clientImage, clientName,clientDesignation,clientComment,helper, clearForm, setEditData }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            alert("Unautherized User can't perfrom Update Action")
            return
        }
        let url = ""
        if (clientImage == "" || clientComment.trim()==""||clientName.trim()=="",clientDesignation.trim()=="") {
            alert("Please fill all the fields")
        }
        else {

            if (typeof clientImage === "string" && clientImage?.includes("http")) {
                url = clientImage
            }
            else if (clientImage != "") {
                const imageRef = ref(storage, `images/${v4()+clientImage?.name  }`)
                const snapshot = await uploadBytes(imageRef, clientImage);
                url = await getDownloadURL(snapshot.ref);
            }
            const result = await fetch("/api/admin/client-feedback", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    clientName:clientName,
                    clientComment:clientComment,
                    clientDesignation:clientDesignation,
                    clientImage:url
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", image: "",content:"",designation:"",name:"" })
        }
    }
    catch (err) {
        console.log("CLIENT FEEDNACK ERROR: " + err)
    }
}