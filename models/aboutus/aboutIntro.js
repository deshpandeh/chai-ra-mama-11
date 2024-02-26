import mongoose from "mongoose";

const aboutIntroSchema = new mongoose.Schema(
    {
        image: {
            type: String, 
        },
        heading:{
            type:String,
        },
        text:{
            type:String
        },
        list:[],
        
    },
    {
        timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
    }
)
 
const aboutIntro = mongoose.models.aboutIntro || mongoose.model('aboutIntro', aboutIntroSchema)

export default aboutIntro;