export const adminLogout=async({setActiveLink,logout})=>{
    try {
        const result = await fetch("/api/admin/logout", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await result.json()
        setActiveLink("")
        logout()
    }
    catch (e) {
        console.log("error in logout"+e)
    }
}