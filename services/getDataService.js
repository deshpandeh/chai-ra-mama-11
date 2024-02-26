export const getDataService = async (setData,end_url) => {
    try { 
      const result = await fetch(`/api/admin/${end_url}`, { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log(`Error in ${end_url}` + err)
    }
  }