import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const DeleteDataService = async ({ _id, helper, end_url }) => {
    try {
        const confirm = window.confirm("Do you want to delete this Item?")
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (confirm) {
            if (adminAuthData?.authorized) {
                const result = await fetch(`/api/admin/${end_url}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        _id: _id,   
                    })
                })
                const data = await result.json()
                alert(data?.message)
                helper()
            }
            else{
                alert("Unautherized User can't perfrom Delete Action")
            }
        }
    }
    catch (err) {
        console.log(`ERROR: ${end_url} ` + err)
    }
}