export const getCmsData = async (setData) => {
    try { 
      const result = await fetch("/api/admin/cms-pages", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
      console.log(data)
    }
    catch (err) {
      console.log("error in fetching Cms page data" + err)
    }
  } 