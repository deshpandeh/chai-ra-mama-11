export const handleUserNavbar = async ({url,setCollapse,SetMenu,setActiveLink}) => {
    try {
        if (url.toLowerCase().includes("about")) setActiveLink("aboutus")
        else if (url.toLowerCase().includes("menu")) setActiveLink("menu")
        else if (url.toLowerCase().includes("franchise")) setActiveLink("franchise")
        else if (url.toLowerCase().includes("gallery")) setActiveLink("gallery")
        else if (url.toLowerCase().includes("feedback")) setActiveLink("feedback")
        else if (url.toLowerCase().includes("storeLocators")) setActiveLink("storeLocators")
        else if (url.toLowerCase().includes("contactus")) setActiveLink("contactus")
        else setActiveLink("home")
        setCollapse(true)
        SetMenu(true)
    }
    catch (err) {
        setActiveLink("home")
        console.log("err" + err)
    }
}