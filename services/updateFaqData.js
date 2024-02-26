import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateFaqData = async ({ _id, faqQuestion,faqAnswer,helper, clearForm, setEditData,setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (faqQuestion == "" || faqAnswer.trim()=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {
            const result = await fetch("/api/admin/franchise-faq", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    faqQuestion:faqQuestion,
                    faqAnswer:faqAnswer,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
           //  helper()
            clearForm()
            setEditData({ active: false, _id: "", question:"",answer:"" })
        }
    }
    catch (err) {
        console.log("FAQ ERROR: " + err)
    }
}