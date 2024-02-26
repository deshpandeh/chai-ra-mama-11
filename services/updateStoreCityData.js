import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateStoreCityData = async ({_id,storeCity ,helper,setEditData,clearForm,setAlert}) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        if (storeCity.trim() == "") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
            
        }
        else {
            
            const result = await fetch("/api/admin/store-locator", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    storeCity:storeCity,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            // helper()
            clearForm()
            setEditData({ active: false, _id: "", city:"" })
        }
    }
    catch (err) {
        console.log("STORE CITY ERROR: " + err)
    }
}