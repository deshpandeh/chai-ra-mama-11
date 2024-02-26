import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddStoreIncharge = async ({ inchargeName, inchargeEmail, inchargePhone, helper, store, setAddData, clearForm,setAlert }) => {
    try {
        if (!inchargeEmail?.trim() || !inchargeName?.trim() || !inchargePhone?.trim() || !store) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the details" })
        }
        else {
            const result = await fetch("/api/admin/store-incharge", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    inchargeName, inchargeEmail, inchargePhone, 
                    storeId:store
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            helper()
            clearForm()
            setAddData(false)

        }
    }
    catch (err) {
        console.log("STORE INCHARGE ERROR: " + err)
    }
}