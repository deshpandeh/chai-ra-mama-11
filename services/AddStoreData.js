export const AddStoreData = async ({ parentId, storeAddress, storeMap, storePhone, helper, setAddData, clearForm ,setAlert}) => {
    try {
        if (parentId.trim() == "" || storeAddress.trim() == "" || storeMap.trim() == "" || storePhone.trim() == "") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {
            const result = await fetch("/api/admin/stores", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    parentId: parentId,
                    storeAddress:storeAddress,
                    storeMap:storeMap,
                    storePhone:storePhone
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
        console.log("STORE ERROR: " + err)
    }
}