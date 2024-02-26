
export const checkUserLoginToken = async (cookie) => {
    try {
        const result = await fetch("/api/user/auth", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                token:cookie
            })
        })
        const data = await result.json()
        console.log(data)
        return data
    }
    catch (e) {
        console.log("error in authentication")
        return null
    }
}