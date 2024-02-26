import mongoose from "mongoose";

const aboutBestCoffeeSchema = new mongoose.Schema(
    {
        image: {
            type: String, 
        },
        heading:{
            type:String,
        },
        list:[],
        
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const aboutBestCoffee = mongoose.models.aboutBestCoffee || mongoose.model('aboutBestCoffee', aboutBestCoffeeSchema)

export default aboutBestCoffee;