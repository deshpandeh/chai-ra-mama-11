import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateStoreIncharge = async ({ _id, inchargeName, inchargePhone, inchargeEmail, helper, setEditData, clearForm,setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        if (inchargeEmail.trim() == ""|| inchargeName.trim()==""|| inchargePhone.trim()==""||_id=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {
            console.log(_id)
            const result = await fetch("/api/admin/store-incharge", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                   inchargeEmail,
                   inchargeName,
                   inchargePhone,
                   authId: adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            // helper()
            clearForm()
            setEditData({ active: false, _id: "", name: "", email: "",phone:"" })
        }
    }
    catch (err) {
        console.log("STORE INCHARGE UPDATE ERROR: " + err)
    }
}