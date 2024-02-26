export const handleAdminNavbar = async ({ url, setCollapse, SetMenu, setActiveLink }) => {
    try {
        if (url.toLowerCase().includes("signin")) setActiveLink("signin")
        else if (url.toLowerCase().includes("signup")) setActiveLink("signup")
        else if (url.toLowerCase().includes("home")) setActiveLink("home")
        else if (url.toLowerCase().includes("profile")) setActiveLink("profile")
        setCollapse(true)
        SetMenu(true)
    }
    catch (err) {
        console.log("err" + err)
        setActiveLink("signin")
    }
}