export const adminSignUp = async ({ firstName, lastName, email, password ,confirmPassword}) => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("please fill all the fields correctly")
    }
    else if (password != confirmPassword) {
        alert("Confirm password not matched")
    }
    else {
        try {
            const result = await fetch("/api/admin/signUp", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, email, password
                })
            })
            const data = await result.json()
            alert(data.message)
        }
        catch (e) {
            console.log("error in signUp" + e)
        }
    }
}