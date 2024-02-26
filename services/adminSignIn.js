import Cookies from 'js-cookie';
export const adminSignIn = async ({ email, password, login, router }) => {
    if (!email || !password) {
        alert("please fill all input field")
        return
    }
    else {
        try {
            const result = await fetch("/api/admin/signIn", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await result.json()
            if (data?.status == 200) {
                Cookies.set("teaToken", data?.token, {
                    expires: 1
                })
                alert(data?.message)
                return data?.token
            }
            else {
                alert(data?.message)
                return null
            }
        }
        catch (e) {
            console.log("error in signIn" + e)
        }
    }
}