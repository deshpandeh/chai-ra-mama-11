import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateStoreData = async ({_id, storeAddress,storeMap,storePhone,helper,setEditData,clearForm,setAlert}) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        if (storeAddress.trim() == ""|| storeMap.trim()==""|| storePhone.trim()=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {
            const result = await fetch("/api/admin/stores", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    storeAddress:storeAddress,
                    storePhone:storePhone,
                    storeMap:storeMap,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            // helper()
            clearForm()
            setEditData({ active: false, _id: "", address: "", map: "",phone:"" })
        }
    }
    catch (err) {
        console.log("STORE ERROR: " + err)
    }
}