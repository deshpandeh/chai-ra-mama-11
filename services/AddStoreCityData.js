export const AddStoreCityData = async ({ storeCity ,helper,setAddData,clearForm,setAlert}) => {
    try {
        if (storeCity.trim() == "") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {
            
            const result = await fetch("/api/admin/store-locator", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    storeCity:storeCity
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            helper()
            clearForm()
            setAddData(false)
        }
    }
    catch (err) {
        console.log("STORE CITY ERROR: " + err)
    }
}